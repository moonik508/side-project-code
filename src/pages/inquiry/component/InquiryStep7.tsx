import { NavLink } from 'react-router-dom';

export default function InquiryStep7() {
  return (
    <div className="inquiry-items finish">
      <p className="inquiry_title">
        <b>FINISH</b>
        <br />
      </p>
      <div className="inquiry-card-box">
        <NavLink to={'/'} className="move-home-btn">
          <span>Back to home</span>
          <span className="ico-arrow">arrow</span>
        </NavLink>
      </div>
    </div>
  );
}
