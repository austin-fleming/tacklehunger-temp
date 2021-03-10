export default {
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      of: [
        { type: 'section' },
        // { type: 'hero' },
        // { type: 'imageSection' },
        // { type: 'textSection' },
      ],
      title: 'Page sections',
      type: 'array',
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
