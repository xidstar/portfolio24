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
    if (snap.intro) {
      audioRef.current.volume = 0.1;
    } else {
      audioRef.current.volume = 0.03;
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
