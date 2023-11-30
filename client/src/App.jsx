import React, {useState} from 'react'
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

import { Scroll, ScrollControls, Html } from "@react-three/drei";
import Interface from "./components/Interface";
import Home from "./pages/Home";
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from "./components/Navbar";
import Contact from './pages/Contact';


import { useSnapshot } from "valtio";
import state from "./store";
import { MotionConfig } from 'framer-motion';

function App() {
  const snap = useSnapshot(state);
  const [menuOpened, setMenuOpened] = useState(false);

  const BgColor = () => {
    let color = snap.colors[0];

    if (snap.about) {
      color = snap.colors[1]
    } else if (snap.projects) {
      color = snap.colors[2];
    } else if (snap.contact) {
      color = snap.colors[3];
    }

    return color
  }

  return (
    <main className="app transition-all ease-in relative">
      <MotionConfig
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 200,
          damping: 50,
          restDelta: 0.0001,
          duration: 1,
        }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 1, 5], fov: 30 }}
          style={{ position: "absolute" }}
        >
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
        </Canvas>
      </MotionConfig>
    </main>
  );
}

export default App;
