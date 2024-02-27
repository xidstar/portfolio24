import React, { useRef } from "react";
import { Environment, ContactShadows, Text } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { motion } from "framer-motion-3d";
import { framerMotionConfig } from "../config/constants";
import { easing } from "maath";

import { useSnapshot } from "valtio";
import state from "../store";
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { avatarAnimation, bgText } from "../config/helpers";

export const Experience = () => {
  const snap = useSnapshot(state);
  const group = useRef();

  const avatarScalingFactor = Math.min(Math.max(window.innerWidth / 768, 0.5), 1);
  let isMobile = window.innerWidth < 768;
  let isTablet = window.innerWidth < 1025;

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useFrame((state, delta) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    //set model rotation on mouse move
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 200, state.pointer.x / 30, 0],
      0.1,
      delta
    );
  });

  // useEffect(() => {
  //   animate(cameraPositionX, snap.about ? 3 : 0, {...framerMotionConfig});
  //   animate(cameraLookAtX, snap.about ? -1.2 : 0, {...framerMotionConfig});
  // }, [snap.about])

  useEffect(() => {
    animate(cameraPositionX, snap.isMenuOpen ? -4 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, snap.isMenuOpen ? 0 : 0, {
      ...framerMotionConfig,
    });
  }, [snap.isMenuOpen]);

  return (
    <>
      <Environment preset="sunset" />
      <motion.group
        ref={group}
        position-y={-1}
        scale={avatarScalingFactor}
        // animate={{
        //   x: snap.projects || snap.contact ? 0 : 1,
        // }}
      >
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={1.1}
          resolution={256}
          color="#000000"
        />
        <Avatar
          animation={avatarAnimation()}
          position-x={isMobile ? -0.5 : ""}
          position-y={isMobile ? 1.8 : ""}
          visible={
            (isMobile && snap.projects) || (isMobile && snap.about)
              ? snap.isVisible
              : !snap.isVisible
          }
        />
        <Text
          position={isTablet ? [0, 1.8, -5] : [1, 1.8, -5]}
          rotation={[0, 0, 0]}
          scale={isTablet ? 0.7 : 1.2}
          color={0x4202125}
          visible={isMobile ? snap.isVisible : !snap.isVisible}
          font={"fonts/Poppins-Regular.ttf"}
          // color={snap.intro || snap.projects ? 0x403e3e : 0xcccccc}
          // anchorX="center"
        >
          {bgText()}
        </Text>
      </motion.group>
    </>
  );
};
