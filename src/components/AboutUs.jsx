import React from 'react';
import './AboutUs.css';

function AboutUs() {
  const team = [
    {
      name: "Ashwin",
      role: "Founder",
      description: `
        Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.
        
        Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.
      `,
      image: '/ashwin.avif',  // replace with actual path
      linkedin: '#',
    },
    {
      name: "Nicole",
      role: "Executive Coach",
      description: `
        Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.
        
        With a BS in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.
      `,
      image: '/nicole.png',  // replace with actual path
      linkedin: '#',
    }
  ];

  return (
    <section className="about-section">
      <h2 className="about-heading">About Us</h2>
      <div className="team-container">
        {team.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-photo">
              <img src={member.image} alt={member.name} />
              <a href={member.linkedin} className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                in
              </a>
            </div>
            <div className="member-info">
              <p><strong>{member.name}</strong> is {member.role} at Mobius.</p>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="about-links">
        <p><a href="#">Learn more about our Board of Advisors ↗</a></p>
        <p><a href="#">Follow us on our LinkedIn page ↗</a></p>
      </div>
    </section>
  );
}

export default AboutUs;
