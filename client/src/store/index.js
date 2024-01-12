import { proxy } from "valtio";

const state = proxy({
  loading: true,
  intro: false,
  about: false,
  projects: false,
  contact: false,
  colors: ['#ffa441', '#bc8e96', '#8952bf', '#353934'],
  isLogo: false,
  isMenuOpen: false,
  isVisible: false,
  isMobile: 0,
  isPlaying: true,
});

export default state;