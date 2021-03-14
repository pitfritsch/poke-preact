import { useCallback, useEffect, useState } from 'preact/hooks';
import styled from 'styled-components';
import Card from '../../components/card';
import Modal from '../../components/modal';
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


const Home = () => {

	const [pokemons, setPokemons] = useState([])
	const [detailed, setDetailed] = useState(undefined)

	useEffect(() => {
		const fetchData = async () => {
			const allPokemons = await Service.list()

			for (const p of allPokemons) {
				const pokemon = await Service.getPokemon(p.name)
				p.pokemon = pokemon
				p.pokemon.image = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
			}

			setPokemons(allPokemons)
		}
		fetchData()
	}, [])

	const handleClick = useCallback((pokemon) => {
		setDetailed(pokemon)
	}, [])

	return (
		<div class={style.home}>
			<Title>All Pokémons List</Title>
			<Grid>
				{(pokemons.length > 0) && pokemons.map(p => 
					<Card pokemon={p.pokemon} onClick={() => handleClick(p.pokemon)} >
						{p.name}
					</Card>	
				)}
			</Grid>
			<Modal data={detailed} closeFunction={() => setDetailed(undefined)} />		
		</div>
	)
}

export default Home;
