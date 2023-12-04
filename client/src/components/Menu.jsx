import React, {useState} from 'react'
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { useSnapshot } from "valtio";
import state from '../store';

const Menu = () => {
  const snap = useSnapshot(state);
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        className={`text-[2.5rem] z-30 top-7 right-10 absolute`}
      >
        {menuOpen ? <VscChromeClose /> : <FiMenu />}
      </button>
      <div
        className={`absolute w-96 h-full top-0 right-0 z-20 bg-white transition-all flex justify-center items-center ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex gap-10 flex-col text-3xl">
          <MenuButton
            label="Home"
            onClick={() => (
              (state.intro = true),
              (state.about = false),
              (state.projects = false),
              (state.contact = false),
              setMenuOpen(!menuOpen)
            )}
          />
          <MenuButton
            label="Bio"
            onClick={() => (
              (state.intro = false),
              (state.about = true),
              (state.projects = false),
              (state.contact = false),
              setMenuOpen(!menuOpen)
            )}
          />
          <MenuButton
            label="Projects"
            onClick={() => (
              (state.intro = false),
              (state.about = false),
              (state.projects = true),
              (state.contact = false),
              setMenuOpen(!menuOpen)
            )}
          />
          <MenuButton
            label="Contact"
            onClick={() => (
              (state.intro = false),
              (state.about = false),
              (state.projects = false),
              (state.contact = true),
              setMenuOpen(!menuOpen)
            )}
          />
        </div>
      </div>
    </>
  );
}

const MenuButton = (props) => {
  const {label, onClick} = props

  return (
    <button onClick={onClick} className="text-left font-bold">
      {label}
    </button>
  )
}

export default Menu