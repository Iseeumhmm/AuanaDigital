import React from 'react'
import ReactGA from 'react-ga';
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
  html { 
    font-size: 62.5%;
  }
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
    box-sizing: border-box;
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
    div {
      box-sizing: inherit;
    }
    p, h1, h2, h3 { margin: 0; }
    p { font-size: 1.6rem; }
    a { 
      font-size: 1.6rem;
      color: white;
      text-decoration: none;
      &:hover {
        color: white;
      }
    }
  }

`

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  const trackingId = "UA-153961441-1"; 
  ReactGA.initialize(trackingId);
  ReactGA.event({
    category: "GetStarted",
    action: "User pressed the click me button"
  })
  ReactGA.event({
      category: "Instagram",
      action: "Click the Instagram button"
  })
  ReactGA.event({
      category: "Flickr",
      action: "Click the Flickr button"
  })
  ReactGA.event({
      category: "Phone",
      action: "Click the Phone button"
  })
  ReactGA.event({
      category: "Email",
      action: "Click the Email button"
  })
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
        <meta property="og:url" content="https://auana.ca" />
         <meta property="og:image" content="http://auana.ca/images/logo.jpg"/>
         <meta property="og:image:width" content="1920"/>
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
