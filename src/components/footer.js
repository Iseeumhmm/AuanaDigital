import React from 'react'
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
        props.clicked()
    }
    return (
        <FooterContainer hidden={props.hidden} className="footer">
            <h2 onClick={handleClick}>GET STARTED</h2>
        </FooterContainer>
    )
}