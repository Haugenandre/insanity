export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5df2a93c11837195dae66b21',
                  title: 'Sanity Studio',
                  name: 'insanity-studio-jykv14rc',
                  apiId: '9cba097d-9665-48ea-b76c-11a07b220b40'
                },
                {
                  buildHookId: '5df2a93d9f4e704d524bc389',
                  title: 'Portfolio Website',
                  name: 'insanity-web-j244cesn',
                  apiId: '5b435579-002d-48bf-b360-839ed1b95a79'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Haugenandre/insanity',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://insanity-web-j244cesn.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
