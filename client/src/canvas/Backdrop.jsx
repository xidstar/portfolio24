import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight, ContactShadows } from '@react-three/drei'

const Backdrop = () => {
  const shadows = useRef()
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={40}
      alphaTest={0.85}
      scale={1.5}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 1, -0.14]}
      blur={5}
      far={10}
      resolution={256}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
}

export default Backdrop