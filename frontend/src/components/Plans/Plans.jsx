import './Plans.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="container">
        <div className="programs-header">
          <span className='stroke-text'>Ready to start</span>
          <span>Your journey</span>
          <span className='stroke-text'>now withus</span>
        </div>

        <div className="plans">
          {plansData.map(plan => (
            <div className="plan" key={plan._id}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>

              <div className="features">
                {plan.features.map((feature, i) => (
                  <div className="feature" key={i}>
                    <img src={whiteTick} alt="" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div>
                <span>See more benefits</span>
              </div>
              <button className='btn'>Join now </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Plans;