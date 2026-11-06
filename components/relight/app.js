import {
  AgXToneMapping,
  Color,
  OrthographicCamera,
  Scene,
  WebGPURenderer,
} from 'three/webgpu'
import { setupDemo } from './demos.js'
import { setupLight } from './effect/light.js'
import { createPlane } from './effect/plane.js'
import { setupTextures } from './effect/textures.js'

const MAX_PIXEL_RATIO = 2
const VIEW_HEIGHT = 4

export async function initRelight(containerElement, initialDemoIndex = 0) {
  const demo = setupDemo(initialDemoIndex)

  const renderer = new WebGPURenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, MAX_PIXEL_RATIO))
  renderer.setSize(containerElement.clientWidth, containerElement.clientHeight)
  renderer.toneMapping = AgXToneMapping
  // inspector removed

  containerElement.append(renderer.domElement)
  await renderer.init()

  await setupTextures(demo)

  const scene = new Scene()
  scene.background = null

  const camera = new OrthographicCamera()
  camera.position.set(0, 0, 5)

  const lightController = setupLight(scene, camera, containerElement)

  const plane = createPlane()
  scene.add(plane)

  function onResize() {
    const aspect = containerElement.clientWidth / containerElement.clientHeight

    camera.top = VIEW_HEIGHT * 0.5
    camera.bottom = -camera.top
    camera.right = camera.top * aspect
    camera.left = -camera.right
    camera.updateProjectionMatrix()
    plane.scale.set(VIEW_HEIGHT * aspect, VIEW_HEIGHT, 1)
  }

  onResize()

  const handleResize = () => {
    renderer.setSize(containerElement.clientWidth, containerElement.clientHeight)
    onResize()
  }

  window.addEventListener('resize', handleResize)

  renderer.setAnimationLoop(() => {
    lightController.update(performance.now())
    renderer.render(scene, camera)
  })

  return {
    cleanup: () => {
      window.removeEventListener('resize', handleResize)
      lightController.cleanup()
      renderer.setAnimationLoop(null)
      renderer.dispose()
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement)
      }
    },
    setDemo: async (index) => {
      const newDemo = setupDemo(index)
      await setupTextures(newDemo)
    }
  }
}
