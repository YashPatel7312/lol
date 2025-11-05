import React, { useState } from "react";
import "./sefetycss.css";

const Sefety5 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is and isn’t allowed on LOL?",
      answer:
        "Our Community Guidelines and Terms of Service provide an overview of behaviors and content that are and are not permitted on LOL. In general, LOL is a place for you to have fun, be kind, and make connections; we recommend keeping your communications positive and lighthearted to uplift your LOL community.",
    },
    {
      question: "Can I block message senders on LOL?",
      answer:
        "Yes. You can block any user from sending you messages or interacting with your profile. You can manage this in your privacy settings.",
    },
    {
      question: "I received an emergency message; what do I do?",
      answer:
        "If you receive an emergency message or something that concerns safety, report it immediately via our in-app tools or contact our support team. We take such reports very seriously.",
    },
    {
      question: "I received a concerning message; what do I do?",
      answer:
        "Use the report option available next to the message. Our moderation team will review and take action within minutes to ensure your safety.",
    },
    {
      question: "I’m looking for resources to reach out to. Where can I find these?",
      answer:
        "Visit our Resources page to access verified safety organizations and digital wellness programs you can trust.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="sefety-content">
      <h2>our approach to safety</h2>

      <p>
        At LOL, safety is our highest priority. We made LOL as a place where you
        can foster meaningful and authentic connections with your friends, and
        we are committed to cultivating a community rooted in kindness and
        understanding. We take our responsibility to protect the community
        seriously and are constantly improving our safety features to stay
        up-to-date with an ever-changing online world.
      </p>

      <p>
        LOL has built an extensive ecosystem of security tools, safety
        infrastructure, community guidelines, and user policies that make us a
        leading voice amongst our peers when it comes to user safety. You can
        further control your LOL experience by pausing your link at any time,
        hiding specific words from your messages, blocking specific users, and
        reporting unwanted behavior.
      </p>

      <p>
        Our Community Team works around the clock to monitor user reports and
        support tickets, providing 24/7 help and guidance. No concern is too
        small — we’re here to help. Additionally, LOL leverages Hive
        Moderation’s automated solution to scan messages for inappropriate
        content, ensuring a safer and friendlier experience for all.
      </p>

      <h2>moderation</h2>

      <p>
        We take any cases of bullying, hate, or violence very seriously. Our
        Community Team and Hive Moderation technology act as a safety shield for
        our community — reviewing content, detecting potential threats, and
        removing anything that violates our guidelines. Together, they ensure
        that LOL remains a space where users can express themselves freely while
        maintaining a respectful and inclusive environment.
      </p>

      <h2>faq</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${
                openIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="arrow">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sefety5;
