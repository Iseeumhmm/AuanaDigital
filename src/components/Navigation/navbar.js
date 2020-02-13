import React, { useState } from 'react'
import Event from '../AnalyticsEvents'
import styled from 'styled-components'
import { Link } from 'components/Router'

const StyledMenu = styled.nav`
  position: absolute;
  line-height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: rgba(255,255,255, 0.95);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 51;
  span {
    font-weight: bold;
    padding: 0 1rem;
    border-radius: 5px;
    color: ${({theme: {colorLightGrey}}) => colorLightGrey};
    background-image: linear-gradient(to left, violet, indigo, blue, green, orange, red);
  }

  
  @media (max-width: 576px) {
    background: rgba(255,255,255, 0.99);
    padding: 0;
    width: 100%;
    }

  a {
    &:hover {
      color: ${({theme: {colorDarkGrey}}) => colorDarkGrey};
    }
    &:first-child {
        margin-top: 5rem;
    }
    
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1.5rem 0;
    letter-spacing: 0.5rem;
    color: ${({theme: {colorDarkGrey}}) => colorDarkGrey};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.6rem;
      text-align: center;
    }

  }
`

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
        <Link to="/" onClick={() => setOpen(!open)}>Home</Link>
        <Link to="/blog/website-interaction/colour" onClick={() => {setOpen(!open); Event("Menu - Colours")}}>Interaction with <span>Colours</span></Link>
        <Link to="/blog/website-interaction/date-picker-odometer" onClick={() => {setOpen(!open); Event("Menu - Date Picker")}}>Interaction - Date Picker</Link>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 52;


  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ black, open }) => black ? ({theme: {colorDarkGrey}}) => colorDarkGrey : open ? ({theme: {colorDarkGrey}}) => colorDarkGrey : ({theme: {colorLightGrey}}) => colorLightGrey};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ black, open, setOpen }) => {
  return (
    <StyledBurger black={black} style={{color: 'black'}} open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

// const useOnClickOutside = (ref, handler) => {
//     React.useEffect(() => {
//       const listener = event => {
//         if (!ref.current || ref.current.contains(event.target)) {
//           return;
//         }
//         handler(event);
//       };
//       document.addEventListener('mousedown', listener);
  
//       return () => {
//         document.removeEventListener('mousedown', listener);
//       };
//     },
//     [ref, handler],
//     );
//   };
  


const NavBar = (props) => {
  const [open, setOpen] = useState(false);
  const node = React.useRef();
  return (
    <div>
      <div ref={node} style={{}}>
        <Burger black={props.black} open={open} setOpen={setOpen} />
        <Menu style={{zIndex: "1000"}} open={open} setOpen={setOpen} />
      </div>
    </div>
  )  
}

export default NavBar