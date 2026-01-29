import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SplitText from "../assets/animation/SplitText";
import '../assets/styles/Main.scss';

function Main() {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
 
   <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg"
            alt="Avatar"
          />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/mhasara" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/hasini-asara-60a5362a6" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>

          {/* 👤 Name (Split Text) */}
          <SplitText
            text="Hasini Asara"
            className=""
            delay={50}
            duration={10}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            tag="h1"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          {/* 💼 Title (Split Text) */}
          <SplitText
            text="Aspiring Software Engineer"
            className=""
            delay={30}
            duration={10}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            tag="p"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <div className="mobile_social_icons">
            <a href="https://github.com/mhasara" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/hasini-asara-60a5362a6" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Main;
