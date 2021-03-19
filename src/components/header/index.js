import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<Link className={style.title} href="/">Pokémon API</Link>
		<nav>
			<Link activeClassName={style.active} href="/">All Pokémons</Link>
			<Link activeClassName={style.active} href="/favorites">Favorites</Link>
		</nav>
	</header>
);

export default Header;
