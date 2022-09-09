import { NavLink } from 'react-router-dom'

export const Nav = props => {
	return (
		<ul>
			{/* mapper over nav */}
			{props && props.navItems && props.navItems.map((value, index) => {
				return (
					<li key={index}>
						<NavLink to={value.path}>{value.name}</NavLink>
					</li>
				)
			})}
		</ul>
	)
}