export default {
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      of: [{ type: 'section' }],
        // { type: 'hero' },
        // { type: 'imageSection' },
        // { type: 'textSection' },
      title: 'Page sections',
      type: 'array',
    },
    {
      description: 'Select pages for the sub-menu. Leave blank for no sub-menu.',
      name: 'subMenu',
      of: [
        {
          to: [{ type: 'route' }],
          type: 'reference',
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
  ],
  fieldsets: [
    {
      name: 'metadata',
      title: 'SEO & metadata',
    },
  ],
  name: 'page',
  preview: {
    select: {
      media: 'openGraphImage',
      title: 'title',
    },
  },
  title: 'Page',
  type: 'document',
};
