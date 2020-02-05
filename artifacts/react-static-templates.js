

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/rickheffren/Documents/WebDevelopment/Auana_react/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/Users/rickheffren/Documents/WebDevelopment/Auana_react/src/pages/404.js'), universalOptions)
      t_0.template = '/Users/rickheffren/Documents/WebDevelopment/Auana_react/src/pages/404.js'
      
const t_1 = universal(import('/Users/rickheffren/Documents/WebDevelopment/Auana_react/src/pages/index.js'), universalOptions)
      t_1.template = '/Users/rickheffren/Documents/WebDevelopment/Auana_react/src/pages/index.js'
      
const t_2 = universal(import('/Users/rickheffren/Documents/WebDevelopment/Auana_react/src/components/Blogs/Templates/imageManipulation.js'), universalOptions)
      t_2.template = '/Users/rickheffren/Documents/WebDevelopment/Auana_react/src/components/Blogs/Templates/imageManipulation.js'
      

// Template Map
export default {
  '/Users/rickheffren/Documents/WebDevelopment/Auana_react/src/pages/404.js': t_0,
'/Users/rickheffren/Documents/WebDevelopment/Auana_react/src/pages/index.js': t_1,
'/Users/rickheffren/Documents/WebDevelopment/Auana_react/src/components/Blogs/Templates/imageManipulation.js': t_2
}
// Not Found Template
export const notFoundTemplate = "/Users/rickheffren/Documents/WebDevelopment/Auana_react/src/pages/404.js"

