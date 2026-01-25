import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faMedal, faAward } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss'; // you can keep same styles or rename later

const achievements = [
  {
    title: "Duothan 2025 – 1st Runner Up",
    icon: faTrophy,
    description:
      "Achieved 1st Runner Up at Duothan 2025, a competitive hackathon organized by IEEE NSBM, demonstrating strong problem-solving and teamwork skills.",
    tags: ["Hackathon", "IEEE NSBM", "2025", "Team Event"]
  },
  {
    title: "1st Place – Game Development Workshop 2025",
    icon: faMedal,
    description:
      "Secured 1st place at the Game Development Workshop 2025 powered by RAM Studio and organized by the Association of Software Engineering.",
    tags: ["Game Dev", "Workshop", "RAM Studio", "2025"]
  },
  {
    title: "1st Place – IEEE GreenXtreme 2025",
    icon: faAward,
    description:
      "Won 1st place at IEEE GreenXtreme 2025, organized by IEEE NSBM, for presenting an innovative and impactful technical solution.",
    tags: ["IEEE NSBM", "Innovation", "Sustainability", "2025"]
  }
];

function Achievements() {
  return (
    <div className="container" id="achievements">
      <div className="skills-container">
        <h1>Achievements</h1>

        <div className="skills-grid">
          {achievements.map((item, index) => (
            <div className="skill" key={index}>
              <FontAwesomeIcon icon={item.icon} size="3x" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="flex-chips">
                <span className="chip-title">Highlights:</span>
                {item.tags.map((tag, i) => (
                  <Chip key={i} className="chip" label={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
