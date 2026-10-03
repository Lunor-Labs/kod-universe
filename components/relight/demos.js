import { depthSmoothing } from './effect/depth-map.js'
import { ambientLight, pointLight } from './effect/light.js'
import {
  uDetailScale,
  uDisplacementScale,
  uNormalScale,
} from './effect/nodes/normal.js'
import { uShadowIntensity, uShadowSoftness } from './effect/nodes/shadow.js'

export const DEMOS_LIST = [
  {
    id: 'drops',
    map: '/textures/mother-new.webp',
    depth: '/textures/mother-new-depth.webp',
    setUniforms() {
      depthSmoothing.percent = 0.6
      uDisplacementScale.value = 1.2
      uNormalScale.value = 2.0
      uDetailScale.value = 0.5
      uShadowSoftness.value = 0.2
      pointLight.color.set('#ffccaa') 
      pointLight.intensity = 6.0
      pointLight.decay = 2.5
      pointLight.position.z = 1.2
      ambientLight.intensity = 0.05
    },
  },
  {
    id: 'art',
    map: '/textures/art-new-depth.webp',
    depth: '/textures/art-new-depth.webp',
    setUniforms() {
      depthSmoothing.percent = 0.6
      uDisplacementScale.value = 1.2
      uNormalScale.value = 2.0
      uDetailScale.value = 0.5
      uShadowSoftness.value = 0.2
      pointLight.color.set('#ffffff') 
      pointLight.intensity = 4.0
      pointLight.decay = 2.0
      pointLight.position.z = 1.0
      ambientLight.intensity = 0.2
    }
  },
  {
    id: 'merch',
    map: '/textures/merch-new.webp',
    depth: '/textures/merch-new-depth.webp',
    setUniforms() {
      depthSmoothing.percent = 0.3
      uDisplacementScale.value = 1.2
      uNormalScale.value = 2.0
      uDetailScale.value = 0.5
      uShadowIntensity.value = 0.6
      uShadowSoftness.value = 0.3
      pointLight.color.set('#e9e2da')
      pointLight.intensity = 5.0
      pointLight.decay = 1.8
      pointLight.position.z = 1.0
      ambientLight.intensity = 0.2
    },
  }
];

export function setupDemo(index = 0) {
  const demo = DEMOS_LIST[index % DEMOS_LIST.length];
  demo.setUniforms?.();
  return demo;
}
