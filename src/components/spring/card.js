import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
const background = require('../../assets/homeLogo/HomeLogo.jpg')

const Container = styled.div`
    .card {
        width: 75vw;
        /* height: 61vw; */
        height: 100vh;
        max-width: 67rem;
        /* max-height: 54.4rem; */
        margin: 0 auto;
        background-image: url(${background});
        background-size: contain;
        background-position: top 3rem center;
        background-repeat: no-repeat;
        box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.5s;
        will-change: transform;
        &:hover {
            box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
        }
        /* @media( min-aspect-ratio: 4/3 ) {
          max-height: 54.4rem;
        } */
    }
`




const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <Container>
        <animated.div
        className="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
        >
        </animated.div>
    </Container>
  )
}
