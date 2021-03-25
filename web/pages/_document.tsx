import React from 'react';
import createEmotionServer from '@emotion/server/create-instance';
import { ServerStyleSheets } from '@material-ui/core';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { cache } from './_app';

const { extractCritical } = createEmotionServer(cache);

export default class MyDocument extends Document<{ lang: string }> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const muiSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({ enhanceApp: (App) => (props) => muiSheets.collect(<App {...props} />) });

    const initialProps = await Document.getInitialProps(ctx);

    const styles = [...React.Children.toArray(initialProps.styles), muiSheets.getStyleElement()];

    // Don't inline critical css in development because makes debugging in devtools difficult
    if (process.env.NEXT_PUBLIC_INLINE_CSS !== 'false') {
      const criticalStyles = extractCritical(initialProps.html);
      styles.push(
        <style
          key='emotion-style-tag'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: criticalStyles.css }}
          data-emotion-css={criticalStyles.ids.join(' ')}
        />
      );
    }

    // TODO: add lang to each page (formerly getInitialProps)
    //    sanity.fetch('*[_id == "global-config"] {lang}.lang[0]').then((lang: string) => (
    return { ...initialProps, styles };
  }

  // TODO: add
  render(): JSX.Element {
    return (
      <Html lang={this.props.lang || 'en'}>
        <Head>
          {/* TODO: add GoogleAnalytics, icons, & manifest:
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
              <GoogleAnalytics id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
            )}
            <link href='/android-chrome-512x512.png' rel='icon' sizes='512x512' type='image/png' />
            <link href='/android-chrome-192x192.png' rel='icon' sizes='192x192' type='image/png' />
            <link
              href='/apple-touch-icon.png'
              rel='apple-touch-icon'
              sizes='76x76 120x120 152x152 180x180'
            />
            <link href='/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png' />
            <link href='/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png' />
            */}
          <link href='/favicon.ico' rel='shortcut icon' />
          <link href='/site.webmanifest' rel='manifest' />
          <meta charSet='utf-8' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
