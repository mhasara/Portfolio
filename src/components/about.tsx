import React from "react";
import "../assets/styles/about.scss";
import DownloadIcon from "@mui/icons-material/Download";

const skillCircles = [
  { name: "HTML", value: 85 },
  { name: "CSS", value: 80 },
  { name: "JavaScript", value: 78 },
  { name: "React", value: 75 },
  { name: "Python", value: 70 },
  { name: "Java", value: 72 },
  { name: "C#", value: 68 },
  { name: "ASP.NET", value: 65 },
];

const About = () => {
  return (
    <div className="about-section" id="about">
      <h1 className="section-title">
        ABOUT <span>ME</span>
      </h1>

      {/* ===== TOP GRID ===== */}
      <div className="about-top">

        {/* Personal Info */}
        <div className="about-card">
          <h3>Personal Infos</h3>
          <ul>
            <li><strong>Name:</strong> Hasini Asara</li>
            <li><strong>University:</strong> NSBM Green University</li>
            <li><strong>Degree:</strong> BSc in Software Engineering</li>
            <li><strong>Role:</strong> Undergraduate Developer</li>
            <li><strong>Email:</strong> mhasara@gmail.com</li>
            <li><strong>Location:</strong> Sri Lanka</li>
            <li><strong>Languages:</strong> Sinhala, English</li>
          </ul>

          <a
            className="cv-btn"
            href="/cv/Hasini_Asara_CV.pdf"
            download
          >
            <DownloadIcon /> Download CV
          </a>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-box">
            <h2>3+</h2>
            <p>YEARS LEARNING</p>
          </div>
          <div className="stat-box">
            <h2>10+</h2>
            <p>PROJECTS</p>
          </div>
          <div className="stat-box">
            <h2>5+</h2>
            <p>CLUB ROLES</p>
          </div>
          <div className="stat-box">
            <h2>6+</h2>
            <p>TECH STACKS</p>
          </div>
        </div>

      </div>

      {/* ===== SKILLS ===== */}
      <h2 className="sub-title">My Skills</h2>

      <div className="skills-grid">
        {skillCircles.map((skill, index) => (
          <div key={index} className="skill-circle">
            <svg viewBox="0 0 36 36">
              <path
                className="bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="progress"
                strokeDasharray={`${skill.value}, 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">
                {skill.value}%
              </text>
            </svg>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      {/* ===== EXPERIENCE & EDUCATION ===== */}
      <h2 className="sub-title">Experience & Education</h2>

      <div className="timeline-grid">

        <div className="timeline-column">
          <h3>Experience</h3>

          <div className="timeline-item">
            <span>2024 - Present</span>
            <h4>Research Lead – Ambulance System</h4>
            <p>Designing and developing a smart ambulance management system for Sri Lanka.</p>
          </div>

          <div className="timeline-item">
            <span>2023 - 2024</span>
            <h4>Business Analyst – Attendance System</h4>
            <p>Handled requirement analysis and system design for a university project.</p>
          </div>

          <div className="timeline-item">
            <span>2023</span>
            <h4>CTF Challenge Organizer</h4>
            <p>Developed web and crypto challenges for university cybersecurity events.</p>
          </div>
        </div>

        <div className="timeline-column">
          <h3>Education</h3>

          <div className="timeline-item">
            <span>2023 - Present</span>
            <h4>BSc Software Engineering – NSBM</h4>
            <p>Focused on full-stack development, UI/UX, and enterprise applications.</p>
          </div>

          <div className="timeline-item">
            <span>2022</span>
            <h4>HND – ICBT Campus</h4>
            <p>Completed Higher National Diploma in Computing.</p>
          </div>

          <div className="timeline-item">
            <span>2020</span>
            <h4>Advanced Level – Thelijjawila Central College</h4>
            <p>Completed school education with Maths stream.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
