import React, { useState, useEffect } from 'react';
import Card from '../components/spring/card';
import styled, { keyframes } from 'styled-components'
import Loader from '../components/HomePageContent/LoadingScreen'
import Footer from '../components/click-me'
import Contact from '../components/HomePageContent/ContactContainer'
const spinner = require('../assets/icons/spinner.svg')

const Container = styled.div`
  display: flex ;
  position: ${ ({clicked}) => clicked ? "absolute" : "fixed" };
  height: 100%;
  width: 100vw;
  flex-flow: column nowrap;
  align-content: space-between;
  .spacer {
    height: 32rem;
    max-height: 45.4rem;
  }
  @media( min-aspect-ratio: 4/3 ) {
    position: absolute;
    height: 71rem;
    .spacer {
      height: 65rem;
    }
  }
  @media( min-aspect-ratio: 6/5 ) {
    height: 80rem;
    .spacer {
      height: 100rem;
    }
  }
 
`
const Spinner = styled.div`
  background: url(${spinner});
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 10rem;
  height: 10rem;
  background-size: cover;
  z-index: 3000;
  `
const animateOhana = keyframes`
  0%    { transform: scale(1); }
  7%    { transform: scale(1.25) translateY(15%); }
  15%   { transform: scale(1.5) translateY(30%); }
  80%   { transform: scale(1.5) translateY(30%); }
  100%  { transform: scale(0) translateY(0); display: none; }
`

const CardContainer = styled.div`
  display: ${ ({visible}) => visible ? "block" : "none" };
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  .card {
    animation-name: ${ ({clicked}) => clicked ? animateOhana : null };
    animation-duration: 1500ms;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
`
const TextContainer = styled.div`
  display: ${ ({hidden}) => hidden ? "none" : "flex" };
  margin: 0 auto;
  height: 100%;
  width: 85%;
  max-width: 65rem;
  color: white;
  align-items: center;
`

export default () => {
  const [ clicked, setClicked ] = useState(false)
  const [ ohanaVisible, setOhanaVisible ] = useState(true)
  const [ loading, setLoading ] = useState(true)
  const [ loadDelay, setLoadDelay ] = useState(true)


  const clickedHandler = () => {
    setClicked(true)
  }
  const closeHandler = () => {
    setClicked(false)
    setOhanaVisible(true)
  }

  useEffect(()=>{
    setInterval(() => {
      setLoadDelay(false)
      const transition = document.getElementById('logo');
      const loaderAnimation = document.getElementById('loader');
      transition.onanimationend = () => {
        setOhanaVisible(false)
      };
      loaderAnimation.onanimationend = () => {
        setLoading(false)
      };
      }, 1500);
  }, [])

  const content = (
      <Container clicked={clicked}>
        <Loader id="loader" loading={loading.toString()}/>
        <Contact close={closeHandler} clicked={clicked}/>
        <CardContainer visible={ohanaVisible} clicked={clicked}>
          <Card className="card"/>
        </CardContainer>
          <div className="spacer"/>
          <TextContainer hidden={clicked}>
            <p>
            Auana Digital embodies a philosophy of drifting from convention when technologies exist to better cater to your audience.
            <br/><br/>
            In Hawaiian, Auana means to wander or drift.  Hula 'Auana' incorporates modern instruments such as the ukulele to make the dance more entertaining to tourists, or in other words, customers.
            </p>
          </TextContainer>
          <Footer clicked={clickedHandler} hidden={clicked}/>    
      </Container>
  )
    return loadDelay ?  <Spinner /> : content
}
