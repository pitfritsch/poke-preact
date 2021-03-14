import { useEffect } from 'preact/hooks'
import React from 'react'
import styled, { keyframes } from 'styled-components'


const shakingHover = keyframes`
  0% {
    bottom: -100px;
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    bottom: 15px;
    opacity: 1;
  }
`

const StyledToast = styled.div`
  position: absolute;
  bottom: 15px;
  background: ${p => p.status === "success" ? '#9BC53D' : '#C3423F'};
  color: ${p => p.status === "success" ? '#393D3F' : '#FDFDFF'};
  padding: 15px 50px;
  border-radius: 5px;
  animation: ${shakingHover};
  animation-duration: .2s;
  animation-iteration-count: initial;
  z-index: 101;
  text-transform: capitalize;

  h3 {
    margin: 0 0 5px 0;
  }
`

function Toast({ title, description, status, timeout=5000, closeFunction }) {
  
  useEffect(() => {
    setTimeout(() => {
      closeFunction()
    }, timeout)
  }, [timeout, closeFunction])

  return (
    <StyledToast 
      onClick={(e) => {
        e.stopPropagation()
        closeFunction()
      }}
      status={status}
    >
      <h3>{title}</h3>
      {description}
    </StyledToast>
  )
}

export default Toast
