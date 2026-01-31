import React from "react";
import "../assets/styles/About.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AnimatedContent from '../assets/animation/animate';
import LogoLoop from '../assets/animation/loop';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiPython, SiMysql, SiGit, SiCplusplus, SiDotnet } from 'react-icons/si';

// @ts-ignore
const techLogos = [
  // @ts-ignore
  { node: <SiHtml5 />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  // @ts-ignore
  { node: <SiCss3 />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  // @ts-ignore
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  // @ts-ignore
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  // @ts-ignore
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  // @ts-ignore
  { node: <SiCplusplus />, title: "C++", href: "https://cplusplus.com" },
  // @ts-ignore
  { node: <SiDotnet />, title: "ASP.NET", href: "https://dotnet.microsoft.com/apps/aspnet" },
  // @ts-ignore
  { node: <SiMysql />, title: "SQL", href: "https://www.mysql.com" },
  // @ts-ignore
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
];
const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <h1 className="section-title">About Me</h1>

        {/* Introduction Card */}
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <div className="info-card intro-card">
            <div className="card-glow"></div>
            <p className="about-intro">
              Hi! I'm <span className="highlight">Hasini Asara</span>, an undergraduate Software Engineering student
              at <span className="highlight">NSBM Green University</span>. I'm passionate about building creative,
              user-friendly web applications and exploring modern technologies like React and ASP.NET.
            </p>
          </div>
        </AnimatedContent>

        {/* Education and Volunteer Grid */}
        <div className="two-column-grid">
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0.2}
          >
            <div className="info-card">
              <div className="card-header">
                <span className="card-icon">🎓</span>
                <h2>Education</h2>
              </div>
              <div className="education-container">
                <div className="education-item">
                  <h3>BSc (Hons) Software Engineering</h3>
                  <p>NSBM Green University</p>
                </div>
                <div className="education-item">
                  <h3>Advanced Level</h3>
                  <p>Your School Name</p>
                </div>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0.4}
          >
            <div className="info-card">
              <div className="card-header">
                <span className="card-icon">🤝</span>
                <h2>Volunteer</h2>
              </div>
              <div className="volunteer-container">
                <div className="volunteer-item">
                  <h3>Community Service</h3>
                  <p>Local Organization</p>
                </div>
                <div className="volunteer-item">
                  <h3>Tech Mentor</h3>
                  <p>University Club</p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* Technical Skills - Logo Loop */}
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.6}
        >
          <div className="info-card skills-card">
            <div className="card-header">
              <span className="card-icon">💻</span>
              <h2>Technical Skills</h2>
            </div>
            <div className="card-body logo-loop-container">
              <LogoLoop
                logos={techLogos}
                speed={100}
                direction="left"
                logoHeight={60}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="rgba(20, 2, 2, 0.512)"
                ariaLabel="Technology skills"
              />
            </div>
          </div>
        </AnimatedContent>

        {/* Social Links */}
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.8}
        >
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
        </AnimatedContent>
      </div>
    </div>
  );
};

export default About;