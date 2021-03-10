import schemaTypes from 'all:part:@sanity/base/schema-type'; // Plugins schema types
import createSchema from 'part:@sanity/base/schema-creator';
import page from './documents/page';
import route from './documents/route';
import siteConfig from './documents/siteConfig';
import ctaButton from './objects/ctaButton';
import customPortableText from './objects/customPortableText';
import embedHTML from './objects/embedHTML';
import figure from './objects/figure';
import internalLink from './objects/internalLink';
import link from './objects/link';
import portableText from './objects/portableText';
import section from './objects/section';
import simplePortableText from './objects/simplePortableText';
// Deprecated landing page sections
//   import hero from './objects/hero';
//   import imageSection from './objects/imageSection';
//   import textSection from './objects/textSection';

export default createSchema({
  name: 'default',
  // Concatenate our document types to those provided by plugins
  types: schemaTypes.concat([
    ctaButton,
    customPortableText,
    embedHTML,
    figure,
    internalLink,
    link,
    page,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    section,
  ]),
});
