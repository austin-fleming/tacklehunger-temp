import type {
  SanityAsset,
  SanityBlock,
  SanityDocument,
  SanityFile,
  SanityGeoPoint,
  SanityImage,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityKeyedReference,
  SanityReference,
} from 'sanity-codegen';

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
};

/**
 * Page
 *
 *
 */
export type Page = {
  _type: 'page';

  /**
   * Page sections — `array`
   *
   *
   */
  content?: Array<SanityKeyed<Section>>;

  /**
   * Description — `text`
   *
   * This description populates meta-tags on the webpage
   */
  description?: string;

  /**
   * Open Graph Image — `image`
   *
   * Image for sharing previews on Facebook, Twitter etc.
   */
  openGraphImage?: {
    _type: 'openGraphImage';
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Title — `string`
   *
   *
   */
  title?: string;
} & SanityDocument;

/**
 * Route
 *
 *
 */
export type Route = {
  _type: 'route';

  /**
   * Disallow in robots.txt — `boolean`
   *
   * Hide this route for search engines
   */
  disallowRobots?: boolean;

  /**
   * Include page in sitemap — `boolean`
   *
   * For search engines. Will be added to /sitemap.xml
   */
  includeInSitemap?: boolean;

  /**
   * page — `reference`
   *
   * Select the page that this route should point to
   */
  page?: SanityReference<Page>;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string };
} & SanityDocument;

/**
 * Site configuration
 *
 *
 */
export type SiteConfig = {
  _type: 'site-config';

  /**
   * Footer navigation items — `array`
   *
   *
   */
  footerNavigation?: Array<SanityKeyedReference<Route>>;

  /**
   * footerText — `simplePortableText`
   *
   *
   */
  footerText?: SimplePortableText;

  /**
   * frontpage — `reference`
   *
   * Choose page to be the frontpage
   */
  frontpage?: SanityReference<Page>;

  /**
   * Site language — `string`
   *
   * Should be a valid bcp47 language code like en, en-US, no or nb-NO
   */
  lang?: string;

  /**
   * Brand logo — `image`
   *
   * Best choice is to use an SVG where the color are set with currentColor
   */
  logo?: {
    _type: 'logo';
    /**
     * Alternative text — `string`
     *
     * Important for SEO and accessiblity.
     */
    alt?: string;
    asset: SanityAsset;
    crop?: SanityImageCrop;

    hotspot?: SanityImageHotspot;
  };

  /**
   * Main navigation — `array`
   *
   * Select pages for the top menu
   */
  mainNavigation?: Array<SanityKeyedReference<Route>>;

  /**
   * Site title — `string`
   *
   *
   */
  title?: string;

  /**
   * URL — `url`
   *
   * The main site url. Used to create canonical url
   */
  url?: string;
} & SanityDocument;

export type CtaButton = {
  _type: 'ctaButton';
  /**
   * Button Color — `color`
   *
   *
   */
  buttonColor?: Color;

  /**
   * External link — `url`
   *
   *
   */
  link?: string;

  /**
   * Internal link — `reference`
   *
   * Use this to link between pages on the website
   */
  route?: SanityReference<Route>;

  /**
   * Text — `string`
   *
   *
   */
  text?: string;
};

export type CustomPortableText = Array<SanityKeyed<SanityBlock> | SanityKeyed<EmbedHTML>>;

export type EmbedHTML = {
  _type: 'embedHTML';
  /**
   * HTML — `text`
   *
   * You usually want to avoid storing freeform HTML, but for embed codes it can be useful.
   */
  html?: string;
};

export type Figure = {
  _type: 'figure';
  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessiblity.
   */
  alt?: string;
  asset: SanityAsset;
  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;

  crop?: SanityImageCrop;

  hotspot?: SanityImageHotspot;
};

export type InternalLink = SanityReference<Page | Route>;

export type Link = {
  _type: 'link';
  /**
   * URL — `url`
   *
   *
   */
  href?: string;
};

export type PortableText = Array<
  SanityKeyed<SanityBlock> | SanityKeyed<Figure> | SanityKeyed<EmbedHTML>
>;

export type SimplePortableText = Array<SanityKeyed<SanityBlock> | SanityKeyed<EmbedHTML>>;

export type Section = {
  _type: 'section';
  /**
   * Background image — `image`
   *
   *
   */
  backgroundImage?: {
    _type: 'backgroundImage';
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Call to action Buttons — `array`
   *
   *
   */
  ctaButtons?: Array<SanityKeyed<CtaButton>>;

  /**
   * Heading Above — `customPortableText`
   *
   *
   */
  headingAbove?: CustomPortableText;

  /**
   * Heading Below — `customPortableText`
   *
   *
   */
  headingBelow?: CustomPortableText;

  /**
   * Heading Left — `customPortableText`
   *
   *
   */
  headingLeft?: CustomPortableText;

  /**
   * Heading Right — `customPortableText`
   *
   *
   */
  headingRight?: CustomPortableText;

  /**
   * Image — `figure`
   *
   *
   */
  image?: Figure;

  /**
   * Label — `string`
   *
   * Hidden name for the section so it can be linked to
   */
  label?: string;

  /**
   * Text — `customPortableText`
   *
   *
   */
  text?: CustomPortableText;
};

export type Documents = Page | Route | SiteConfig;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Color = any;
