import "bootstrap/dist/css/bootstrap.min.css";
import Minebanner from "../assets/img2/bannner2.svg";
import bgbanner from "../assets/img2/bgbanner.svg";
import '../assets/css/herosection.css'

// ✅ Import AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // initialize animations
    }, []);

    return (
        <section
            className="container-fluid text-dark position-relative p-5"
            style={{ overflow: "hidden" }}
        >
            {/* Background geometric shapes */}
            <div
                className="position-absolute d-none d-lg-block"
                style={{
                    top: "15%",
                    left: "43%",
                    width: "60%",
                    height: "550px",
                    backgroundImage: `url(${bgbanner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    zIndex: 0,
                }}
                data-aos="fade-up"
            ></div>

            <div className="row align-items-center position-relative" style={{ zIndex: 1 }}>
                {/* Left Text Section */}
                <div className="col-md-6 px-lg-5 mt-0 mb-5" data-aos="fade-right">
                    <h1
                        className="display-3"
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 500,
                            lineHeight: '110%',
                            letterSpacing: '0',
                        }}
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Effective,<br />
                        Accountable, <br />
                        Secure Blockchain
                        Applications
                    </h1>

                    <p
                        className="text-muted mt-3"
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontSize: '18px',
                            lineHeight: '144%',
                            letterSpacing: '0',
                        }}
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Use blockchain to revolutionize operations in speed and reliability.
                    </p>

                    <div className="d-flex mt-4" data-aos="zoom-in" data-aos-delay="500">
                        <button className="btn btn-dark rounded-pill me-3 px-4 quote-btn">
                            Get A Quote
                        </button>
                        <button className="btn btn-outline-dark rounded-pill px-4">
                            Call Expert
                        </button>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="col-md-6 text-center px-5" data-aos="fade-left">
                    <div className="mx-auto p-3 rounded-4">
                        <div className="mt-0 text-center">
                            <img
                                src={Minebanner}
                                alt="blockchain"
                                className="img-fluid"
                                style={{ width: "700px", marginTop: "-60px" }}
                                data-aos="zoom-in-up"
                                data-aos-delay="400"
                            />
                        </div>
                    </div>

                    {/* Notch + Text inline */}
                    <div
                        className="d-flex align-items-center justify-content-end mt-3"
                        data-aos="fade-up"
                        data-aos-delay="700"
                    >
                        <div
                            style={{
                                width: "30px",
                                height: "12px",
                                borderRadius: "6px",
                                backgroundColor: "#8C8D8C",
                                marginRight: "10px",
                            }}
                        ></div>
                        <p className="text-muted small mb-0">The Gateway to Potential</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
