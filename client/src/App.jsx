import React, {useState} from 'react'
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { framerMotionConfig } from './config/constants';
import Cursor from './components/Cursor';

import { Scroll, ScrollControls } from "@react-three/drei";
import Home from "./pages/Home";
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from "./components/Navbar";
import Contact from './pages/Contact';
import { Menu } from './components';
import { BgColor, getContrastingColor } from "./config/helpers";

import { useSnapshot } from "valtio";
import state from "./store";
import { MotionConfig } from 'framer-motion';

function App(props) {
  const snap = useSnapshot(state);
  const {menuOpened, setMenuOpened} = props;
  

  BgColor();

  return (
    <main className={`app transition-all ease-in relative`}>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 1, 5], fov: 30 }}
          style={{ position: "absolute" }}
        >
          <color attach="background" args={[BgColor()]} />
          <Experience menuOpened={menuOpened} />

          <ScrollControls
            // pages={3}
            damping={0.1}
            horizontal={true}
          >
            <Scroll html className="w-full h-full overflow-hidden">
              <Navbar />
              <Home />
              <About />
              <Projects />
              <Contact />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Cursor />
      </MotionConfig>
    </main>
  );
}

export default App;
