import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledCard = styled.div`
	outline: none;
	border: none;
	min-height: 100px;
	background-color: #fafafa;
	border-radius: 5px;
	font-family: 'Oswald', sans-serif;
	color: #393D3F;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	text-transform: capitalize;
	transition: .2s;
	cursor: pointer;
	
	:hover, :focus{
    background-color: #067BC2;
		color: #FDFDFF;
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
