import { useEffect, useRef, useState } from 'preact/hooks';
import styled from 'styled-components';
import GenericModal from '../../components/genericModal';
import Item from './Item';
import style from './style'

const Container = styled.div`
	max-width: 1000px;
	margin: auto;
`

const ModalContainer = styled.div`
	padding: 50px;
`

const PokemonImage = styled.img`
	height: 500px;
	width: 500px;
`



const Favorites = () => {

	const [ favorites ] = useState(JSON.parse(localStorage.getItem('favorites')))
	const [ details, setDetails ] = useState(undefined)

	return (
		<div class={style.favorites}>
			<Container>
				<h1>Favorites</h1>
				{favorites && favorites.map(f => 
					<Item pokemon={f} setDetails={setDetails} />
				)}
			</Container>
			{details &&
				<GenericModal open={!!details} closeFunction={() => setDetails(undefined)}>
					<ModalContainer>
						<PokemonImage src={details.image}/>
					</ModalContainer>
				</GenericModal>
			}
		</div>
	);
}

export default Favorites;
