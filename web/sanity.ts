import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from 'next-sanity';

const sanityBaseConfig = {
  dataset: 'production',
  projectId: 'ozqarahg',
  useCdn: false,
};

if (!sanityBaseConfig.projectId)
  throw Error('The Project ID is not set. Check your environment variables.');

if (!sanityBaseConfig.dataset)
  throw Error('The dataset name is not set. Check your environment variables.');

/**
 * Helper function for generating Image URLs with only the asset reference data (https://www.sanity.io/docs/image-url)
 */
export const urlFor = (source: SanityImageSource): string | null =>
  createImageUrlBuilder(sanityBaseConfig).image(source).url();

/**
 * Set up the live preview subscription hook
 */
export const usePreviewSubscription = createPreviewSubscriptionHook(sanityBaseConfig);

/**
 * Component for Portable Text (does serialization)
 */
export const PortableText = createPortableTextComponent({
  ...sanityBaseConfig,
  // Serializers passed to @sanity/block-content-to-react (https://github.com/sanity-io/block-content-to-react)
  serializers: {},
});

/**
 * Client for fetching data in the getStaticProps page functions
 */
export const sanityClient = createClient(sanityBaseConfig);

// // Set up a preview client with serverless authentication for drafts
// export const previewClient = createClient({
//   ...config,
//   useCdn: false,
// });

// // Helper function for easily switching between normal client and preview client
// export const getClient = (usePreview) => (usePreview ? previewClient : sanityClient);
