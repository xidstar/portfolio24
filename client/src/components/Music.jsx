import React, { useEffect, useRef } from "react";
import {
  PiSpeakerSimpleHighFill,
  PiSpeakerSimpleSlashFill,
} from "react-icons/pi";

import { useSnapshot } from "valtio";

import state from "../store";

const Music = () => {
  const snap = useSnapshot(state);
  const audioRef = useRef(null);

 

  // Set the default volume %
  useEffect(() => { 
    if (snap.isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    if (snap.intro) {
      audioRef.current.volume = 0.15;
    } else {
      audioRef.current.volume = 0.06;
    }
  }, [snap.intro, snap.isPlaying]);

  const playPauseHandler = () => {
    state.isPlaying = !snap.isPlaying;
  };

  return (
    <div className="absolute right-14 md:right-20 text-3xl">
      <button onClick={playPauseHandler}>
        {snap.isPlaying ? (
          <PiSpeakerSimpleHighFill />
        ) : (
          <PiSpeakerSimpleSlashFill />
        )}
      </button>
      <audio ref={audioRef} src="/audio/pianos.mp3" loop />
    </div>
  );
};

export default Music;
