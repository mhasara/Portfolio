import React from "react";
import TiltedCard from "./TiltedCard";
import '../assets/styles/Achievements.scss';

// 👇 import images
import duothanImg from "../assets/images/mock01.png";
import gdxImg from "../assets/images/mock02.png";
import greenxtremeImg from "../assets/images/g.jpeg";

const achievements = [
  {
    title: "Duothan 2025 – 1st Runner Up",
    image: duothanImg,
  },
  {
    title: "1st Place – Game Development Workshop 2025",
    image: gdxImg,
  },
  {
    title: "1st Place – IEEE GreenXtreme 2025",
    image: greenxtremeImg,
  }
];

function Achievements() {
  return (
    <div className="achievements-container" id="achievements">
      <div className="skills-container">
        <h1>Achievements</h1>

        <div className="skills-grid">
          {achievements.map((item, index) => (
            <div className="tilted-card-wrapper" key={index}>
              <TiltedCard
                title={item.title}
                image={item.image}
                alt={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
