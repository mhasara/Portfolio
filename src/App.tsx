import React, {useState, useEffect} from "react";
import {
  Main,
  Project,
  Contact,
  Navigation,
  Footer,
  Achievements,
  About,
  Timeline,
} from "./components";
import FadeIn from './components/FadeIn';
import { BrowserRouter } from 'react-router-dom';
import LightPillar from './assets/animation/LightPillar';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <BrowserRouter>
      <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
          <LightPillar 
            className="background-animation"
            mixBlendMode={mode === 'dark' ? 'screen' : 'multiply'}
            intensity={mode === 'dark' ? 1.2 : 0.6}
            topColor={mode === 'dark' ? '#5227FF' : '#E0E0FF'}
            bottomColor={mode === 'dark' ? '#FF9FFC' : '#FFEBEB'}
          />
         
          <FadeIn transitionDuration={700}>
              <Main/>
               <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
               <About/>
               <Achievements/>
              <Timeline/>
             
              <Project/>
              <Contact/>
          </FadeIn>
          <Footer />
      </div>
    </BrowserRouter>
    );
}

export default App;