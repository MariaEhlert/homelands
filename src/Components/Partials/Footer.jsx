import './Footer.scss';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
export const Footer = () => {
	return (
		<footer>
			<div className='contactWrapper'>
				<h3>HomeLands</h3>
				<p>øster Uttrupvej 5 <br></br> 9000 Aalborg</p>
				<p>Email: info@homelands.dk <br></br> Telefon: +45 11 22 33 44</p>
			</div>
			<div className='mediaWrapper'>
				<AiFillTwitterSquare />
				<AiFillFacebook />
			</div>
		</footer>
	)
}