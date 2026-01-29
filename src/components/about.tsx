import React from "react";
import "../assets/styles/About.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const techSkills = [
  "HTML", "CSS", "JavaScript", "React", "Python", "Java",
  "C", "C#", "ASP.NET", "SQL", "Git", "UI/UX Design"
];

const languageSkills = [
  { name: "Sinhala", level: 100 },
  { name: "English", level: 85 },
  { name: "Tamil", level: 45 },
];

const About = () => {
  return (
    <div className="about-container" id="about">
      <h1>About Me</h1>

      {/* 👤 Intro */}
      <p className="about-intro">
        Hi! I’m <strong>Hasini Asara</strong>, an undergraduate Software Engineering student
        at <strong>NSBM Green University</strong>. I love building creative,
        user-friendly web apps and exploring modern technologies like React and ASP.NET.
      </p>

      {/* 🏫 Positions */}
      <h2>University Involvement</h2>
      <ul className="about-list">
        <li>🎯 Member – University Coding Club</li>
        <li>📊 Business Analyst – Digital Attendance System Project</li>
        <li>🚑 Research Lead – Ambulance Management System (Sri Lanka)</li>
      </ul>

      {/* 🤝 Volunteer */}
      <h2>Volunteer Experience</h2>
      <ul className="about-list">
        <li>🤖 Tech Volunteer – University Hackathons</li>
        <li>📚 Peer Tutor – Programming Basics</li>
        <li>🌱 Event Organizer – Student Tech Meetups</li>
      </ul>

      {/* 🔗 LinkedIn */}
      <a
        className="linkedin-btn"
        href="https://www.linkedin.com/in/hasini-asara-60a5362a6"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon /> View Full Profile on LinkedIn
      </a>

      {/* 💻 Tech Skills */}
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {techSkills.map((skill, index) => (
          <span key={index} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>

      {/* 🌍 Language Skills */}
      <h2>Language Skills</h2>
      <div className="language-section">
        {languageSkills.map((lang, index) => (
          <div key={index} className="language-item">
            <span className="language-name">{lang.name}</span>
            <div className="language-bar">
              <div
                className="language-fill"
                style={{ width: `${lang.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
