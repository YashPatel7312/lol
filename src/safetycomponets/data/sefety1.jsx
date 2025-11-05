import React, { useState } from "react";
import "./sefetycss.css";

const Sefety1 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Q: What is and isn’t allowed on LOL?",
            answer:
                "A: Our Community Guidelines and Terms of Service provide an overview of behaviors and content that are and are not permitted on LOL. In general, LOL is a place for you to have fun, be kind, and make connections; we recommend keeping your communications positive and lighthearted to uplift your LOL community.",
        },
        {
            question: "Q: Can I block message senders on LOL?",
            answer:
                "A: Yes; to block an individual, just tap the Report button (⚠), report the message, and tap “Block user”. The message will be deleted from your inbox and the user will be forbidden from sending you any further messages.",
        },
        {
            question: "Q: I received an emergency message; what do I do?",
            answer:
                "A: info@plexus-technology.in",
        },
        {
            question: "Q: I received a concerning message; what do I do?",
            answer:
                "A: info@plexus-technology.in",
        },
        {
            question: "Q: I’m looking for resources to reach out to. Where can I find these?",
            answer:
                "A: Check our Resources page in our Safety Center for an extensive list of safety and wellbeing services supporting our LOL community.",
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
                can foster meaningful and authentic connections with your friends, and we
                are committed to cultivating a community rooted in kindness and understanding.
                We take our responsibility to protect the community seriously, and we are
                constantly improving our safety features to stay up-to-date with an
                ever-changing online world.
            </p>

            <p>
                LOL has built an extensive ecosystem of security tools, safety infrastructure,
                community guidelines, and user policies that make us a leading voice amongst our
                peers when it comes to user safety. You can also further control your LOL
                experience by pausing your link at any time, hiding specific words from your
                messages, blocking specific users, and reporting unwanted behavior.
            </p>

            <p>
                In addition to these features, our Community Team works around the clock to
                monitor user reports and support tickets, providing the LOL community with 24/7
                help and guidance. No concern is too small for us; reach out to info@plexus-technology.in
                with any questions. We’re happy to help!
            </p>

            <p>
                Additionally, LOL leverages Hive Moderation’s automated moderation solution as the 
                first line of defense to scan messages for inappropriate content. Continue reading 
                our Safety Center to learn more about these resources for a safe and fun experience 
                on LOL.
            </p>

            <p>
                Continue reading our Safety Center to learn more about these resources for a safe 
                and fun experience on LOL .
            </p>

            <h2>moderation</h2>

            <p>
                We take any cases of bullying, hate, or violence very seriously. Our Community Team 
                monitors user reports and support tickets 24/7 to ensure the safety and integrity of 
                our platform and our users.
            </p>

            <p>
                LOL leverages Hive Moderations’s automated moderation solution as the first line of 
                defense to scan messages for inappropriate content. Hive employs cutting-edge deep 
                learning technology to help safeguard our virtual space and filter out potentially 
                harmful language before it hits users’ inboxes. Its advanced algorithm detects the 
                semantic meaning of emojis, and its web scraper pulls specific examples of contextual 
                emoji use. This evolving technology helps to keep us on trend, deciphering slang and 
                helping ensure LOL users are complying with our Community Guidelines.
            </p>

            <p>
                By combining human expertise and advanced technology, we've created a content moderation 
                system that's both effective and able to understand and adapt to modern human behavior. 
                Our Community Team brings their real-world experience and understanding to the process, 
                while Hive Moderation's complex AI algorithms provide invaluable insights and support.
            </p>

            <p>
                Together, our Community Team and Hive Moderation act as  a safety shield for the LOL 
                community, constantly reviewing our platform for objectionable content and taking action.
            </p>

            <p>
                We understand that content moderation is a delicate balance between protecting our community 
                and preserving our users’ freedom of expression. Our Community Team and Hive Moderation work 
                diligently to strike this balance, ensuring that our platform remains a place where diverse 
                voices can thrive while maintaining a respectful and inclusive environment, free of any forms 
                of hate or abuse.
            </p>

            <h2>faq</h2>

            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <button
                            className={`faq-question ${openIndex === index ? "active" : ""
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

export default Sefety1;
