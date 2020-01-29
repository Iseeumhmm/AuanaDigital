import React from 'react'
import { Root, Routes, addPrefetchExcludes, Head } from 'react-static'
import { Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import { createGlobalStyle, ThemeProvider } from 'styled-components'


const theme = {
  // Global
  // Colours

  colorBase: "#183AB4",
  colorHighlight: "#FFB305",
  colorDarkGrey: "#373b47",
  colorLightGrey: "#f9f9fa"
}

const GlobalStyle = createGlobalStyle`
  html { font-size: 62.5%; }
  html,
  body,
  #root {
    font-family: 'Source Sans Pro', sans-serif;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: #000000;
  }

  body {
    background: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    font-size: 1.6rem;
    letter-spacing: 1px;
    line-height: 2.5rem;
    text-rendering: optimizeLegibility;
    p, h1, h2, h3 { margin: 0; }
    a { 
      font-size: 1.6rem;
      color: white;
      text-decoration: none;
      &:hover {
        color: white;
      }
    }
  }

  #root {
    /* display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden; */
  }
`

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
      </nav> */}
      <Head>
        <meta property="og:locale" content="en_CA" />
        <meta property="og:title" content="Auana Digital" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Auana Digital Websites, Photography and Videography" />
        <meta property="og:description" content="Auana Digital embodies a philosophy of drifting from convention when technologies exist to better cater to your audience." />
        <meta property="og:url" content="https://testing.rickheffren.com" />
        <meta property="og:image:secure_url" content="https://auana.ca/images/logo.jpg"/>
        <title>Auana Digital</title>
        <link rel="preload" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200&display=swap" as="style"/>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200&display=swap" rel="stylesheet"/>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      </ ThemeProvider>
    </Root>
  )
}

export default App
