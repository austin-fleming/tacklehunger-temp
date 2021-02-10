import React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { appTheme } from '../theme';

// TODO: add this data into each page (formerly getInitialProps)
//
//     const siteConfigQuery = `
//       *[_id == "global-config"] {
//         ...,
//         logo {asset->{extension, url}},
//         mainNavigation[] -> {
//           ...,
//           "title": page->title
//         },
//         footerNavigation[] -> {
//           ...,
//           "title": page->title
//         }
//       }[0]`;
//

export const cache = createCache({ key: 'css' });

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    <Head>
      <title>Souper Bowl of Caring - TackleHunger.org</title>
      {/* see: https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}
      <meta content='minimum-scale=1, initial-scale=1, width=device-width' name='viewport' />
    </Head>
    <StylesProvider injectFirst>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StylesProvider>
  </CacheProvider>
);

export default App;
