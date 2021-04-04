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
  position: relative;
  background: #353535;
  border-radius: 5px;
  animation-name: ${fade};
  animation-duration: .2s;
  animation-iteration-count: initial;
  max-height: 90vh;
  overflow: auto;
  
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #35353500; 
  }
  ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  @media (max-width: 1200px) {
    width: 85vw;
  }

  @media (max-width: 400px) {
    width: 95vw;
  }
`

function GenericModal({ open, closeFunction, children }) {
  return (
    <StyledModalContainer open={open} onClick={closeFunction}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        {children}
      </StyledModal>
    </StyledModalContainer>
  )
}

export default GenericModal
