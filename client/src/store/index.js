import { proxy } from "valtio";

const state = proxy({
  intro: true,
  about: false,
  projects: false,
  contact: false,
  colors: ['#e69d00', '#e69cd8', '#8952bf', '#353934'],
  isLogo: false
});

export default state;