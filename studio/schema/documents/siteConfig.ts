import bcp47 from 'bcp47';

export default {
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  // __experimental_actions: [/* create, delete, */ 'update', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Site title',
      type: 'string',
    },
    {
      description: 'The main site url. Used to create canonical url',
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      description: 'Choose page to be the frontpage',
      name: 'frontpage',
      to: { type: 'page' },
      type: 'reference',
    },
    {
      description: 'Should be a valid bcp47 language code like en, en-US, no or nb-NO',
      name: 'lang',
      title: 'Site language',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((lang) => (bcp47.parse(lang) ? true : 'Please use a valid bcp47 code')),
    },
    {
      description: 'Best choice is to use an SVG where the color are set with currentColor',
      fields: [
        {
          description: 'Important for SEO and accessiblity.',
          name: 'alt',
          options: {
            isHighlighted: true,
          },
          title: 'Alternative text',
          type: 'string',
        },
      ],
      name: 'logo',
      title: 'Brand logo',
      type: 'image',
    },
    {
      description: 'Select pages for the top menu',
      name: 'mainNavigation',
      of: [
        {
          to: [{ type: 'route' }],
          type: 'reference',
        },
      ],
      title: 'Main navigation',
      type: 'array',
      validation: (Rule) => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
    },
    {
      fieldset: 'footer',
      name: 'footerNavigation',
      of: [
        {
          to: [{ type: 'route' }],
          type: 'reference',
        },
      ],
      title: 'Footer navigation items',
      type: 'array',
      validation: (Rule) => [
        Rule.max(10).warning('Are you sure you want more than 10 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
    },
    {
      fieldset: 'footer',
      name: 'footerText',
      type: 'simplePortableText',
    },
  ],
  fieldsets: [{ name: 'footer', title: 'Footer' }],
  name: 'site-config',
  title: 'Site configuration',
  type: 'document',
};
