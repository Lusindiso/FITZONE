import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { useState } from 'react';

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className='stroke-text'>What they</span>
        <span>say anout us</span>
        <span>
          {testimonialsData[selected].review}
        </span>
        <span>
          <span className='t-name'>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />

        <div className="arrows">
          <img src={leftArrow} alt="" />
          <img src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Testimonials;