import React from "react";
import "../assets/styles/About.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import LanguageIcon from "@mui/icons-material/Language";

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
      <div className="about-content">
        <h1 className="section-title">About Me</h1>

        {/* Introduction Card */}
        <div className="info-card intro-card">
          <div className="card-glow"></div>
          <p className="about-intro">
            Hi! I'm <span className="highlight">Hasini Asara</span>, an undergraduate Software Engineering student
            at <span className="highlight">NSBM Green University</span>. I'm passionate about building creative,
            user-friendly web applications and exploring modern technologies like React and ASP.NET.
          </p>
        </div>

// In your About.tsx or About component
<div className="two-column-grid">
  <div className="info-card">
    <div className="card-header">
      <span className="card-icon">🎓</span>
      <h2>Education</h2>
    </div>
    <div className="education-container">
      <div className="education-item">
        <h3>Degree Name</h3>
        <p>University Name</p>
      </div>
      <div className="education-item">
        <h3>Another Degree</h3>
        <p>Another University</p>
      </div>
    </div>
  </div>

  <div className="info-card">
    <div className="card-header">
      <span className="card-icon">🤝</span>
      <h2>Volunteer</h2>
    </div>
    <div className="volunteer-container">
      <div className="volunteer-item">
        <h3>Volunteer Role 1</h3>
        <p>Organization Name</p>
      </div>
      <div className="volunteer-item">
        <h3>Volunteer Role 2</h3>
        <p>Another Organization</p>
      </div>
    </div>
  </div>
</div>

        {/* Technical Skills */}
        <div className="info-card skills-card">
          <div className="card-header">
            <CodeIcon className="card-icon" />
            <h2>Technical Skills</h2>
          </div>
          <div className="card-body">
            <div className="skills-grid">
              {techSkills.map((skill, index) => (
                <span key={index} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Language Skills */}
        <div className="info-card language-card">
          <div className="card-header">
            <LanguageIcon className="card-icon" />
            <h2>Language Proficiency</h2>
          </div>
          <div className="card-body">
            <div className="language-section">
              {languageSkills.map((lang, index) => (
                <div key={index} className="language-item">
                  <div className="language-header">
                    <span className="language-name">{lang.name}</span>
                    <span className="language-percentage">{lang.level}%</span>
                  </div>
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
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a
            className="social-btn linkedin"
            href="https://www.linkedin.com/in/hasini-asara-60a5362a6"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon /> LinkedIn Profile
          </a>
          <a
            className="social-btn github"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon /> GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;