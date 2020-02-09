import React, {useEffect} from 'react'
import { useRouteData, Head } from 'react-static'
import { WiredCard } from "wired-card"
import { WiredSlider } from "wired-slider"
import { WiredImage } from "wired-image"
import { Link } from 'components/Router'
import '@vaadin/vaadin-date-picker';
import Footer from '../../footer'
import Markdown from 'react-markdown'
import styled from 'styled-components'
import ohana from '../../../assets/homeLogo/HomeLogo.jpg'
import NavBar from '../../../components/Navigation/navbar'
import Odometer from "../../odometer.js"
import "../../odometer.css"
const logo = require('../../../assets/homeLogo/LogoBlack.png')

const PageContainer = styled.div`
position: relative;
  width: 100vw;
  overflow-x: hidden;
  max-width: 100vw;
  transform: scale(1) !important;
  text-align: center;
  color: ${({ theme: {colorDarkGrey} }) => colorDarkGrey }; 
  background-color: ${({ theme: {colorLightGrey} }) => colorLightGrey }; 
  .content_container {
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
    padding: 2rem;
    text-align: left;
    vaadin-date-picker {
      font-size: 1.6rem;
    }
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    & > div > div {
      p {
        font-size: 1.6rem !important;
        font-weight: bold;
      }
      text-align: center;
    }
  }
  wired-slider {
    --wired-slider-knob-color: #183AB4;
    width: 90%;
    margin: 2rem 0;
  }
  .odometer {
    font-size: 3.2rem;
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
    border-left: 5px solid ${({ theme: {colorHighlight} }) => colorHighlight };
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
const betweenDates = (date) => {
    var today = new Date(); 
    var dateInput = new Date(date); 

    let Difference_In_Time = null
    today < dateInput ? Difference_In_Time = dateInput.getTime() - today.getTime() : Difference_In_Time = today.getTime() - dateInput.getTime()
      
    // To calculate the no. of days between two dates 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24 *365.5); 
      
    //To display the final no. of days (result) 
    console.log("Total number of days between dates  <br>"
               + today + "<br> and <br>" 
               + dateInput + " is: <br> " 
               + Difference_In_Days); 
    return Math.round(Difference_In_Days * 10)
  
}

export default function Blog() {
  useEffect(() => {
  var el = document.querySelector('#odometer');
  const od = new Odometer({
    el: el,
    value: 0,

    // Any option (other than auto and selector) can be passed in here
    format: '',
    theme: 'car'
  });
  // setInterval(() => {
  //   od.update(555)
  // }, 1000) 
  customElements.whenDefined('vaadin-date-picker').then(function() {
    var datepicker = document.querySelector('vaadin-date-picker');
    datepicker.addEventListener( 'change', (e) => {
      od.update(betweenDates(datepicker.value))
    })
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
        <wired-card fill="#169A64" id="header_container" elevation="3">
          <h1>{post.title}</h1>
        </wired-card>
        <wired-card elevation="3">
          <h2>{post.subtitle}</h2>
          <div>
            <vaadin-date-picker label="Important day" placeholder="Past or Future" />
            <div>
              <p>DAYS</p>
              <div id="odometer" className="odometer"></div>
            </div>
          </div>
        </wired-card>
        <Markdown className="markdown" escapeHtml={false}>{post.body}</Markdown>
      </div>
      <Footer/>
    </PageContainer>
  )
}
