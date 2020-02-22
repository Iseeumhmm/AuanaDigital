import React, { useRef, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import cinemagraph from '../../../../assets/video/Rory.mp4'

const animateLine = keyframes`
50%    { width: 100%; opacity: 1; }
100%    { width: 100%;  opacity: 0;}
`
const animateContainer = keyframes`
95%    { opacity: 1; }
100%    { opacity: 0; }
`
const Line = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #f9f9fa;
animation: ${animateContainer} 3s ease forwards;
& > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 5px;
    background-color: black;
    border-radius: 5px;
    animation: ${animateLine} 3s ease forwards;
}
`
const Overlay = () => (
    <Line>
        <div></div>
    </Line>
)

export default (props) => {
    const videoRef = useRef(null)

    useEffect(() => {
        let video = videoRef.current
        video.load()
    }, [])

    useEffect(() => {
        let video = videoRef.current
        if (props.position) {
            video.currentTime = Math.floor(props.position * 100) / 10;
        }
    }, [props.position])

    return (
        <div style={{ position: "relative" }}>
            <video ref={videoRef} style={{ width: "100%" }} muted>
                <source src={cinemagraph} type='video/mp4' />
            </video>
            <Overlay />
        </div>

    )
}