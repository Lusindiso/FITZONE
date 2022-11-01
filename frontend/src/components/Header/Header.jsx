import './Header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
	return (
		<header className="header">
			<img src={Logo} alt="logo" className='logo' />
			<ul className='header-menu'>
				<li>Home</li>
				<li>Programs</li>
				<li>Why us</li>
				<li>Plans</li>
				<li>Terstimonials</li>
			</ul>
		</header>
	);
};
export default Header;