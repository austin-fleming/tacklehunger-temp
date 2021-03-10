import React from 'react';

const LinkRender = ({ children }) => <span>{children} 🌍</span>;

export default {
  blockEditor: {
    icon: () => '🌍',
    render: LinkRender,
  },
  fields: [
    {
      name: 'href',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    },
  ],
  name: 'link',
  title: 'URL',
  type: 'object',
};
