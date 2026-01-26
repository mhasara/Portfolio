import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SplitText from "../assets/animation/splitt";
import '../assets/styles/Main.scss';
import Particles from "../assets/animation/practicels";

function Main() {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="container main-bg-wrapper">
      
      {/* 🌌 Particles Background */}
      <Particles
        particleCount={180}
        particleSpread={12}
        speed={0.15}
        alphaParticles={true}
        particleBaseSize={90}
        sizeRandomness={1}
        cameraDistance={18}
        moveParticlesOnHover={true}
        particleHoverFactor={0.5}
        className="particles-bg"
      />

      {/* 👤 Foreground Content */}
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg"
            alt="Avatar"
          />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>

          {/* 👤 Name (Split Text) */}
          <h1>
            <SplitText
              text="Hasini Asara"
              delay={50}
              duration={10}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </h1>

          {/* 💼 Title (Split Text) */}
          <p>
            <SplitText
              text="Aspire Software Engineer"
              delay={30}
              duration={10}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
