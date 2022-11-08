import Header from '../Header/Header';
import './Hero.css';
import Hero_image from '../../assets/hero_image.png';
import Hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

import { motion } from 'framer-motion';

const Hero = () => {
	const mobile = window.innerWidth <= 768 ? true : false;
	return (
		<div className='hero'>
			<div className="blur blur-h"></div>
			<div className='left-h'>
				<Header />
				<div className='the-best-ad'>
					<motion.div
						initial={{ left: mobile ? '50vw' : '205px ' }}
						whileInView={{ left: '8px' }}
						transition={{ type: 'tween', duration: 3 }} >
					</motion.div>
					<span>the best fitness club in town</span>
				</div>

				<div className='hero-text'>
					<div>
						<span className='stroke-text'>Shape </span>
						<span>Your</span>
					</div>
					<div>
						<span>Ideal body</span>
					</div>
					<div>
						<span>
							In here we will help you shape and build your ideal body and live
							up your life to the fullest
						</span>
					</div>
				</div>

				<div className='figures'>
					<div>
						<span>+140</span>
						<span>expert coaches</span>
					</div>
					<div>
						<span>+978</span>
						<span>members joined</span>
					</div>
					<div>
						<span>+50</span>
						<span>fitness programs</span>
					</div>
				</div>

				<div className="hero-buttons">
					<button className="btn">Get Started</button>
					<button className="btn">Learn More</button>
				</div>
			</div>
			<div className='right-h'>
				<button className='btn'>Join Now</button>

				<motion.div
					initial={{ right: '-1rem' }}
					whileInView={{ right: '4rem' }}
					transition={{ type: 'spring', duration: 3 }}


					className="heart-rate">
					<img src={Heart} alt="" />
					<span>Heart Rate</span><span>116 pbm</span>
				</motion.div>

				<img src={Hero_image} alt="" className="hero-image" />
				<motion.img
					initial={{ right: '11rem' }}
					whileInView={{ right: '20rem' }}
					transition={{ type: 'spring', duration: 3 }}

					src={Hero_image_back} alt="" className="hero-image-back" />

				<motion.div
					initial={{ right: '37rem' }}
					whileInView={{ right: '28rem' }}
					transition={{ type: 'spring', duration: 3 }}
					className="calories">
					<img src={Calories} alt="" />
					<div>
						<span>Calories Burned</span>
						<span>220kcal</span>
					</div>

				</motion.div>
			</div>
		</div>
	);
};
export default Hero;
