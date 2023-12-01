import { proxy } from "valtio";

const state = proxy({
  intro: true,
  about: false,
  projects: false,
  contact: false,
  colors: ['#bfb467', '#e69cd8', '#8952bf', '#353934']
});

export default state;