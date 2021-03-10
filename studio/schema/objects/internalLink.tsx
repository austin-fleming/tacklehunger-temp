import React from 'react';

const InternalLinkRender = ({ children }) => <span>{children} 🔗</span>;

export default {
  blockEditor: {
    icon: () => '🔗',
    render: InternalLinkRender,
  },
  description: 'Locate a document you want to link to',
  name: 'internalLink',
  title: 'Internal link to another document',
  to: [{ type: 'page' }, { type: 'route' }],
  type: 'reference',
};
