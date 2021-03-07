import { useEffect } from 'preact/hooks';
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
	grid-gap: 50px;
`

const Card = styled.div`
	min-height: 100px;
	background-color: #fafafa;
	border-radius: 5px;
`

const Home = () => {
	const service = new Service();

	useEffect(() => {
		console.log('montou')
	}, [])

	return (
		<div class={style.home}>
			<Title>All Pokémons List</Title>
			<Grid>
				<Card onClick={() => service.list()}>
					1
				</Card>			
				<Card>
					2
				</Card>			
				<Card>
					3
				</Card>			
				<Card>
					4
				</Card>			
			</Grid>		
		</div>
	)
}

export default Home;
