import { useSnapshot } from "valtio";

import state from "../store";



export const avatarAnimation = () => {
  const snap = useSnapshot(state);

  if(snap.isMenuOpen) {
      return "Pow";
  } 
  if(snap.intro) {
      return "Waving";
  } 
  else if(snap.about) {
      return "Briefcase";
  }
  else if(snap.projects) {
      return "Jump";
  }
  else {
    return "Salute";
  }
}

export const bgText = () => {
  const snap = useSnapshot(state);
  
  if(snap.isMenuOpen) {
      return "";
  } 
  if(snap.intro) {
      return "Intro.";
  } 
  else if(snap.about) {
      return "Bio.";
  }
  else if(snap.projects) {
      return "Projects.";
  }
  else {
    return "Contact.";
  }
}

export const BgColor = () => {
  const snap = useSnapshot(state);
  let color = snap.colors[0];

  if (snap.about) {
    color = snap.colors[1]
  } else if (snap.projects) {
    color = snap.colors[2];
  } else if (snap.contact) {
    color = snap.colors[3];
  }

  return color
}

export const generateStyle = () => {
  const snap = useSnapshot(state);
  if (snap.loading) {
    return 'radial-gradient(at 20% top, #bccafe 11%, #cdb9e3 51%, #ccabfd 100%)';
  } 
  else if (snap.intro) {
    return 'radial-gradient(at 20% top, #c0f8ff 11%, #b6d0ff 51%, #d6d3ff 100%)';
  } 
  else if (snap.projects) {
    return 'radial-gradient(at 20% top, rgba(188,202,254,1) 11%, rgba(205,185,227,1) 51%, rgba(204,171,253,1) 100%)';
  } 
  else if (snap.about) {
    return 'radial-gradient(at 20% top, rgba(188,202,254,1) 11%, rgba(205,185,227,1) 51%, rgba(204,171,253,1) 100%)';
  } 
  else if (snap.contact) {
    return 'radial-gradient(at 20% top, rgba(188,202,254,1) 11%, rgba(205,185,227,1) 51%, rgba(204,171,253,1) 100%)';
  } 
};


export const getContrastingColor = (color) => {
  // Remove the '#' character if it exists
  const hex = color.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness
  return brightness > 128 ? "black" : "white";
};

