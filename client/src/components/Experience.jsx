import {
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";

export const Experience = () => {

  const { animation } = useControls({
    animation: {
      value: "Briefcase",
      options: ["Briefcase", "Jump", "Waving", "Salute"],
    },
  });
  return (
    <>
      <Environment preset="sunset" />
      <group position-y={-1} >
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar animation={animation} />

        {/* <ambientLight intensity={0.9} /> */}
      </group>
    </>
  );
};
