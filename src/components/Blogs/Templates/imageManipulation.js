import React, {useEffect} from 'react'
import { useRouteData, Head } from 'react-static'
import { WiredCard } from "wired-card"
import { WiredSlider } from "wired-slider"
import { WiredImage } from "wired-image"
import { Link } from 'components/Router'
import Footer from '../../footer'
import Markdown from 'react-markdown'
import styled from 'styled-components'
import ohana from '../../../assets/homeLogo/WebInteractionColours.jpg'
import NavBar from '../../../components/Navigation/navbar'
const logo = require('../../../assets/homeLogo/LogoBlack.png')


const PageContainer = styled.div`
position: relative;
  width: 100vw;
  overflow-x: hidden;

  text-align: center;
  color: ${({ theme: {colorDarkGrey} }) => colorDarkGrey }; 
  background-color: ${({ theme: {colorLightGrey} }) => colorLightGrey }; 
  .content_container {
    overflow-x: hidden;

    position: relative;
    h1 {
      text-align: center;
      padding: 4rem 0 2rem;
    }
    p { font-size: 2rem; }
    width: 100%;
    margin: auto;
    max-width: 65rem;
    padding: 0 2rem;
  }
  wired-card {
    display: block;
    padding: 2rem;
    text-align: left;
  }
  wired-slider {
    --wired-slider-knob-color: #183AB4;
    width: 90%;
    margin: 2rem 0;
  }
  #header_container {
    margin: 1rem auto 2rem;
    text-align:center;
    line-height: 3.25rem;
    color: ${({ theme: {colorLightGrey} }) => colorLightGrey }; 
    h1 { padding: 0; }
  }
  .logo {
    margin-top: 1rem;
    width: 17rem;
  }
  .markdown {
    text-align: left;
  }
  blockquote {
    border-left: 5px solid #CA9F51;
    padding-left: 2rem;
    margin: 2rem 1rem;
  }
 pre {
    code { font-family: inherit; }
   white-space: pre-wrap;
 }
 .footer {
   a { color: ${({ theme: {colorDarkGrey} }) => colorDarkGrey };  }
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;
   padding: 2rem 0;
 }
`


export default function Blog() {
  useEffect(() => {
      const slider = document.querySelector('wired-slider')
      slider.addEventListener('change', (event) => {
        document.querySelector('#ohana').style.filter = `hue-rotate(${event.detail.value}deg)`
        document.querySelector('#header_container').style.filter = `hue-rotate(${event.detail.value}deg)`
        document.querySelector('blockquote').style.filter = `hue-rotate(${event.detail.value}deg)`
    })
    return slider.removeEventListener('change', (event) => {
      document.querySelector('#ohana').style.filter = `hue-rotate(${event.detail.value}deg)`
      document.querySelector('#header_container').style.filter = `hue-rotate(${event.detail.value}deg)`
      document.querySelector('blockquote').style.filter = `hue-rotate(${event.detail.value}deg)`
  })
  }, [])
  const post  = useRouteData()
  return (
    <PageContainer>
      <Head>
        <meta property="og:locale" content="en_CA" />
        <meta property="og:title" content="Website Interaction - Colours" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Auana Digital" />
        <meta property="og:description" content="Change the cat's eye colour with a slider!  We can, and should expect more from our web experience." />
        <meta property="og:url" content="https://auana.ca/blog/website-interaction/colour" />
        <meta property="og:image" content="http://auana.ca/images/ohana-blue.jpg"/>
        <meta property="og:image:width" content="1920"/>
        <meta property="og:image:secure_url" content="https://auana.ca/images/ohana-blue.jpg"/>
        <title>Auana Digital</title>
      </Head>
      <NavBar black/>
      <div className="content_container">
      <img src={logo} className="logo" alt="Auana Logo" />
        <wired-card fill="#CA9F51" id="header_container" elevation="3">
          <h1>{post.title}</h1>
        </wired-card>
        <wired-card elevation="3">
          <h2>{post.subtitle}</h2>
        </wired-card>
        <wired-slider min="0" max="360"></wired-slider>
        <wired-image id="ohana" elevation="4" src={ohana}></wired-image>
        <Markdown className="markdown" escapeHtml={false}>{post.body}</Markdown>
      </div>
      <Footer/>
    </PageContainer>
  )
}
