import {
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { motion } from "framer-motion-3d";
import Backdrop from "../canvas/Backdrop";

import { useSnapshot } from "valtio";
import state from "../store";

export const Experience = (props) => {
  const snap = useSnapshot(state);

 

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
        animate={{
          x: snap.intro ? 0 : 1,
        }}
      >
        {/* <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        /> */}
        <Avatar animation={snap.intro ? "Salute" : "Briefcase"} />
      </motion.group>
    </>
  );
};
