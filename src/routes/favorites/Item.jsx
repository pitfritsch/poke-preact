import { useCallback, useEffect, useRef, useState } from 'preact/hooks'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Loading } from '../../components/loading'
import Service from '../../utils/services'

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

const ListItem = styled.div`
	display: flex;
	margin: 10px;
	background-color: #53b77e;
	border-radius: 10px;
	padding: 10px;
	transition: .2s;
	cursor: pointer;
	font-family: 'Oswald', sans-serif;
	text-transform: capitalize;
	display: flex;
	align-items: center;

	:hover {
		transform: scale(1.05);
	}
	:active {
		transform: scale(1);
	}

	.imgBox {
		height: 150px;
		width: 150px;
		margin-right: 50px;
    display: grid;
    place-items: center;
    img {
		  max-height: 150px;
		  max-width: 150px;
      animation-name: ${fade};
      animation-duration: .2s;
      animation-iteration-count: initial;
		}
	}

	h3 {
		font-size: 40px;
    margin: 0;
	}

	@media (max-width: 500px) {
		flex-direction: column;
		justify-content: center;
		.imgBox {
			margin-right: 0px;
		}
	}
`

const Item = ({ pokemon, setDetails }) => {
  const [ blob, setBlob ] = useState(undefined)

  const loadImage = useCallback(async () => {
    if (!pokemon) return
    setBlob(await Service.getImageBlob(pokemon.image))
  }, [pokemon])

  useEffect(() => {
    loadImage()
  }, [loadImage])

  return (
    <ListItem onClick={() => setDetails(pokemon)}>
      <div className='imgBox'>
        {blob ? 
          <img src={blob} alt={`${pokemon.name}-image`}/> :
          <Loading/>
        }
      </div>
      <h3>{pokemon.name}</h3>
    </ListItem>
  )
}

export default Item
