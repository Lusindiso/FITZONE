import './Join.css';

const Join = () => {
  return (
    <div className="join" id="join">
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>Ready to</span>
          <span>Level up</span>
        </div>
        <div>
          <span>Your body</span>
          <span className='stroke-text'>with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email-container">
          <input type="email" name='user_email' placeholder='Enter your email address' />
          <button className='btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  );
};
export default Join;