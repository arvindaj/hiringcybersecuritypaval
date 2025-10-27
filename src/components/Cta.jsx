import "../assets/css/cta.css";
import ctabg from "../assets/images/brunette-businesswoman-posing1.png";
import ctabottom from "../assets/images/cta-bottom.png";
import ctta from "../assets/images/ctta-bg.svg";

const Cta = () => {
  return (
    <section
      className="cta-section mt-5"
      style={{ backgroundImage: `url(${ctabg})` }}
    >
     <div className="cta-container">
        <div className="cta-content">
          <div className="cta-left">
            <img src={ctta} alt="cta bottom" className="heroleft-cover d-none d-lg-block position-absolute top-0 start-0 h-100 mx-lg-2" />
            <div className="cta-bottom-text mx-lg-5">
              <p className="para-first">WE SUPPORT</p>
              <p className="para-second">To Your Business</p>
            </div>
          </div>

          <div className="cta-right">
            <h2>
              Schedule a consultation <br /> to find your perfect candidate
            </h2>
            <div className="cta-form">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <textarea placeholder="Additional Information"></textarea>
              <button>Send Mail</button>
            </div>
          </div>
        </div>
      </div>



      <img src={ctabottom} alt="cta bottom" className="cta-bottom-img" />
    </section>
  );
};

export default Cta;
