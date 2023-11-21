import { proxy } from "valtio";

const state = proxy({
  intro: true,
  about: false,
  projects: false,
  contact: false,
  color: '#efbd48',
});

export default state;