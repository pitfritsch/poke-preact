import { useState } from 'preact/hooks';
import style from './style'

const Favorites = () => {

	const [ favorites ] = useState(JSON.parse(localStorage.getItem('favorites')))

	return (
		<div class={style.favorites}>
			<h1>Favorites</h1>
			{favorites && favorites.map(f => 
				<h3>{f.name}</h3>
			)}
		</div>
	);
}

export default Favorites;
