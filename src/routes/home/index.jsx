import { useCallback, useEffect, useState } from 'preact/hooks';
import styled from 'styled-components';
import Card from '../../components/card';
import Modal from '../../components/modal';
import RoundedButton from '../../components/roundedButton';
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
	const [offset, setOffset] = useState(0)

	const fetchData = useCallback(async () => {
		const resp = await Service.list(offset)
		setPokemons(p => [...p, ...resp.results])
	}, [offset])

	useEffect(() => {
		fetchData()
	}, [fetchData])

	const handleClick = useCallback(async (pokemon) => {
		const detailedPokemon = await Service.getPokemon(pokemon.name)
		detailedPokemon.image = `https://pokeres.bastionbot.org/images/pokemon/${detailedPokemon.id}.png`
		setDetailed(detailedPokemon)
	}, [])

	return (
		<div class={style.home}>
			<Title>All Pokémons List</Title>
			<Grid>
				{(pokemons.length > 0) && pokemons.map(p => 
					<Card onClick={() => handleClick(p)} >
						{p.name}
					</Card>	
				)}
			</Grid>
			<div class={style.flex}>
				<RoundedButton onClick={() => setOffset(o => o + 20)}>
					Load more
				</RoundedButton>
			</div>
			<Modal data={detailed} closeFunction={() => setDetailed(undefined)} />		
		</div>
	)
}

export default Home;
