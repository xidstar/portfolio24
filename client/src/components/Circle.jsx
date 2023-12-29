import React from 'react'

const Circle = () => {
  const dash = {
      fill: 'none',
      stroke: '#000',
      strokeWidth: 3.8054,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
  }

  return (
    <svg
      id="Circle"
      className="svg-stroke absolute w-60 -left-10"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 203.29 135.53"
      // style={{enableBackground:new 0 0 203.29 135.53}}
      xmlSpace="preserve"
    >
      <path
        className="dash dash-2"
        d="M125.17,47.17c-14.06-5.91-95.6-8.68-95.6,24.4c0,35.93,137.51,33.84,142.56,4.22
        c2.16-12.68-18.65-22.17-23.46-23.54"
      />
    </svg>
  );
}

export default Circle