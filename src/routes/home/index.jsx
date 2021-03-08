import { useEffect, useState } from 'preact/hooks';
import styled from 'styled-components';
import Service from '../../utils/services';
import style from './style.css';

const Title = styled.h1`
	font-family: 'Fjalla One', sans-serif;
	font-size: 3em;
	text-align: center;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 35px;

	@media (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 400px) {
		grid-template-columns: 1fr;
	}
`

const Card = styled.button`
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
		color: #ffcb05;
		transform: scale(1.1);
	}
	:active{
		transform: scale(1);
	}
`

const Home = () => {

	const [pokemons, setPokemons] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const data = await Service.list()
			return data
		}
		fetchData().then(setPokemons)
	}, [])

	useEffect(() => {
		console.log(pokemons)
	}, [pokemons])

	return (
		<div class={style.home}>
			<Title>All Pokémons List</Title>
			<Grid>
				{pokemons.map(p => 
					<Card>
						{p.name}
					</Card>			
				)}		
			</Grid>		
		</div>
	)
}

export default Home;
