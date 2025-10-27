import "bootstrap/dist/css/bootstrap.min.css";
import bottomimg from '../assets/img2/whyimgbottom.svg'



export default function WhyChooseUs() {
    return (
        <div
            className="text-center py-lg-5 mb-4 p-4"
            style={{ background: "linear-gradient(180deg, #F8F1F1, #f8f9fa, #CBCBCB)" }}
        >
            {/* Heading */}
            <h2 className="fw-bold display-5">
                Advantages to Blockchain Developers
            </h2>

            {/* Centered Paragraph */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <p className="text-muted mt-3 mb-5 fs-6" style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 400,
                            fontStyle: "normal",
                            fontSize: "16px",
                            letterSpacing: "0%",
                            verticalAlign: "middle",
                        }}>
                            The rise of blockchain technology is not just a buzz—it’s reshaping how developers build, test, and deploy applications. With automation, decentralization, and unmatched security, blockchain empowers developers with faster, smarter, and more reliable tools than ever before.
                        </p>
                    </div>
                </div>
            </div>

            {/* Three Columns */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-4">
                        <p className=" fw-bold text-muted" style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 600,
                            fontStyle: "normal",
                            fontSize: "15px",
                            letterSpacing: "0%",
                            verticalAlign: "middle",
                        }}>
                            35 Times Quicker Deployment – The ready-made ledger tools and frameworks accelerate the project turnaround enormously.

                        </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <p className="fw-bold text-muted" style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 600,
                            fontStyle: "normal",
                            fontSize: "15px",
                            letterSpacing: "0%",
                            verticalAlign: "middle",
                        }}>
                            50% Reduced Costs I The intervention of human hands and decentralization are cut back through automation.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <p className="fw-bold  text-muted" style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 600,
                            fontStyle: "normal",
                            fontSize: "15px",
                            letterSpacing: "0%",
                            verticalAlign: "middle",
                        }}>
                            80% Increased Security- It is cryptographically secure and nearly impossible to hack because of cryptographic integrity and immutability.
                        </p>
                    </div>
                </div>
            </div>

            {/* Button */}
            <button className="btn btn-dark btn-lg rounded-pill px-4 mt-3 quote-btn ">
                Connect with Expert
            </button>


            {/* Decorative Bottom Bar with Image */}
            <div className="mt-5">
                <img
                    src={bottomimg}  // <-- replace with your actual image path
                    alt="decorative bottom bar"
                    className="img-fluid w-100"
                    style={{ objectFit: "cover", height: "60px" }}
                />
            </div>
        </div>
    );
}
