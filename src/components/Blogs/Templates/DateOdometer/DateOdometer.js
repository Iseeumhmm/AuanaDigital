import React, { useState, useEffect } from 'react'
import { useRouteData, Head } from 'react-static'
import ReactGA from 'react-ga'
import Event from '../../../AnalyticsEvents'
import { WiredCard } from "wired-card"
import { WiredSlider } from "wired-slider"
import { Link } from 'components/Router'
import '@vaadin/vaadin-date-picker';
import Footer from '../../../footer'
import Markdown from 'react-markdown'
import styled, { keyframes } from 'styled-components'
import NavBar from '../../../Navigation/navbar'
import Odometer from "./odometer"
import "./odometer.css"
import logo from '../../../../assets/homeLogo/LogoBlack.png'
import smoke from '../../../../assets/effects/smoke.png'
import contentMD from './date-picker.md'

const animateOdometer = keyframes`
0%    { transform: translate(0) scale(1) rotate(0deg) }
30%   { transform: rotate(0deg) }
35%   { transform: translateX(-5rem) scale(2.5) rotate(-10deg) }
40%   { transform: translateX(-5rem) scale(2.5) rotate(10deg) }
45%   { transform: translateX(-5rem) scale(2.5) rotate(-10deg) }
50%   { transform: translateX(-5rem) scale(2.5) rotate(10deg) }
55%   { transform: translateX(-5rem) scale(2.5) rotate(-10deg) }
60%   { transform: translateX(-5rem) scale(2.5) rotate(10deg) }
70%   { transform: translate(0) scale(1) rotate(0deg) }
85%   { transform: translate(0) scale(1.25) rotate(0deg) }
100%  { transform: translate(0) scale(1) rotate(0deg) }
`
const animateSmoke = keyframes`
0%    { transform: translateX(-50%) scale(1); opacity: 1; }
100%   { transform: translateX(-50%) scale(3.5); opacity: 0; }
`

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
    font-size: 2rem;
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
  .effect_container {
    position: relative;
  }
  .odometer {
    font-size: 3.2rem;
  }
  .smoke {
    position: absolute;
    opacity: 0;
    width: 10rem;
    left: 50%;
    top: -15px;
    transform: translateX(-50%);
  }
  .animateOdometer {
    animation: ${animateOdometer} 1s 0s linear forwards;
  }
  .animateSmoke {
    animation: ${animateSmoke} 500ms 750ms linear forwards;
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
    let unit = "DAYS"
    var today = new Date(); 
    var dateInput = new Date(date); 
    dateInput.setHours(dateInput.getHours() + 5)
    let Difference_In_Time = null
    let difference ;
    today < dateInput ? Difference_In_Time = dateInput.getTime() - today.getTime() : Difference_In_Time = today.getTime() - dateInput.getTime();
    if (Difference_In_Time < 2678400000 ) {
      difference = (Difference_In_Time / (1000 * 3600 * 24)) 
    } else if (Difference_In_Time < 31557600000 ) {
      unit="WEEKS"
      difference = (Difference_In_Time / (1000 * 3600 * 24)) / 7
    } else {
      unit="YEARS"
      difference = Difference_In_Time / (1000 * 3600 * 24 * 365.25); 
    }

    return [ unit, (Math.round(difference * 10) ) ]
  
}

export default function Blog() {
  const [ timeUnit, setTimeUnit ] = useState("")
  const [ content, setContent ] = useState("")

  useEffect(() => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname)

  fetch(contentMD).then((response) => response.text().then( (text) => {
    setContent(text)
  }))

  var el = document.querySelector('#odometer');
  const od = new Odometer({
    el: el,
    value: 0,

    // Any option (other than auto and selector) can be passed in here
    format: '',
    theme: 'car'
  });
  customElements.whenDefined('vaadin-date-picker').then(function() {
    var datepicker = document.querySelector('vaadin-date-picker');
    datepicker.addEventListener( 'change', (e) => {
      const dateUnits = betweenDates(datepicker.value)
      setTimeUnit(dateUnits[0])
      const odometer = document.querySelector('#odometer')
      const smoke = document.querySelector('.smoke')
      odometer.classList.add('animateOdometer')
      smoke.classList.add('animateSmoke')
      odometer.onanimationend = () => {
        od.update(dateUnits[1])
        odometer.classList.remove('animateOdometer')
      }
      smoke.onanimationend = () => {
        smoke.classList.remove('animateSmoke')
      }
    })
  })
  }, [])
  const post  = useRouteData()
  return (
    <PageContainer>
      <Head>
        <meta property="og:locale" content="en_CA" />
        <meta property="og:title" content="Website Interaction - Date Picker" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Auana Digital" />
        <meta property="og:description" content="Pick a date and watch the odometer spin" />
        <meta property="og:url" content="https://auana.ca/blog/website-interaction/date-picker/odometer" />
        <meta property="og:image" content="http://auana.ca/images/date-picker.jpg"/>
        <meta property="og:image:width" content="1920"/>
        <meta property="og:image:secure_url" content="https://auana.ca/images/date-picker.jpg"/>
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
            <vaadin-date-picker onClick={ ()=> Event("Date Picker - Picked date") } label="Important day" placeholder="Past or Future" />
            <div>
              <p>{timeUnit}</p>
              <div className="effect_container">
                <div id="odometer" className="odometer"></div>
                <img className="smoke" src={smoke} alt="smoke effect"/>
              </div>
            </div>
          </div>
        </wired-card>
        <Markdown className="markdown" escapeHtml={false}>{content}</Markdown>
      </div>
      <Footer/>
    </PageContainer>
  )
}
