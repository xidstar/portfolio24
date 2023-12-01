import {
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { motion } from "framer-motion-3d";
import { framerMotionConfig } from "../config/constants";

import { useSnapshot } from "valtio";
import state from "../store";
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export const Experience = (props) => {
  const snap = useSnapshot(state);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();
  

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  })

  useEffect(() => {
    animate(cameraPositionX, snap.about ? 3 : 0, {...framerMotionConfig});
    animate(cameraLookAtX, snap.about ? -1.5 : 0, {...framerMotionConfig});
  }, [snap.about])

  const { animation } = useControls({
    animation: {
      value: "Salute",
      options: ["Briefcase", "Jump", "Waving", "Salute"],
    },
  });

  

  return (
    <>
      <Environment preset="sunset" />
      <motion.group
        position-y={-1}
        // animate={{
        //   x: snap.intro || snap.about ? 0 : 1,
        // }}
      >
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar animation={snap.intro ? "Waving" : "Salute"} />
      </motion.group>
    </>
  );
};
