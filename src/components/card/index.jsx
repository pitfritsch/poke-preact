import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledCard = styled.div`
	outline: none;
	border: none;
	min-height: 100px;
	background-color: #fafafa;
	border-radius: 5px;
	font-family: 'Cantarell', sans-serif;
	color: #222;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	text-transform: capitalize;
	transition: .2s;
	cursor: pointer;
	
	:hover, :focus{
    background-color: #3b5ca7;
		color: white;
		transform: scale(1.05);
	}
	:active{
		transform: scale(1);
	}
`

function Card({ children, ...rest }) {
  return (
    <StyledCard {...rest} >
      {children}
    </StyledCard>	
  )
}

export default Card
