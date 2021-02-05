export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601cb966016eb736a700ad34',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nnmbk74r',
                  apiId: '3438e797-5ba6-44db-a4d3-6d95e849bbf8'
                },
                {
                  buildHookId: '601cb9670aa75d433994ca71',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jxhmdmdv',
                  apiId: 'c697fcb6-f6b7-40a2-9631-0487a8aaefe0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Maxastuart/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jxhmdmdv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
