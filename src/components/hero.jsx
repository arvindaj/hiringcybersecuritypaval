import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/hero.css";
import heroImg from "../assets/images/heroimg.svg";
import heroleftImg from "../assets/images/lefthero.svg";
import arrowImg from "../assets/images/arrow-up-right.png";

const HeroSection = () => {
  return (
    <section className="hero-section py-5 mt-5 text-center text-dark position-relative overflow-hidden">
      {/* Left Decorative Image */}
      <img
        src={heroleftImg}
        alt="Left Decorative"
        className="heroleft-cover d-none d-lg-block position-absolute top-0 start-0 h-100"
      />

      <div className="container position-relative mt-lg-5  ">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 text-md-start text-center mb-4 mb-md-0">
            <p className="hero-description mb-2">Recruitment of Future</p>

            <h1 className="hero-title mb-4">
              There is Better <br /> Way to Secure
            </h1>

            {/* Hire Section */}
            <div className="d-flex align-items-center justify-content-md-start justify-content-center">
              <div className="hire-icon">
                <img src={arrowImg} alt="Arrow Icon" className="hire-arrow" />
              </div>
              <div className="vertical-line mx-3"></div>
              <div className="hire-text text-start">
                <h5 className="hire-title mb-1">Cyber Security</h5>
                <p className="hire-subtext mb-0">
                  Build Smarter Software with Developers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center position-relative mt-3">
            <img
              src={heroImg}
              alt="Developer Illustration"
              className="img-fluid hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
