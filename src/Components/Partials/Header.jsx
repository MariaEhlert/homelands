import { Search } from "../Search/Search"
import { Logo } from "./Logo"
import { Nav } from "./Nav"
import './Header.scss'
import { Link } from "react-router-dom"
import { BurgerMenu } from "./BurgerMenu"
import HeaderImage from '../../Assets/Images/Header.svg'

const navItems = [
	{ name: 'Forside', path: '/' },
	{ name: 'Boliger til salg', path: '/homesforsale' },
	{ name: 'Login', path: '/login' }
]

export const Header = () => {

	return (
		<header>
			<div className="headerImageWrapper">
				<img src={HeaderImage} alt="header" />
			</div>
			<nav className='topNav'>
				<div className="headerWrapper">
					<Link to='/'><Logo /></Link>
					<div className='navWrapper'>
						<Nav navItems={navItems} />
						{/* VIRKER IKKE  */}
						<Search />
					</div>
				</div>
			</nav>
			<BurgerMenu navItems={navItems} />
		</header>
	)
}