import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const StyledModalContainer = styled.div`
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  place-items: center;
  background-color: #0000008c;
  
  ${props => props.open && css`
    display: grid;
  `}
`

const color = keyframes`
 0% { background: #54b7ff }
 12.5% { background: #5d54ff }
 25% { background: #da54ff }
 37.5% { background: #ff54c3 }
 50% { background: #ff5454 }
 62.5% { background: #ff54c3 }
 75% { background: #da54ff }
 87.5% { background: #5d54ff }
 100% { background: #54b7ff }
`
const fade = keyframes`
  0% { 
    opacity: 0;
    transform: scale(0);
  }
  100% { 
    opacity: 100;
    transform: scale(1);
  }
`

const StyledModal = styled.div`
  background: #54b7ff;
  width: 50vw;
  height: 75vh;
  display: grid;
  place-items: center;
  border-radius: 5px;
  animation-name: ${fade};
  animation-duration: .2s;
  animation-iteration-count: initial;

  @media (max-width: 1000px) {
    width: 75vw;
  }

  @media (max-width: 400px) {
    width: 95vw;
  }
  
  >img {
    object-fit: cover;
    max-width: 45vw;
    max-height: 70vh;
    margin: auto;
    animation-name: ${fade};
    animation-duration: .2s;
    animation-iteration-count: initial;
    
    @media (max-width: 1000px) {
      max-width: 70vw;
    }

    @media (max-width: 400px) {
      max-width: 90vw;
    }
  }
`

function Modal({ data, closeFunction }) {
  console.log(data)
  return (
    <StyledModalContainer open={!!data} onClick={() => closeFunction()}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <img src={data?.image} alt="imagem"/>
      </StyledModal>
    </StyledModalContainer>
  )
}

export default Modal
