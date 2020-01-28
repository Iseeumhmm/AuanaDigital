import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import './app.css'


const theme = {
  // Global
  // Colours

  colorBase: "#1D25B8",
  colorHighlight: "#FFBE05"
}

const GlobalStyle = createGlobalStyle`
  html { font-size: 62.5%; }
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: white;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu,
      roboto, noto, segoe ui, arial, sans-serif;
    background: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #f0f0f0;
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
