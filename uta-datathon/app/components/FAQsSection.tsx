import React, { useState } from "react";

export default function FAQsSection() {
  const faqs = [
    {
      question: "What is the UTA Datathon?",
      answer:
        "The UTA Datathon is an annual event where participants create innovative solutions to real-world problems using data science and AI.",
    },
    {
      question: "Who can participate?",
      answer:
        "Anyone interested in data science and AI can participate, regardless of their background or experience.",
    },
    {
      question: "What is the theme for this year?",
      answer:
        "This year's theme is focused on leveraging data science and AI to drive positive change in our communities.",
    },
    {
      question: "How long does the event last?",
      answer: "The event typically lasts for a weekend.",
    },
    {
      question: "Do I need to have a team?",
      answer:
        "No, you can participate individually or form a team during the event.",
    },
    {
      question: "What kind of support will I receive?",
      answer:
        "Mentors and industry experts will be available to guide you throughout the event.",
    },
    {
      question: "How do I register?",
      answer: "Registration details are available on our website.",
    },
    {
      question: "What are the prizes?",
      answer:
        "Prizes include cash awards and recognition from industry leaders.",
    },
    {
      question: "Can I attend virtually?",
      answer: "Yes, virtual attendance options are available.",
    },
    {
      question: "How can I sponsor the event?",
      answer: "Contact us through our website for sponsorship opportunities.",
    },
  ];

  const [activeFAQs, setActiveFAQs] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (activeFAQs.includes(index)) {
      setActiveFAQs(activeFAQs.filter((id) => id !== index));
    } else {
      setActiveFAQs([...activeFAQs, index]);
    }
  };

  return (
    <div className="faqs-section">
      <div className="faqs-grid">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-card">
            <div className="faq-header" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span
                className={`arrow ${
                  activeFAQs.includes(index) ? "active" : ""
                }`}
              >
                <span className="down-arrow">{">"}</span>
              </span>
            </div>
            <div
              className={`faq-answer ${
                activeFAQs.includes(index) ? "active" : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
