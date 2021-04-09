export default {
  fields: [
    {
      description: 'Internal name for the page',
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      description: 'Route on the website where this page lives, i.e. sboc.us/<slug>',
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'content',
      of: [{ type: 'section' }],
      title: 'Page sections',
      type: 'array',
    },
    {
      description:
        'Enter the labels of sections to be in the sub-menu. Leave blank for no sub-menu.',
      name: 'subMenu',
      of: [
        {
          fields: [
            {
              description: 'the label that links to it',
              name: 'label',
              title: 'Section Name',
              type: 'string',
            },
            {
              description: "Text for it's button on the sub-menu",
              name: 'subMenuButtonText',
              title: 'Sub-Menu Button Text',
              type: 'string',
            },
          ],
          type: 'object',
        },
      ],
      title: 'Sub Menu',
      type: 'array',
      validation: (Rule) => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
    },
    {
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
      name: 'openGraphImage',
      title: 'Open Graph Image',
      type: 'image',
    },
    {
      description: 'For search engines. Will be added to /sitemap.xml',
      fieldset: 'metadata',
      name: 'includeInSitemap',
      title: 'Include page in sitemap',
      type: 'boolean',
    },
    {
      description: 'Hide this route for search engines',
      fieldset: 'metadata',
      name: 'disallowRobots',
      title: 'Disallow in robots.txt',
      type: 'boolean',
    },
  ],
  fieldsets: [
    {
      name: 'metadata',
      title: 'SEO & metadata',
    },
  ],
  name: 'page',
  preview: {
    prepare: ({ media, slug, title }) => ({
      media,
      subtitle: slug === '/' ? '/' : `/${slug}`,
      title,
    }),
    select: {
      media: 'openGraphImage',
      slug: 'slug.current',
      title: 'title',
    },
  },
  title: 'Page',
  type: 'document',
};
