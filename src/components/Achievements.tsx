import React from "react";
import CircularGallery from "../assets/animation/CircularGallery";
import '../assets/styles/Achievements.scss';

// 👇 import images
import duothanImg from "../assets/images/mock01.png";
import gdxImg from "../assets/images/mock02.png";
import greenxtremeImg from "../assets/images/mock03.png";

const achievements = [
  {
    title: "Duothan 2025",
    image: duothanImg,
    description: "1st Runner Up - IEEE NSBM Hackathon"
  },
  {
    title: "Game Dev 2025",
    image: gdxImg,
    description: "1st Place - RAM Studio Workshop"
  },
  {
    title: "GreenXtreme 2025",
    image: greenxtremeImg,
    description: "1st Place - IEEE NSBM Innovation"
  }
];

function Achievements() {
  const galleryItems = achievements.map(item => ({
    image: item.image,
    text: `${item.title} | ${item.description}`
  }));

  return (
    <div className="achievements-container" id="achievements">
      <div className="skills-container">
        <h1>Achievements</h1>
        <div style={{ height: '500px', position: 'relative' }}>
          <CircularGallery 
            items={galleryItems} 
            bend={3} 
            textColor="#c77dff"
            borderRadius={0.05}
          />
        </div>
      </div>
    </div>
  );
}

export default Achievements;
