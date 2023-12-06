import { proxy } from "valtio";

const state = proxy({
  intro: true,
  about: false,
  projects: false,
  contact: false,
  colors: ['#ffa441', '#e99cc3', '#8952bf', '#353934'],
  isLogo: false,
  isMenuOpen: false,
  carouselWidth: 0
});

export default state;