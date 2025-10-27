import "../assets/css/faq.css";
import { useState } from "react";
import chat from "../assets/images/chat.png";

const faqData = [
  {
    question: (
      <>
        How do I find the <span className="highlight">perfect candidate</span>{" "}
        quickly for my team without wasting time?
      </>
    ),
    answer:
      "Our AI-powered platform analyzes resumes, skills, and experience to match you with top talent efficiently. You can filter candidates based on your requirements and find the right person in record time, saving both effort and resources.",
  },
  {
    question: (
      <>
        Can I <span className="highlight">schedule a consultation</span> with an
        expert to guide me through the hiring process?
      </>
    ),
    answer:
      "Yes! You can schedule a consultation with our experienced recruitment specialists anytime. During the consultation, we provide guidance on creating job posts, screening candidates, and making informed hiring decisions to get the best fit for your team.",
  },
  {
    question: (
      <>
        Is there a <span className="highlight">free trial</span> available so I
        can test the platform before committing?
      </>
    ),
    answer:
      "Absolutely! We offer a 14-day free trial that allows you to explore the platform’s features, including AI matching, candidate search, and communication tools. This way, you can experience how our system works and see real results before making a decision.",
  },
  {
    question: (
      <>
        How <span className="highlight">secure</span> is my data, and what
        measures are taken to protect sensitive information?
      </>
    ),
    answer:
      "Your data security is our top priority. All user information is encrypted using industry-standard protocols. We implement strict access controls, regular security audits, and comply with data privacy regulations to ensure your data is fully protected at all times.",
  },

  {
    question: (
      <>
        Can I <span className="highlight">edit my profile</span> or update my
        preferences at any time?
      </>
    ),
    answer:
      "Yes, you can update your profile, preferences, and candidate requirements anytime. Our platform saves your changes instantly and adjusts AI recommendations accordingly, ensuring you always receive relevant matches that meet your current hiring needs.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Constantly Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggle(index)}
          >
            <div className="faq-question">
              <div className="faq-icon">
                {activeIndex === index ? (
                  <img src={chat} alt="" />
                ) : (
                  <div className="inactive-box"></div>
                )}
              </div>
              <p>{item.question}</p>
            </div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
