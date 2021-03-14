import { useCallback, useEffect, useState } from 'preact/hooks'
import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import Service from '../../utils/services'
import { FaStar } from 'react-icons/fa';
import Toast from '../toast';

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
  position: relative;
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

const rotate = keyframes`
  0% { 
    transform: rotate(0deg);
  }
  100% { 
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 5px solid transparent;
  border-top: 5px solid #FDFDFF;
  animation: ${rotate} 1s infinite;
`

const Header = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px 15px;
`

const shakingHover = keyframes`
  10%, 30%, 50%, 70%, 90% {
    transform: rotate(-7deg);
  }
  20%, 40%, 60%, 80% {
    transform: rotate(7deg);
  }
`

const Star = styled(FaStar)`
  font-size: 40px;
  transition: .2s;
  cursor: pointer;
  animation: ${shakingHover};
  animation-duration: 1s;
  animation-iteration-count: initial;
  
  :hover {
    transform: scale(1.1);
    color: gold;
  }

  :active {
    transform: scale(0.8)
  }
`

function Modal({ data, closeFunction }) {

  const [ blob, setBlob ] = useState(undefined)
  const [ toastDescription, setToastDescription ] = useState(undefined)

  const loadImage = useCallback(async () => {
    if (!data) return
    setBlob(await Service.getImageBlob(data.image))
  }, [data])

  useEffect(() => {
    loadImage()
  }, [loadImage])

  const handleClose = useCallback(() => {
    setBlob(undefined)
    setToastDescription(undefined)
    closeFunction()
  }, [closeFunction])

  const handleAddFavorite = useCallback(() => {
    var favorites =  JSON.parse(localStorage.getItem("favorites") || "[]")
    favorites.push(data)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    setToastDescription(`${data.name} added to favorites`)
  }, [data])

  return (
    <StyledModalContainer open={!!data} onClick={handleClose}>
      {toastDescription &&
        <Toast 
          title={'Success'}
          status='success'
          description={toastDescription} 
          closeFunction={() => setToastDescription(undefined)}
        />
      }
      {data &&
        <StyledModal onClick={(e) => e.stopPropagation()}>
          <Header>
            <Star title='Add to favorites' onClick={handleAddFavorite}/>
          </Header>
          {blob ?
            <img src={blob} alt="imagem"/> :
            <Loading />
          }
        </StyledModal>
      }
    </StyledModalContainer>
  )
}

export default Modal
