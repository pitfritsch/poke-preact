import { useState } from 'preact/hooks';
import styled from 'styled-components';
import GenericModal from '../../components/genericModal';
import style from './style'

const Container = styled.div`
	max-width: 1000px;
	margin: auto;
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

	img {
		height: 150px;
		width: auto;
		margin-right: 50px;
	}

	h3 {
		font-size: 40px;
    margin: 0;
	}

	@media (max-width: 500px) {
		flex-direction: column;
		justify-content: center;
		img {
			margin-right: 0px;
		}
	}
`

const Favorites = () => {

	const [ favorites ] = useState(JSON.parse(localStorage.getItem('favorites')))
	const [ details, setDetails ] = useState(undefined)

	return (
		<div class={style.favorites}>
			<Container>
				<h1>Favorites</h1>
				{favorites && favorites.map(f => 
					<ListItem onClick={() => setDetails(f)}>
						<img src={f.image} alt={`${f.name}-image`}/>
						<h3>{f.name}</h3>
					</ListItem>
				)}
			</Container>
			{details &&
				<GenericModal open={!!details} closeFunction={() => setDetails(undefined)}>
					oie
				</GenericModal>
			}
		</div>
	);
}

export default Favorites;
