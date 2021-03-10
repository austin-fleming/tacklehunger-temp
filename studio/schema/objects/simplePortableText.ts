export default {
  name: 'simplePortableText',
  of: [
    {
      lists: [],
      marks: {
        annotations: [{ type: 'link' }, { type: 'internalLink' }],
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
      },
      styles: [],
      title: 'Block',
      type: 'block',
    },
    {
      type: 'embedHTML',
    },
  ],
  title: 'Simple Portable Text',
  type: 'array',
};
