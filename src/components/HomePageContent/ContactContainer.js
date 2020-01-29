import React from 'react'
import styled, { keyframes } from 'styled-components'
const logo = require('../../assets/homeLogo/LogoWhite.png')
const ohana = require('../../assets/cat/ohana.jpg')
const instagram = require('../../assets/icons/instagram.png')
const flickr = require('../../assets/icons/flickr.png')

const animateLogo = keyframes`
  0%    { transform: translateY(-150%);  }
  80%   { transform: translateY(-150%);  }
  100%  { transform: translateY(0);  }
`
const animateOhana2 = keyframes`
  0%    { transform: scale(0);  }
  80%   { transform: scale(0);  }
  90%   { transform: scale(1);  }
  100%  { transform: scale(1);  }
`
const page2Right = keyframes`
  0%    { transform: translateX(250%);  }
  80%   { transform: translateX(250%);  }
  100%  { transform: translateX(0);  }
`
const page2Left = keyframes`
  0%    { transform: translateX(-250%);  }
  80%   { transform: translateX(-250%);  }
  100%  { transform: translateX(0);  }
`

const ContactContainer = styled.div`
  display: ${ ({clicked}) => clicked ? "flex" : "none" };
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: 65rem;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .logo {
    transform: translateY(-150%);
    width: 20rem;
    height: 1rem;
    margin: 1rem 0 0;
    background-image: url(${logo});
    background-position: center center;
    background-size: cover;
    animation-name: ${ ({clicked}) => clicked ? animateLogo : null };
    animation-duration: 2650ms;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    z-index: 20;
  }
  & > div {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    color: white;
    padding-top: 5.2rem;
    height: 100%;
    width: 90%;
    h1 { 
        padding-bottom: 2rem; 
        line-height: 3.5rem;
        text-align: center;
    }
    &:nth-child(2) {
        img {
            width: 90vw;
            max-width: 600px;
            border: 5px solid ${ ({colorLightGrey}) => colorLightGrey };
            border-radius: .5rem;
        }
        p { font-size: 1rem }
      transform: scale(0);
      animation-name: ${ ({clicked}) => clicked ? animateOhana2 : null };
      animation-duration: 2650ms;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }
    &:nth-child(3) {
      transform: translateX(150%);
      animation-name: ${ ({clicked}) => clicked ? page2Right : null };
      animation-duration: 2650ms;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }
    &:nth-child(4) {
        h2 {
            text-align: center;
            padding-top: 2rem;
            font-size: 2rem;
        }
      & > div {
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          a { cursor: pointer; }
          img {
              width: 5rem;
              padding: 5.2rem 1.5rem 0;
          }
      }
      transform: translateX(-150%);
      animation-name: ${ ({clicked}) => clicked ? page2Left : null };
      animation-duration: 2650ms;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }
    &:nth-child(5) {
      height: 100%;
      padding: 5.2rem 0;
      transform: translateX(-150%);
      animation-name: ${ ({clicked}) => clicked ? page2Left : null };
      animation-duration: 2650ms;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }
  }
`

export default (props) => {
    const handleClose = () => {
        console.log('close')
        props.close()
    }
    return (
        <ContactContainer clicked={props.clicked}>
        <div id="logo" onClick={handleClose} className="logo" />
        <div>
            <img src={ohana} alt="ohana"/>
            <p>Meet 'Ohana' (Hawaiian for family)</p>
        </div>
        <div>
          <div>
            <h1>Websites</h1>
            <p>Can you think of a website that you found remarkable? Designed so that it was unique and fresh, yet the navigation was intuitive. The layout was well structured, and pictures were carefully placed to supported the information on the page, making it easier to understand.<br /><br />
            When a website can give you what you need without wasting your time, it’s efficient. If it can do this and be atheistically pleasing and maybe a little entertaining, it’s awesome!<br /><br />
            As a website creator, auana has helped me to forge many skillsets and given me versatility. From digital design to photography, lending me a higher-level perspective of website development as a whole. </p>
          </div>
        </div>
        <div>
          <div>
            <h1>Photography &amp; Videography</h1>
            <p>Great photos and video grab attention, period.  There's a lot of forethought that goes into the creation of eye catching media, particularly if they're being used as website assets.  When we create assets for websites we need to consider the composition of each image or video.  The colours, framing and context of each photo or video has the potential to bring vibrance and life to a design.</p>
            <h2>Check out my personal social media accounts</h2>
            <div>
                <a href="https://www.instagram.com/rick_heffren/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /></a>
                <a href="https://www.flickr.com/photos/iseeumhmm/" target="_blank" rel="noopener noreferrer"><img src={flickr} alt="flickr" /></a>
            </div>
          </div>
        </div>
        <div>
          <a href="tel: 15197090562">(519) 709-0562</a>
          <a href="mailto: rick@auana.ca">Rick@Auana.ca</a>
        </div>
      </ContactContainer>
    )

}