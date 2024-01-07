import React from 'react'
import { Suspense } from 'react';
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
import Footer from './components/Footer';
import { generateStyle } from "./config/helpers";
import LoadingScreen from './pages/LoadingScreen';
import { MotionConfig } from 'framer-motion';

function App() {
  
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
          {/* <fog attach="fog" args={["#f5dab3", 3, 20]} /> */}
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
              <Footer />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Cursor />
        <LoadingScreen />
      </MotionConfig>
    </main>
  );
}

export default App;
