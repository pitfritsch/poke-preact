import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import styled from 'styled-components';
import GenericModal from '../../components/genericModal';
import { Loading } from '../../components/loading';
import Stat from '../../components/stat';
import Service from '../../utils/services';
import Item from './Item';
import style from './style'

const Container = styled.div`
	max-width: 1000px;
	margin: auto;
`

const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px;
`

const ModalTitle = styled.h1`
	text-transform: capitalize;
`

const PokemonImage = styled.div`
	height: 300px;
	width: 300px;
	img {
		max-height: 300px;
		max-width: 300px;
	}
`

const Stats = styled.div`
	padding: 50px;
	padding-top: 0;
`

const Favorites = () => {

	const [ favorites ] = useState(JSON.parse(localStorage.getItem('favorites')))
	const [ details, setDetails ] = useState(undefined)
  const [ blob, setBlob ] = useState(undefined)

  const loadImage = useCallback(async () => {
    if (!details) return
    setBlob(await Service.getImageBlob(details.image))
  }, [details])

  useEffect(() => {
    loadImage()
  }, [loadImage])

	useEffect(() => {
		console.log(details)
	}, [details])

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
						<PokemonImage>
							{blob ?
								<img src={blob}/> : 
								<Loading />
							}
						</PokemonImage>
						<ModalTitle>{details.name}</ModalTitle>
					</ModalContainer>
					<Stats>
						{details.stats.map(stat => 
							<Stat stat={stat}/>
						)}
					</Stats>
				</GenericModal>
			}
		</div>
	);
}

export default Favorites;
