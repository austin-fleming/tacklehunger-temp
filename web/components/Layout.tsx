import React from 'react';
import { LogoJsonLd } from 'next-seo';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC<{ config: any }> = ({ config, children }) => {
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

// Layout.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.node),
//   config: PropTypes.shape({
//     footerNavigation: PropTypes.arrayOf(PropTypes.object),
//     footerText: PropTypes.arrayOf(PropTypes.object),
//     logo: PropTypes.shape({
//       asset: PropTypes.shape({
//         url: PropTypes.string,
//       }),
//     }),
//     mainNavigation: PropTypes.arrayOf(PropTypes.object),
//     title: PropTypes.string,
//     url: PropTypes.string,
//   }),
// };

export default Layout;
