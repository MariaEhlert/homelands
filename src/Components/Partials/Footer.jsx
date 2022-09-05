import './Footer.scss';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { Link } from 'react-router-dom';
export const Footer = () => {
	return (
		<footer>
			<div className='contactWrapper'>
				<Link to='/'><h3>HomeLands</h3></Link>
				<a target='_blank' href="https://www.google.com/maps/place/%C3%98ster+Uttrup+Vej+5,+9000+Aalborg/@57.0492263,9.9647895,17z/data=!3m1!4b1!4m5!3m4!1s0x464932b6b540639b:0x468cdf56d9c66016!8m2!3d57.0492234!4d9.9669781">øster Uttrupvej 5 <br></br> 9000 Aalborg</a>
				<div>
					<a href="mailto:info@homelands.dk">Email: info@homelands.dk</a> <br></br>
					<a href="tel:11-22-33-44">Telefon: +45 11 22 33 44</a>
				</div>
			</div>
			<div className='mediaWrapper'>
				<AiFillTwitterSquare />
				<AiFillFacebook />
			</div>
		</footer>
	)
}