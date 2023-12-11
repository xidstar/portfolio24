import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { framerMotionConfig } from './config/constants';
import Cursor from './components/Cursor';

import { OrbitControls, Scroll, ScrollControls, Text } from "@react-three/drei";
import Home from "./pages/Home";
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from "./components/Navbar";
import Contact from './pages/Contact';
import { BgColor, getContrastingColor, bgText } from "./config/helpers";

import { useSnapshot } from "valtio";
import state from "./store";
import { MotionConfig } from 'framer-motion';

function App(props) {
  const snap = useSnapshot(state);
  

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
          {/* <OrbitControls /> */}
          <color attach="background" args={[BgColor()]} />
          <Experience />
          
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
          <Text
            position={[2, 0.8, -7]}
            rotation={[0, 0, 0]}
            scale={1.5}
            color={snap.intro || snap.about ? 0x403e3e : 0xcccccc}
            // anchorX="center"
          >
            {bgText()}
          </Text>
        </Canvas>
        <Cursor />
      </MotionConfig>
    </main>
  );
}

export default App;
