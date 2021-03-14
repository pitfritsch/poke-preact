import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
  outline: none;
  margin: 20px auto;
  padding: 10px 20px;
	background-color: #fafafa;
	color: #3e3e3e;
  border-radius: 5px;
	font-family: 'Cantarell', sans-serif;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: .2s;

  :hover {
    transform: scale(1.05);
    background-color: #ff3683;
    color: white;
  }
  
  :active {
    transform: scale(1);
  }
`

function RoundedButton({ children, ...rest }) {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  )
}

export default RoundedButton
