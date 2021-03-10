/* eslint-disable import/no-extraneous-dependencies */
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from 'next-sanity';
import fetch from 'node-fetch';
import { createClient } from 'sanity-codegen';
import { Documents } from '../types/generated/schema';

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
export const urlFor = (source: SanityImageSource): string =>
  createImageUrlBuilder(sanityBaseConfig).image(source).url() || '';

/**
 * Set up the live preview subscription hook
 */
export const usePreviewSubscription = createPreviewSubscriptionHook(sanityBaseConfig);

/**
 * Component for Portable Text - takes Serializers passed to @sanity/block-content-to-react (https://github.com/sanity-io/block-content-to-react)
 */
export const PortableText = createPortableTextComponent({ ...sanityBaseConfig, serializers: {} });

/**
 * Client for fetching data in the getStaticProps page functions
 */
export const sanity = createClient<Documents>({ ...sanityBaseConfig, fetch: fetch as any });
