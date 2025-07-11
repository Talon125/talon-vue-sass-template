<template>
  <div id="background" ref="ribbonContainer"></div>
</template>

<script setup>
/*
 * RetroArch Menu Shader Pipeline Ribbon
 * Port for THREE.js
 * https://github.com/libretro/RetroArch
 */

import { ref, onMounted, onUnmounted } from 'vue'
// import * as THREE from 'three'

let scene, camera, renderer, ribbon

let ribbonContainer = ref(null)

const init = () => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 10000)
  camera.position.z = 2

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  ribbonContainer.value.appendChild(renderer.domElement)

  ribbon = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1, 128, 128),
    new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 1.0 }
      },
      vertexShader: `
        varying vec3 vEC;
        uniform float time;

        float iqhash(float n) {
          return fract(sin(n) * 43758.5453);
        }

        float noise(vec3 x) {
          vec3 p = floor(x);
          vec3 f = fract(x);
          f = f * f * (3.0 - 2.0 * f);
          float n = p.x + p.y * 57.0 + 113.0 * p.z;
          return mix(mix(mix(iqhash(n), iqhash(n + 1.0), f.x),
                     mix(iqhash(n + 57.0), iqhash(n + 58.0), f.x), f.y),
                     mix(mix(iqhash(n + 113.0), iqhash(n + 114.0), f.x),
                     mix(iqhash(n + 170.0), iqhash(n + 171.0), f.x), f.y), f.z);
        }

        float xmb_noise2(vec3 x) {
          return cos(x.z * 4.0) * cos(x.z + time / 10.0 + x.x);
        }

        void main() {
          vec4 pos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vec3 v = vec3(pos.x, 0.0, pos.y);
          vec3 v2 = v;
          vec3 v3 = v;

          v.y = xmb_noise2(v2) / 8.0;

          v3.x -= time / 5.0;
          v3.x /= 4.0;

          v3.z -= time / 10.0;
          v3.y -= time / 100.0;

          v.z -= noise(v3 * 7.0) / 15.0;
          v.y -= noise(v3 * 7.0) / 15.0 + cos(v.x * 2.0 - time / 2.0) / 5.0 - 0.3;

          vEC = v;
          gl_Position = vec4(v, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vEC;

        void main()
        {
           const vec3 up = vec3(0.0, 0.0, 1.0);
           vec3 x = dFdx(vEC);
           vec3 y = dFdy(vEC);
           vec3 normal = normalize(cross(x, y));
           float c = 1.0 - dot(normal, up);
           c = (1.0 - cos(c * c)) / 3.0;
           gl_FragColor = vec4(1.0, 1.0, 1.0, c * 1.5);
        }
      `,
      extensions: {
        derivatives: true,
        fragDepth: false,
        drawBuffers: false,
        shaderTextureLOD: false
      },
      side: THREE.DoubleSide,
      transparent: true,
      depthTest: false
    })
  )

  scene.add(ribbon)

  resize()
  window.addEventListener('resize', resize)
}

const resize = () => {
  const { offsetWidth, offsetHeight } = ribbonContainer.value

  renderer.setSize(offsetWidth, offsetHeight * 1.5)
  renderer.setPixelRatio(window.devicePixelRatio)

  camera.aspect = offsetWidth / offsetHeight
  camera.updateProjectionMatrix()

  ribbon.scale.set(camera.aspect * 1.55, 0.75, 1)
}

let previousTime = 0

const animate = (currentTime) => {
  // ribbon.material.uniforms.time.value += 0.01
  const deltaTime = (currentTime - previousTime) / 1000
  previousTime = currentTime

  ribbon.material.uniforms.time.value += deltaTime * 0.5

  renderer.render(scene, camera)
  // requestAnimationFrame(() => animate())
  requestAnimationFrame(animate)
}

onMounted(() => {
  init()
  animate(0)
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
})
</script>

<style lang="scss" scoped>
#background {
  position: fixed;
  z-index: -1;
  background: linear-gradient(to top, hsl(206deg 50% 95%), hsl(206deg 100% 90%));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
}
</style>
