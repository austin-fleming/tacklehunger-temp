export default {
  name: 'portableText',
  of: [
    {
      marks: {
        annotations: [{ type: 'link' }, { type: 'internalLink' }],
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
      },
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      type: 'block',
    },
    { type: 'figure' },
    { type: 'embedHTML' },
  ],
  title: 'Portable Text',
  type: 'array',
};
