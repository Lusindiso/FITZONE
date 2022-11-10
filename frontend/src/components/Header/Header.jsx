import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { useState } from 'react';
import { Link } from 'react-scroll';


const Header = () => {

	const mobile = window.innerWidth <= 768 ? true : false;

	const [menuOpened, setMenuOpened] = useState(false);

	return (
		<header className="header">
			<img src={Logo} alt="logo" className='logo' />

			{(menuOpened === false && mobile === true) ? (
				<div
					onClick={() => setMenuOpened(true)}
				><img className='bars' src={Bars} alt="" /></div>
			) : (
				<ul className='header-menu'>
					<li ><Link onClick={() => setMenuOpened(false)} activeClass='active' to='home' smooth={true}>Home</Link></li>
					<li ><Link onClick={() => setMenuOpened(false)} to='programs' smooth={true}>Programs</Link></li>
					<li ><Link onClick={() => setMenuOpened(false)} to='reasons' smooth={true}>Why us</Link></li>
					<li ><Link onClick={() => setMenuOpened(false)} to='plans' smooth={true}>Plans</Link></li>
					<li ><Link onClick={() => setMenuOpened(false)} to='testimonials' smooth={true}>Terstimonials</Link></li>
				</ul>)}
		</header>
	);
};
export default Header;