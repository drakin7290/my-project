import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: '/customize-clothes-3d/threejs.png',
    fullDecal: '/customize-clothes-3d/threejs.png'
});

export default state;