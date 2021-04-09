import { getAssetFromKV, Options } from '@cloudflare/kv-asset-handler';
import Toucan from 'toucan-js';

/**
 * This is a Cloudflare Worker running in V8 clusters on their edge network.
 *
 * addEventListener() is CF's defacto first function that wraps handleEvent() so
 *   everything else can run asynchronously.
 *
 * The DEBUG flag (set in wrangler.toml) will do two things to aid development:
 * 1. we will skip caching on the edge, which makes it easier to debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
addEventListener('fetch', (event) => {
  const sentry = new Toucan({
    allowedHeaders: ['user-agent'],
    allowedSearchParams: /(.*)/,
    debug: DEBUG === 'true',
    dsn: 'https://4ebb21969a43444d835474cd98a53492@o438819.ingest.sentry.io/5712876',
    environment: ENV_NAME,
    event,
  });

  try {
    event.respondWith(handleFetchEvent(event, sentry));
  } catch (e) {
    sentry.captureException(e);
    event.respondWith(
      new Response(DEBUG === 'true' ? e.message || e.toString() : 'Internal Error', { status: 500 })
    );
  }
});

/**
 * TackleHunger's custom logic for this CDN to:
 *  - Serve static assets (i.e. website html,js,css,images files)
 *  - Handle API endpoints on the worker (CF's Edge Network)
 *  - Store & serve data & images direct from CF's 'Key Value' Store (KV) (essentially NoSQL tables)
 */
const handleFetchEvent = async (event: FetchEvent, sentry: Toucan) => {
  const path = new URL(event.request.url).pathname;

  const options: Partial<Options> = {};

  /**
   * If the route's path has no filetype ending then serve 'that page'.html
   *
   *   i.e. '/admin' or '/donate?...' gets served '/admin.html', '/donate.html', etc.
   *
   * (also serves static preview pages instead of dynamic slugs)
   */
  if (path.length > 5 && !path.match(/\.[a-zA-Z]{2,5}$/g)) {
    const assetPath = url.split('?')[0].replace(/\/preview\/.+$/, '/preview/[slug]');

    options.mapRequestToAsset = (req) => new Request(`${assetPath}.html`, req);
  }

  /**
   * The remainder here is Cloudflare's default workers-site handler logic -
   *   handles the root condition and any other files Next or Sanity webpacked into the bundle
   */
  try {
    if (DEBUG === 'true') options.cacheControl = { bypassCache: true };

    return await getAssetFromKV(event, options);
  } catch (error) {
    sentry.captureException(error);
    // if an error is thrown try to serve the asset at 404.html
    if (DEBUG === 'false') {
      try {
        const notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: (req) => new Request(`${new URL(req.url).origin}/404.html`, req),
        });

        return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 });
      } catch (err) {
        sentry.captureException(err);
      }
    }

    throw error;
  }
};
