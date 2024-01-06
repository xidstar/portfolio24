import React from 'react'
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { framerMotionConfig } from './config/constants';
import Cursor from './components/Cursor';
import { easing } from "maath";

import { Loader, OrbitControls, Scroll, ScrollControls, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Home from "./pages/Home";
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from "./components/Navbar";
import Contact from './pages/Contact';
import { BgColor, generateStyle, bgText } from "./config/helpers";
import LoadingScreen from './pages/LoadingScreen';

import { useSnapshot } from "valtio";
import state from "./store";
import { MotionConfig } from 'framer-motion';

function App(props) {
  const snap = useSnapshot(state);
  
  generateStyle();

  

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
          className="absolute"
          style={{
            background: generateStyle(),
          }}
        >
          
          {/* <OrbitControls /> */}
          {/* <color attach="background" args={[BgColor()]} /> */}
          {/* {snap.intro ? <fog attach="fog" args={["#cccccc", 3, 20]} /> : ""} */}
          <Suspense fallback={null}>
            <Experience />
          </Suspense>

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
        {/* <Loader /> */}
        <LoadingScreen />
      </MotionConfig>
    </main>
  );
}

export default App;
