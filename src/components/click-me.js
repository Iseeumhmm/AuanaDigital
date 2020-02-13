import React from 'react'
import Event from './AnalyticsEvents'
import styled from 'styled-components'
const FooterContainer = styled.div`
    display: ${ ({hidden}) => hidden ? "none" : "flex" };
    color: white;
    justify-content: center;
    padding: 2rem;
    z-index: 2;
    @media( min-width: 375px ) {
        padding: 0 0 5.2rem;
    }
`

export default (props) => {
    const handleClick = () => {
        Event("Home - CLICK ME")
        props.clicked()
    }
    return (
        <FooterContainer hidden={props.hidden} className="footer">
            <h2 onClick={handleClick}>CLICK ME</h2>
        </FooterContainer>
    )
}