/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import * as THREE from "three";
import { useSnapshot } from "valtio";
import {motion} from "framer-motion-3d";

import state from "../store";

export function Avatar(props) {
  const snap = useSnapshot(state);

  const {animation} = props;

  let { cursorFollow } = useControls({
    cursorFollow: false,
  });

  const group = useRef();
  const { nodes, materials } = useGLTF("models/65551cc6f1a79ed2ebc2c565.glb");

  const {animations: jumpAnimation} = useFBX("animations/Jump.fbx");
  const {animations: wavingAnimation} = useFBX("animations/Waving.fbx");
  const {animations: saluteAnimation} = useFBX("animations/Salute.fbx");
  const { animations: briefcaseAnimation } = useFBX("animations/Briefcase Idle.fbx");
  const { animations: powAnimation } = useFBX("animations/Hands Forward Gesture.fbx");
  
  jumpAnimation[0].name = "Jump";
  wavingAnimation[0].name = "Waving";
  saluteAnimation[0].name = "Salute";
  briefcaseAnimation[0].name = "Briefcase";
  powAnimation[0].name = "Pow";

  const { actions } = useAnimations(
    [
      briefcaseAnimation[0],
      jumpAnimation[0],
      wavingAnimation[0],
      saluteAnimation[0],
      powAnimation[0]
    ],
    group
  );

  const XPosition = () => {
    // if(snap.intro) {
    //   return 0
    // }
    if (snap.about || snap.intro) {
      return 0.5
    }
    else if (snap.projects || snap.contact) {
      return 1.2;
    }
  }

  useFrame((state) => {
    if(cursorFollow) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
      group.current.getObjectByName("Spine2").lookAt(target);
    }
  })

  useEffect(() => {
    if(snap.intro) {
      cursorFollow = true;
    }
    if(snap.isMenuOpen) {
      cursorFollow = false;
    }

    if (animation === "Jump") {
      actions[animation].setLoop(THREE.LoopOnce).clampWhenFinished = true;
    } 
    else if (animation === "Salute") {
      actions[animation].setLoop(THREE.LoopRepeat, 2).clampWhenFinished = true;
    }
    else if (animation === "Waving") {
      actions[animation].setLoop(THREE.LoopRepeat, 3).clampWhenFinished = true;
    }
    
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeOut(0.5);
  
    }
  }, [animation]);

  return (
    <group {...props} ref={group} dispose={null}>
      <motion.group
        rotation-x={-Math.PI / 2}
        animate={{
          x: XPosition(),
        }}
      >
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
      </motion.group>
    </group>
  );
}

useGLTF.preload("models/65551cc6f1a79ed2ebc2c565.glb");
