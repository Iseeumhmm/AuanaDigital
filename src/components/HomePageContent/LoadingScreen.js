import React from 'react'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
0%      {opacity: 1}
100%    {opacity: 0}
`

const Black = styled.div`
    display: ${ ({loading}) => loading === "true" ? "block" : "none" };
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: black;
    z-index: 1000;
    animation: ${animation} 1s ease-out forwards;
`

export default (props) => (
    <Black id="loader" loading={props.loading}/>
)