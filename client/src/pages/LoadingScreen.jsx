import { useProgress } from '@react-three/drei';
import {useSnapshot} from 'valtio';

import state from '../store';
import { AnimatePresence } from 'framer-motion';

import { CustomButton } from '../components';

const LoadingScreen = ({onStarted}) => {
  const {progress} = useProgress();
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.loading && (
        <>
          <div
            className={`loadingScreen ${snap.started ? "loading-started" : ""}`}
          >
            <p>Loading...</p>
            <CustomButton
              type=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Explore"
              title="Intro"
              handleClick={() => (
                (state.loading = false), (state.intro = true)
              )}
              customStyles="w-fit min-w-[150px] px-5 py-2.5 font-bold text-lg"
            />
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen