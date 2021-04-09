export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        data: [
          {
            category: 'Code',
            title: 'GitHub repo',
            value: 'https://github.com/TackleHunger/sanity-marketing-tacklehunger.org',
          },
          {
            category: 'apps',
            title: 'Frontend',
            value: 'https://web.sboc.us',
          },
        ],
      },
    },
    { layout: { height: 'auto' }, name: 'project-users' },
    {
      layout: { width: 'medium' },
      name: 'document-list',
      options: { limit: 10, order: '_updatedAt desc', title: 'Recently edited', types: ['page'] },
    },
  ],
};
