import React from 'react';
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
    <React.Fragment>
      <Head>
        <meta content='initial-scale=1.0, width=device-width, viewport-fit=cover' name='viewport' />
      </Head>
      <div className='container'>
        <Header logo={logo} navItems={mainNavigation} title={title} />
        <div className='content'>{children}</div>
        <Footer navItems={footerNavigation} text={footerText} />
        {logoUrl && url && <LogoJsonLd logo={logoUrl} url={url} />}
      </div>
    </React.Fragment>
  );
};
