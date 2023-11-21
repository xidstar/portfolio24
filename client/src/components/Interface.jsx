import React from 'react';
import Home from '../pages/Home';
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { useSnapshot } from "valtio";
import { AnimatePresence } from 'framer-motion';

import state from "../store";

const Section = (props) => {
  const {children} = props;

  return (
    <section className={`h-screen w-screen p-4 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}>
      {children}
    </section>
  )
}

const Interface = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <div className="flex items-center w-[300vw]">
          <Section>
            <About />
          </Section>
          <Section>
            <Projects />
          </Section>
          <Section>
            <Contact />
          </Section>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Interface