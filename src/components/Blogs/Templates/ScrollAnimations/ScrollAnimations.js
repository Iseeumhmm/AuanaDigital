import React, { useState, useEffect, useRef } from "react";
import { useRouteData, Head } from "react-static";
import ReactGA from "react-ga";
import Event from "../../../AnalyticsEvents";
import { WiredCard } from "wired-card";
import { Link } from "components/Router";
import Footer from "../../../footer";
import Markdown from "react-markdown";
import styled, { keyframes, css } from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import NavBar from "../../../Navigation/navbar";
import logo from "../../../../assets/homeLogo/LogoBlack.png";
import contentMD from "./scroll-animations.md";
import cinemagraph from "../../../../assets/video/Rory.mp4";

const animateLogo = keyframes`
100%  { transform: translate(-50%, -100%) }
`
const PageContainer = styled.div`
  #nav_bar {
    position: fixed;
    top: 0;
    right: 0;
  }
  /* position: relative;
  overflow-x: hidden; */
  text-align: center;
  color: ${({ theme: { colorDarkGrey } }) => colorDarkGrey};
  background-color: ${({ theme: { colorLightGrey } }) => colorLightGrey};
  .content_container {
    /* position: relative; */
    h1 {
      text-align: center;
      padding: 0 0 2rem;
    }
    p {
      font-size: 2rem;
    }
    width: 100%;
    font-size: 2rem;
    margin: auto;
    max-width: 65rem;
    padding: 0 2rem;
  }
  wired-card {
    padding: 2rem;
    text-align: left;
    & > div {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
  .action_container {
    width: 100%;
    min-height: 1500px;
    margin: 10rem auto 0;
  }
  #header_container {
    display: block;
    width: calc(100% - 4rem);
    text-align: center;
    line-height: 3.25rem;
    color: ${({ theme: { colorLightGrey } }) => colorLightGrey};
    h1 {
      padding: 0;
    }
  }
  .logo {
    position: fixed;
    ${({ slidePosition }) => (slidePosition * 3) > 1.13 ? css`animation: ${animateLogo} 250ms forwards;` : null}
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 2rem;
    width: 17rem;
  }
  .markdown {
    position: absolute;
    text-align: left;
  }
  blockquote {
    border-left: 5px solid ${({ theme: { colorHighlight } }) => colorHighlight};
    padding-left: 2rem;
    margin: 2rem 1rem;
  }
  pre {
    code {
      font-family: inherit;
    }
    white-space: pre-wrap;
  }
  .footer {
    a {
      color: ${({ theme: { colorDarkGrey } }) => colorDarkGrey};
    }
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
  }
`;
const letterAnimation = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;
const Container = styled.div`
  .intro {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    p {
      margin-top: 20px;
      font-size: 28px;
    }
  }
  .video_container {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }
  .ahi_container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  #ahi path:nth-child(1) {
    stroke-dasharray: 465.9;
    stroke-dashoffset: 465.9;
    animation: ${letterAnimation} 1s linear forwards 1s;
  }
  #ahi path:nth-child(2) {
    stroke-dasharray: 420.7;
    stroke-dashoffset: 420.7;
    animation: ${letterAnimation} 1s linear forwards 1.5s;
  }
  #ahi path:nth-child(3) {
    stroke-dasharray: 216.8;
    stroke-dashoffset: 216.8;
    animation: ${letterAnimation} 1s linear forwards 2.5s;
  }
`;

export default function Blog() {
  const [content, setContent] = useState("");
  const [position, setPosition] = useState(null);
  const [positionSlide, setPositionSlide] = useState(0);
  let tween = useRef(null);
  let videoRef = useRef(null);


  const post = useRouteData();

  useEffect(() => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);

    fetch(contentMD).then(response =>
      response.text().then(text => {
        setContent(text);
      })
    );
  }, []);

  useEffect(() => {
    let videoDiv = videoRef.current.getGSAP()
    const video = videoDiv.target[0].children[0]
    video.load()
    video.currentTime += 2
    let logo = document.querySelectorAll("#ahi path");
    for (let i = 0; i < logo.length; i++) {
      // console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
    }
  }, []);
  useEffect(() => {
    let videoDiv = videoRef.current.getGSAP()
    const video = videoDiv.target[0].children[0]
    if (position) {
      video.currentTime = Math.floor(position * 100) / 10;

    }

  }, [position]);

  const BlogText = props => {
    let opac = props.visible * 3 < 1 ? props.visible * 3 : 1;
    return (
      <div className="markdown" style={{ opacity: (opac) }}>
        <Markdown escapeHtml={false}>{content}</Markdown>
        <Footer />
      </div>
    )
  }
  return (
    <PageContainer slidePosition={positionSlide} id="page_container">
      <Head>
        <meta property="og:locale" content="en_CA" />
        <meta
          property="og:title"
          content="Website Interaction - Scroll Animations"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Auana Digital" />
        <meta
          property="og:description"
          content="Playing with fire, I promise you won't get burnt!"
        />
        <meta
          property="og:url"
          content="https://auana.ca/blog/website-interaction/scroll-animations"
        />
        <meta property="og:image" content="http://auana.ca/images/" />
        <meta property="og:image:width" content="1920" />
        <meta
          property="og:image:secure_url"
          content="https://auana.ca/images/"
        />
        <title>Auana Digital</title>
      </Head>
      <div className="content_container">
        <NavBar black />
        <img src={logo} className="logo" alt="Auana Logo" />
        <video style={{width: "100%"}} muted playsInline>
          <source src={cinemagraph} type='video/mp4' />
        </video>
        <Container>
          <Controller>
            <Scene
              triggerHook={0}
              triggerElement={"#page_container"}
              duration={1000}
              // indicators={true}
              pin
            >
              {(progress, event) => {
                setPosition(progress);
                if (progress > 0.62) {
                  setPositionSlide(progress - 0.62);
                } else {
                  setPositionSlide(0);
                }
                return (
                  <div className="action_container">
                    <BlogText visible={positionSlide} />
                    <Timeline
                      ref={element => {
                        tween = element;
                      }}
                      totalProgress={positionSlide}
                      paused
                    >
                      <Tween from={{ x: "0" }} to={{ x: "500%" }}>
                        <div className="intro">
                          <wired-card
                            fill="#2AA8DF"
                            id="header_container"
                            elevation="3"
                          >
                            {post.subtitle}
                          </wired-card>
                          <div className="video_container">
                            <Tween ref={videoRef} duration={1.25} from={{ height: "0%;" }}>
                              {/* <video ref={ref => console.log('this is ref: ', ref)} id="video" src={cinemagraph}></video> */}
                              <div style={{ height: "300px" }}>
                                <video id="video" muted playsInline>
                                  <source src={cinemagraph} type='video/mp4' />
                                </video>
                              </div>
                            </Tween>
                          </div>
                        </div>
                      </Tween>
                    </Timeline>

                    <Timeline totalProgress={positionSlide} paused>
                      <Tween from={{ x: "0" }} to={{ x: "-500%" }}>
                        <wired-card
                          style={{ width: "calc(100% - 4rem)", margin: "auto" }}
                          elevation="3"
                        >
                          <div className="ahi_container">
                            <svg
                              id="ahi"
                              width="187"
                              height="104"
                              viewBox="0 0 187 104"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M57.024 74.368C52.32 74.08 46.416 73.936 39.312 73.936C32.304 73.936 26.352 74.128 21.456 74.512C18.576 86.416 16.464 95.392 15.12 101.44C13.392 101.632 11.664 101.728 9.93599 101.728C8.30399 101.728 5.66399 101.248 2.01599 100.288C17.664 58.624 26.784 27.856 29.376 7.98399C32.16 7.02399 35.808 6.54399 40.32 6.54399C44.832 6.54399 48.48 7.02399 51.264 7.98399C53.856 27.856 62.976 58.624 78.624 100.288C75.168 101.248 72.096 101.728 69.408 101.728C66.816 101.728 64.8 101.632 63.36 101.44C61.728 94.24 59.616 85.216 57.024 74.368ZM23.904 64.432C28.32 64.528 32.976 64.576 37.872 64.576C42.768 64.576 48.288 64.48 54.432 64.288C50.112 47.488 45.36 31.648 40.176 16.768H39.312C33.648 30.976 28.512 46.864 23.904 64.432Z"
                                stroke="black"
                                strokeWidth="3"
                              />
                              <path
                                d="M144.651 51.904L144.507 63.568C144.507 76.144 145.467 87.856 147.387 98.704C144.219 99.952 141.099 100.576 138.027 100.576C135.051 100.576 132.987 100.48 131.835 100.288C132.987 87.232 133.563 75.712 133.563 65.728C133.563 55.744 132.747 49.024 131.115 45.568C129.579 42.112 126.891 40.384 123.051 40.384C117.867 40.384 112.107 43.552 105.771 49.888C105.771 77.056 106.635 93.472 108.363 99.136C105.195 100.096 102.651 100.576 100.731 100.576C98.9074 100.576 96.3634 100.48 93.0994 100.288C94.5394 87.808 95.2594 73.024 95.2594 55.936C95.2594 38.752 95.1154 27.376 94.8274 21.808C94.5394 16.24 93.8194 10.048 92.6674 3.23199C95.1634 2.27199 97.6594 1.79199 100.155 1.79199C102.651 1.79199 105.243 1.88799 107.931 2.08C106.491 13.6 105.771 26.704 105.771 41.392C108.651 38.32 112.107 35.872 116.139 34.048C120.171 32.128 123.963 31.168 127.515 31.168C133.371 31.168 137.691 32.848 140.475 36.208C143.259 39.568 144.651 44.8 144.651 51.904Z"
                                stroke="black"
                                strokeWidth="3"
                              />
                              <path
                                d="M182.553 63.136C182.553 78.88 183.417 90.88 185.145 99.136C181.689 100.096 178.569 100.576 175.785 100.576C173.001 100.576 171.033 100.48 169.881 100.288C171.321 87.232 172.041 75.28 172.041 64.432C172.041 53.488 171.177 43.36 169.449 34.048C172.713 33.088 175.641 32.608 178.233 32.608C180.825 32.608 182.985 32.8 184.713 33.184C183.273 48.064 182.553 58.048 182.553 63.136ZM185.289 11.728C185.289 17.68 182.217 20.656 176.073 20.656C171.273 20.656 168.873 18.208 168.873 13.312C168.873 7.26399 171.945 4.24 178.089 4.24C182.889 4.24 185.289 6.736 185.289 11.728Z"
                                stroke="black"
                                strokeWidth="3"
                              />
                            </svg>
                            <Tween
                              duration={1}
                              delay={3.5}
                              from={{ opacity: "0", x: "-80px" }}
                            >
                              <p>FIRE</p>
                            </Tween>
                          </div>
                        </wired-card>
                      </Tween>
                    </Timeline>
                  </div>
                );
              }}
            </Scene>
          </Controller>
        </Container>
      </div>
    </PageContainer>
  );
}
