
import indlag from "../assets/images/Flag Of India.png";
import mail from "../assets/images/mail.png";
import aus from "../assets/images/Australia.png";
import uk from "../assets/images/United Kingdom.png";
import "../assets/css/footer.css";


const Footer = () => {
  return (
    <footer className="ftr-bg text-light pt-3 z-0 container-fluid p-md-5 pb-md-4 overflow-hidden">
      <div className="ftr-sec">
        <div className="pe-0 pe-md-4 px-md-3 px-0 mb-5 pt-5 pt-lg-0 border-secondary">
          <div className="row d-flex justify-content-between gap-lg-5">
            <div className="col-12 col-md-6 col-lg-2 mb-3 d-flex flex-column flex-md-row gap-2">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="d-flex mb-3">
                  <div className="img-circle-bg p-3 rounded-circle">
                    <img src={mail} />
                  </div>
                </div>

                <div className="ps-3">
                  <strong>Mail</strong>
                  <br />
                  <a
                    href="mailto:info@pavalsoftware.com"
                    className="text-green"
                  >
                    info@pavalsoftware.com
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-2 mb-3 d-flex flex-column gap-2">
              <div className="d-flex mb-2">
                <div className="img-circle-bg p-3 rounded-circle">
                  <img src={indlag} alt="india.flag" />
                </div>
              </div>
              <span>
                <p className="mb-1 fw-bold">Corporate office</p>

                <p className=" fs-p">
                  53-2, Second Floor, 3rd Cross, MKP Colony Main St, Ganapathy,
                  Coimbatore–641012,
                </p>

                <a href="tel:‪+916380750902‬" className="text-green">
                  ‪+91 63807 50902‬
                </a>
              </span>
            </div>

            <div className="col-12 col-md-6 col-lg-2  mb-3 d-flex flex-column gap-2">
              <div className="d-flex mb-2">
                <div className="img-circle-bg p-3 rounded-circle">
                  <img src={uk} alt="india.flag" />
                </div>
              </div>
              <span>
                <p className="mb-1 fw-bold">Branch office</p>
                <p className=" fs-p">
                  47, Shaughnessy Way, Houlton, Rugby, CV23 1AU, United Kingdom
                </p>
                <a href="tel:‪+447402702107‬" className="text-green">
                  ‪+44 7402 702107‬
                </a>
              </span>
            </div>

            <div className="col-12 col-md-6 col-lg-2 mb-3 d-flex flex-column gap-2">
              <div className="d-flex mb-2">
                <div className="img-circle-bg p-3 rounded-circle">
                  <img src={aus} alt="india.flag" />
                </div>
              </div>
              <span>
                <p className="mb-1 fw-bold">Branch office</p>
                <p className=" fs-p">
                  5/23, Langhorne St, Dandenong, VIC - 3175, Australia.
                </p>
                <a href="tel:‪+61449840901‬" className="text-green">
                  ‪+61 449 840 901‬
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className=" border-top border-secondary pt-3 text-center small pb-3">
          <div className="row text-center text-md-start gy-2 px-md-4 pe-md-4 align-items-end">
            <div className="col-12 col-md-6 d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
              <span>
                <a
                  target="_blank"
                  href="https://www.pavalsoftware.com/terms-conditions"
                  className="text-white text-decoration-none list-ftr"
                >
                  Terms and Conditions
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://www.pavalsoftware.com/privacy-policy"
                  className="text-white text-decoration-none list-ftr"
                >
                  Privacy policy
                </a>
              </span>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
              &copy; Copyright 2025, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
