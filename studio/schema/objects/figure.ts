export default {
  fields: [
    {
      name: 'caption',
      options: {
        isHighlighted: true,
      },
      title: 'Caption',
      type: 'string',
    },
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
  name: 'figure',
  options: {
    hotspot: true,
  },
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
  title: 'Image',
  type: 'image',
};
