import { Search } from "../Search/Search"
import { Logo } from "./Logo"
import { Nav } from "./Nav"
import './Header.scss'
import { Link } from "react-router-dom"
import { BurgerMenu } from "./BurgerMenu"

const navItems = [
	{ name: 'Forside', path: '/' },
	{ name: 'Boliger til salg', path: '/homesforsale' },
	{ name: 'Login', path: '/login' }
]

export const Header = () => {

	return (
		<header>

			<div className="svgWrapper">
				<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="108" viewBox="0 0 1737.138 123.576">
					<path id="HEADER_BG" data-name="HEADER BG" d="M0,123.576,491,70.562l1246.138,53.014V0H0Z" />
				</svg>
			</div>
			<nav className='topNav'>
				<div className="headerWrapper">
					<Link to='/'><Logo /></Link>
					<div className='navWrapper'>
						<Nav navItems={navItems} />
						<Search />
					</div>
				</div>
			</nav>
			<BurgerMenu navItems={navItems} />
		</header>
	)
}