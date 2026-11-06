import { uniform } from 'three/tsl'
import { AmbientLight, PointLight } from 'three/webgpu'

const MAX_DECAY = 4

export const pointLight = new PointLight('#e1ded1', 2.35, 0, 1)
pointLight.position.set(1.2, 0.8, 0.9)
Object.defineProperty(pointLight.userData, 'radius', {
  get: () => MAX_DECAY - pointLight.decay,
  set: (radius) => {
    pointLight.decay = MAX_DECAY - radius
  },
})

export const ambientLight = new AmbientLight('#ffffff', 0.3)

export const uLightPosition = uniform(pointLight.position)

export function setupLight(scene, camera, containerElement) {
  scene.add(pointLight, ambientLight)

  let targetX = 0
  let targetY = 0
  let isIdle = true
  let lastMoveTime = performance.now()

  const handlePointerMove = (event) => {
    if (!containerElement) return
    const rect = containerElement.getBoundingClientRect()
    
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    
    const ndcX = (x / rect.width) * 2 - 1
    const ndcY = -(y / rect.height) * 2 + 1

    targetX = ndcX * camera.right
    targetY = ndcY * camera.top
    isIdle = false
    lastMoveTime = performance.now()
  }

  window.addEventListener('pointermove', handlePointerMove)

  return {
    cleanup: () => {
      window.removeEventListener('pointermove', handlePointerMove)
    },
    update: (time) => {
      if (time - lastMoveTime > 2000) {
        isIdle = true
      }

      if (isIdle) {
        const t = time * 0.001
        targetX = Math.sin(t * 0.8) * (camera.right * 0.7)
        targetY = Math.sin(t * 1.6) * (camera.top * 0.5)
      }

      pointLight.position.x += (targetX - pointLight.position.x) * 0.05
      pointLight.position.y += (targetY - pointLight.position.y) * 0.05
    }
  }
}
