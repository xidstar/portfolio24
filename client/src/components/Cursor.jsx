import { useEffect, useState, useRef } from 'react';
import { useSnapshot } from "valtio";

import state from "../store";

const Cursor = () => {
const snap = useSnapshot(state);
  const CURSOR_SPEED = 0.16;

  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;

  const cursorOutline = useRef();
  const [hoverButton, setHoverButton] = useState(false)

  const animate = () => {
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;

    outlineX = outlineX + distX * CURSOR_SPEED;
    outlineY = outlineY + distY * CURSOR_SPEED;

    cursorOutline.current.style.left = `${outlineX}px`;
    cursorOutline.current.style.top = `${outlineY}px`;
    requestAnimationFrame(animate);

  }
  
  useEffect(() => {
    const mouseEventsListener = document.addEventListener(
      "mousemove", 
      function (event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
      }
    );
    const animateEvent = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", mouseEventsListener);
      cancelAnimationFrame(animateEvent)
    }
  })

  // useEffect(() => {
  //   const mouseEventsListener = document.addEventListener(
  //     "mouseover",
  //     function (e) {
  //       if(
  //         e.target.tagName.toLowerCase() === "button" ||
  //         //check is parent a button
  //         e.target.parentElement.tagName.toLowerCase() === "button" ||
  //         //check is input or textarea
  //         e.target.tagName.toLowerCase() === "input" ||
  //         e.target.tagName.toLowerCase() === "teatarea"
          
  //       ) {
  //         setHoverButton(true);
  //       } else {
  //         setHoverButton(false);
  //       }
  //     }
  //   );

  //   return () => {
  //     document.removeEventListener("mouseover", mouseEventsListener);
  //   };
  // })

  return (
    <>
      <div
        className={`z-50 fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform border-solid border-2 w-10 h-10 ${
          snap.intro || snap.about ? "border-slate-700" : "border-slate-400"
        } ${snap.isMobile ? "hidden" : ""}`}
        ref={cursorOutline}
      ></div>
    </>
  );
}

export default Cursor