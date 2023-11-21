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

function App() {
  const snap = useSnapshot(state);
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <main className="app transition-all ease-in relative">
      <Navbar />

      <Canvas
        shadows
        camera={{ position: [0, 1, 5], fov: 30 }}
        style={{ position: "absolute" }}
      >
        <color attach="background" args={[snap.color]} />

        <Experience />

        <ScrollControls
          // pages={3}
          damping={0.1}
          horizontal={true}
        >
          <Scroll html className="w-full h-full overflow-hidden">
            <Home />
            <About />
            <Projects />
            <Contact />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </main>
  );
}

export default App;
