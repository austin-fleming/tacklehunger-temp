export default {
  type: 'object',
  name: 'section',
  title: 'Section',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      description: 'Hidden name for the section so it can be linked to',
    },
    {
      name: 'headingAbove',
      type: 'customPortableText',
      title: 'Heading Above',
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image',
    },
    {
      name: 'headingRight',
      type: 'customPortableText',
      title: 'Heading Right',
    },
    {
      name: 'headingBelow',
      type: 'customPortableText',
      title: 'Heading Below',
    },
    {
      name: 'headingLeft',
      type: 'customPortableText',
      title: 'Heading Left',
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'text',
      type: 'customPortableText',
      title: 'Text',
    },
    {
      name: 'ctaButtons',
      type: 'array',
      title: 'Call to action Buttons',
      of: [
        {
          title: 'Call to action Button',
          type: 'ctaButton',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'label',
      media: 'backgroundImage',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Section',
        media,
      };
    },
  },
};
