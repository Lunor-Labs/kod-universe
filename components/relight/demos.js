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
    id: 'art',
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
    }
  },
  {
    id: 'merch',
    map: '/textures/merch-new.webp',
    depth: '/textures/merch-new-depth.webp',
    setUniforms() {
      depthSmoothing.percent = 0.4
      uDisplacementScale.value = 1.3
      uNormalScale.value = 2.4
      uDetailScale.value = 0.4
      uShadowIntensity.value = 0.75
      uShadowSoftness.value = 0.22
      pointLight.color.set('#fae8d4')
      pointLight.intensity = 5.5
      pointLight.decay = 2.0
      pointLight.position.z = 1.1
      ambientLight.intensity = 0.15
    },
  },
  {
    id: 'drops',
    map: '/textures/art-new.webp',
    depth: '/textures/art-new-depth.webp',
    setUniforms() {
      depthSmoothing.percent = 0.5
      uDisplacementScale.value = 1.3
      uNormalScale.value = 2.2
      uDetailScale.value = 0.5
      uShadowSoftness.value = 0.2
      pointLight.color.set('#ffe6cc')
      pointLight.intensity = 4.5
      pointLight.decay = 2.0
      pointLight.position.z = 1.05
      ambientLight.intensity = 0.25
    }
  }
];

export function setupDemo(index = 0) {
  const demo = DEMOS_LIST[index % DEMOS_LIST.length];
  demo.setUniforms?.();
  return demo;
}
