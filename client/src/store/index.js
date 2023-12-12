import { proxy } from "valtio";

const state = proxy({
  intro: true,
  about: false,
  projects: false,
  contact: false,
  colors: ['#ffa441', '#bc8e96', '#8952bf', '#353934'],
  isLogo: false,
  isMenuOpen: false,
});

export default state;