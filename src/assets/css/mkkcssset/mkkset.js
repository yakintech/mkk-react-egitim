import styled from 'styled-components'

// Create a Title component that'll render an <h1> tag with some styles
export const Mkkh1 = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Mkksection = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const Mkkcontainer = styled.div`
    padding:5%;
`

export const Mkkbutton = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


// The Button from the last section without the interpolations
export const Mkkbutton2 = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
export const TomatoButton = styled(Mkkbutton2)`
  color: tomato;
  border-color: tomato;
`;


export const Mkkbutton3 = styled.button`
  background: ${props => props.btnbgcolor};
  color: ${props => props.btncolor};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;