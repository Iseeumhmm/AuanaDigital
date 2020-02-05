import path from 'path'
// import axios from 'axios'
import blogs from './src/components/Blogs/blogs.json'

export default {
  getRoutes: async () => {
    //  const { data: posts } = blogs
    const { data: posts } = { "data": 
    [
      {
      "id": "colour",
      "template": "imageManipulation.js",
      "date" : "",
      "title": "Website Interaction & Colour",
      "subtitle": "Move the slider below to change Ohana's eye colour!",
      "body": `<h1 id="cool-eh">Cool Eh?</h1>
      <p>We can, and should expect more from our web experience.  We can use the technologies to interact with our visitors in ways we could have only dreamed about a short time ago. <br /><br />
      <strong>Practical use case:</strong> coloured eye contact sales? Maybe, but this example is really meant to show the powers we can harness from behind the scenes.
      </p>
      <blockquote>
      <p>What’s really cool about this example is that it’s implemented with something called <strong>web components</strong>.  What makes web components so awesome? They aren’t platform specific, meaning it doesn’t matter if we’re building a Wordpress site, a Shopify store or a React web app.  We can incorporate complex user interactions into our designs quickly and reuse them in other parts of the site when necessary.</p>
      </blockquote>
      <p>Web developers have an amazing set of tools to choose from these days,  there really is no excuse not to be using them.<br /><br />
      <strong>I'm planning on making more of these examples and sharing them.  In the next post I think I'll do some sort of web calculator that takes an input and returns something fun.</strong><br /><br />
      Thanks for stopping by!</p>`
      }
    ]
}
    return [
      {
        path: '/',
        getData: () => {}
      },
      {
        path: '/blog',
        getData: () =>{ 
         return  ({posts})
        },
          children: posts.map(post => {
            return ({
              path: `/website-interaction/${post.id}`,
              template: `src/components/Blogs/Templates/${post.template}`,
              getData: () => post,
          })
        })
      }
    ]
  },
  siteRoot: 'https://auana.ca',
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
