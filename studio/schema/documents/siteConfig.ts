import bcp47 from 'bcp47';

export default {
  __experimental_actions: ['update', 'publish'],
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
          description: 'Important for SEO and accessibility.',
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
          to: [{ type: 'page' }],
          type: 'reference',
        },
      ],
      title: 'Main navigation',
      type: 'array',
      // TODO: Add additional validation for over-all char count to catch potential overflows for 5 items.
      validation: (Rule) => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
    },
    {
      description: 'Notification that appears at the top of pages. Useful for promoting events or pages.',
      fields: [
        {
          description: 'Turn banner on/off.',
          name: 'isActive',
          title: 'Activate',
          type: 'boolean'
        },
        // TODO: Consider changing to <'internalLink'> or <'slug' w/ exists validation> once all schemas are present.
        {
          description: 'Where the visitor should be directed when they click on the banner.',
          name: 'destinationUrl',
          title: 'Destination URL',
          type: 'url',
        },
        // TODO: Add 'max' validation once best length can be determined.
        {
          description: 'A brief message that will draw the visitor\'s attention.',
          name: 'message',
          title: 'Message',
          type: 'text'
        }
      ],
      name: 'notificationBanner',
      title: 'Notification Banner',
      type: 'object',
      validation: (Rule) => [
        Rule.custom((fields) => (fields && fields.isActive && !fields.message ? '"Message" must be set if banner is active.' : true)),
        Rule.custom((fields) => (fields && fields.isActive && !fields.destinationUrl ? 'Consider adding "Destination URL" to make the banner clickable.' : true)).warning()
      ]
    },
    {
      fieldset: 'footer',
      name: 'footerNavigation',
      of: [
        {
          to: [{ type: 'page' }],
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
