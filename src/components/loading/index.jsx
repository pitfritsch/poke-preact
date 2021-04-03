import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  0% { 
    transform: rotate(0deg);
  }
  100% { 
    transform: rotate(360deg);
  }
`
export const Loading = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 5px solid transparent;
  border-top: 5px solid #FDFDFF;
  animation: ${rotate} 1s infinite;
`