<template>
  <div class="container"></div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export default {
  props: {
    gltfFile: String,
  },
  data() {
    return {};
  },
  methods: {
    init() {
      let container = document.querySelector(".container");

      //Scene
      this.scene = new THREE.Scene();

      //Camera
      this.camera = new THREE.PerspectiveCamera(10, 1.93, 0.5, 1000);
      this.camera.position.z = 70;
      this.camera.position.y = 30;
      this.camera.position.x = 15;

      //render
      this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      this.renderer.setSize(1160, 600);
      container.appendChild(this.renderer.domElement);

      //OrbitControls
      const controls = new OrbitControls(this.camera, this.renderer.domElement);
      controls.update();
      controls.enableDamping = true;
      controls.minDistance = 30;
      controls.maxDistance = 70;

      //light
     const ambient = new THREE.AmbientLight(0xffffff, 1.3);
      this.scene.add(ambient);

      const light = new THREE.HemisphereLight(0xffffff, 0x000000, 0.5);
      this.scene.add(light);
      
      let light1 = new THREE.PointLight(0xbfbfbf, 0.3);
      light1.position.set(0, 100, 0);
      this.scene.add(light1);

      //GLTFLoader
      var loader = new GLTFLoader();
      loader.load(
        this.gltfFile,
        (gltf) => {
          this.scene.add(gltf.scene);
        },
        function (error) {
          console.log("Error: " + error);
        }
      );

      window.addEventListener("resize", onWindowResize, false);

      function onWindowResize() {
        this.camera.aspect = 1.93;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(1160, 600);
      }
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
};
</script>

<style lang='scss' scoped>
.container {
  canvas {
    margin-right: 50%;
  }
  position: absolute;
}
</style>