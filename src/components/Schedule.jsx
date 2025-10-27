import "../assets/css/schedule.css";
import scheduleBg from "../assets/images/schedule.png";
import scheduleLogo from "../assets/images/logo.png"

const jobRows = [
  ["Software Engineer", "Frontend Developer", "Backend Developer"],
  ["UI/UX Designer", "Product Manager", "QA Engineer", "DevOps Engineer"],
  ["Data Analyst", "Machine Learning Engineer", "Fullstack Developer", "Cloud Engineer", "Business Analyst"],
  ["HR Manager", "Marketing Specialist", "Sales Executive", "Customer Support"],
  ["Intern", "Junior Developer", "Support Engineer"],
];

const Schedule = () => {
  return (
    <section
      className="schedule-section"
      style={{ backgroundImage: `url(${scheduleBg})` }}
    >
      <div className="overlay"></div>

      <div className="schedule-container">
        <div className="schedule-logo">
          <img src={scheduleLogo} alt="Logo" />
        </div>

        {/* Heading and description */}
        <div className="schedule-header">
          <h2>Schedule a consultation to find your perfect candidate</h2>
          <p>Best Candidate with our intelligent recruitment process</p>
          <h3 className="highlight-heading">Hiring Jobs</h3>
        </div>

        {/* Job Cards */}
        <div className="job-cards-container">
          {jobRows.map((row, rowIndex) => (
            <div key={rowIndex} className="job-row">
              {row.map((job, index) => (
                <div key={index} className="job-card">
                  {job}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="line"></div>
    </section>
  );
};

export default Schedule;
