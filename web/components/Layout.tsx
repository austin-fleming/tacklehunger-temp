import React, { Fragment } from 'react';
import { Container } from '@material-ui/core';
import { LogoJsonLd } from 'next-seo';
import Head from 'next/head';
import { Footer } from './Footer';
import { Header } from './Header';

type LayoutProps = {
  config: {
    footerNavigation: Record<string, unknown>[];
    footerText: Record<string, unknown>[];
    logo: { asset: { url: string } };
    mainNavigation: Record<string, unknown>[];
    title: string;
    url: string;
  };
};

export const Layout: React.FC<LayoutProps> = ({ config, children }) => {
  if (!config) {
    console.error('Missing config');
    return <div>Missing config</div>;
  }

  const { title, mainNavigation, footerNavigation, footerText, logo, url } = config;
  const logoUrl = logo?.asset?.url;

  return (
    <Fragment>
      <Head>
        <link href='https://fonts.gstatic.com' rel='preconnect' />
        <link
          href='https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap'
          rel='stylesheet'
        />
        <meta content='initial-scale=1.0, width=device-width, viewport-fit=cover' name='viewport' />
      </Head>
      <Container disableGutters maxWidth='lg'>
        <Header logo={logo} navItems={mainNavigation} title={title} />
        <div className='content'>{children}</div>
        <Footer navItems={footerNavigation} text={footerText} />
        {logoUrl && url && <LogoJsonLd logo={logoUrl} url={url} />}
      </Container>
    </Fragment>
  );
};
