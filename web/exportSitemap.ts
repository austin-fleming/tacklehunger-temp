// eslint-disable-next-line import/no-nodejs-modules
import { createWriteStream } from 'fs';
import { SitemapStream } from 'sitemap';
import { exportPathMap } from './exportPathMap';
import { sanityClient } from './sanity';

sanityClient.fetch(`*[_id == "global-config"] {url}[0]`).then(({ url: hostname }) => {
  exportPathMap().then((res) => {
    const sitemap = new SitemapStream({ hostname });
    sitemap.pipe(createWriteStream('./out/sitemap.xml'));

    Object.entries(res).forEach(([url, { includeInSitemap, disallowRobots, _updatedAt }]) => {
      if (includeInSitemap && !disallowRobots)
        sitemap.write({ changeFreq: 'hourly', lastmod: new Date(_updatedAt), url });
    });
    sitemap.end();
    // eslint-disable-next-line no-console
    console.log(`sitemap.xml updated`);
  });
});
