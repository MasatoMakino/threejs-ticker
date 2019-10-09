import { Common } from "./Common";
import { Fog } from "three";
import { ThreeTicker, ThreeTickerEventType } from "../bin";

export class Demo {
  constructor() {
    const W = 640;
    const H = 480;

    const scene = Common.initScene();
    scene.fog = new Fog(0x000000, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(scene, W, H);
    const renderer = Common.initRenderer(W, H, { antialias: false });
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);

    ThreeTicker.addEventListener(ThreeTickerEventType.onBeforeTick, e => {
      console.log(`${e.type} : ${e.delta}, ${e.timestamp}`);
    });

    ThreeTicker.addEventListener(ThreeTickerEventType.tick, e => {
      renderer.render(scene, camera);
      console.log(`${e.type} : ${e.delta}, ${e.timestamp}`);
    });

    ThreeTicker.addEventListener(ThreeTickerEventType.onAfterTick, e => {
      console.log(`${e.type} : ${e.delta}, ${e.timestamp}`);
    });
  }
}

window.onload = () => {
  const demo = new Demo();
};
