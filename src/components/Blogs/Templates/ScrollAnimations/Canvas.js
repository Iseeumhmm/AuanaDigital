import React, { useState, useEffect, useRef, Component } from 'react'
import styled from 'styled-components'
import cinemagraph from '../../../../assets/video/Rory.mp4'

const PageContainer = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: #a1a1a1;
`

const Canvas = (props) => {
  let canvasRef = useRef(null)
  let videoRef = useRef(null)

  // useEffect(() => {
  //   console.log(videoRef)
  //   videoRef.current.load()
  // }, [])

  // useEffect(() => {
  //   // Draws a square in the middle of the canvas rotated
  //   // around the centre by props.angle
  //   const { angle } = props;
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext('2d');
  //   const width = canvas.width;
  //   const height = canvas.height;
  //   ctx.save();
  //   ctx.beginPath();
  //   ctx.clearRect(0, 0, width, height);
  //   ctx.translate(width / 2, height / 2);
  //   ctx.rotate((angle * Math.PI) / 180);
  //   ctx.fillStyle = '#4397AC';
  //   ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2);
  //   ctx.restore();
  // })

  return (
    <PageContainer>
      {/* <canvas width="300" height="300" ref={canvasRef} /> */}
        <video ref={videoRef} id="video" width="640" height="264">
          <source src={cinemagraph} type='video/mp4' />
        </video>
    </PageContainer >

  )
}

// const Animation = () => {

//   const [angle, setAngle] = useState(0)
//   const [raf, setRaf] = useState(0)
//   useEffect(() => {
//     setRaf(requestAnimationFrame(() => {
//       setAngle(angle + 1)
//     }))
//     return cancelAnimationFrame(raf)
//   }, [angle])
//   return (
//     <Canvas angle={angle} />
//   )
// }

export default Canvas