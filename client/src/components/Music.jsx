import React, { useState, useEffect, useRef } from "react";
import {
  PiSpeakerSimpleHighFill,
  PiSpeakerSimpleSlashFill,
} from "react-icons/pi";
import { useSnapshot } from "valtio";

import state from "../store";

const Music = () => {
  const snap = useSnapshot(state);
  const audioRef = useRef(null);


  useEffect(() => {
    // Set the default volume to 10%
    if (snap.intro && snap.isPlaying) {
      audioRef.current.volume = 0.10;
      audioRef.current.play();
    } else {
      audioRef.current.volume = 0;
    }
  }, [snap.intro, snap.isPlaying]);

  const playPauseHandler = () => {
    if (snap.isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    state.isPlaying = !snap.isPlaying;
  };

  return (
    <div className="absolute right-20 text-3xl">
      <button onClick={playPauseHandler}>
        {snap.isPlaying && snap.intro ? <PiSpeakerSimpleHighFill /> : <PiSpeakerSimpleSlashFill />}
      </button>
      <audio ref={audioRef} src="/pianos-by-jtwayne-7-174717.mp3" loop />
    </div>
  );
};

export default Music;
