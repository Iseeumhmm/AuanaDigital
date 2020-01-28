import React from 'react';
import Card from '../components/spring/card';
import styled from 'styled-components'

const Container = styled.div`
  padding: 5.2rem 0;
  color: ${( {theme: {colorDarkGrey}} ) => colorDarkGrey };

`
const TextContainer = styled.div`
  margin: 0 auto;
  width: 85%;
  color: white;
`

export default () => (
  <Container>
    <Card />
    <TextContainer>
      <p>
      In Hawaiian, Auana means to wander or drift.  Hula 'Auana' describes a type of hula incorporating modern instruments, such as the ukulele and steel guitar to make the dance more entertaining for modern tourists.
      <br/><br/>
      Auana Digital embodies a similar philosophy of drifting from convention when technologies exist to better cater to your audience.
      </p>
    </TextContainer>
  </Container>
  
)
