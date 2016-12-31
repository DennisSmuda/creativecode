const world = new WHS.World({
  // stats: "fps", // fps, ms, mb or false if not need.
  autoresize: {
    delay: 1
  },

  gravity: { // Physic gravity.
      x: 0,
      y: 0,
      z: 0
  },

  camera: {
    position: [10, 10, 10]
  },

  rendering: {
    background: {
      color: 0x171717
    },

    renderer: {
      antialias: true
    }
  },

  container: document.body
});

const sphere = new WHS.Icosahedron({ // Create sphere comonent.
  geometry: {
    radius: 5,
    detail: 1,
  },

  mass: 10, // Mass of physics object.

  material: {
    color: 0xf19111,
    kind: 'phong',
    shading: THREE.FlatShading
  },

  position: {
    x: 0,
    y: 0,
    z: 0
  }
});


const plane = new WHS.Plane({
  geometry: {
    width: 100,
    height: 100
  },

  mass: 0,

  material: {
    color: 0xff342e,
    kind: 'phong'
  },

  position: [0, -10, 0],

  rotation: {
    x: - Math.PI / 2
  }
});

new WHS.PointLight({
  light: {
    intensity: 0.8,
  },

  shadowmap: {
    fov: 50
  },

  position: {
    z: 10,
    y: 10
  }
}).addTo(world);

new WHS.AmbientLight({
  light: {
    intensity: 0.4
  }
}).addTo(world);

sphere.addTo(world);
// plane.addTo(world);

new WHS.Loop(() => {
  sphere.rotation.y += 0.02;
  // sphere.rotation.z -= 0.002;
  sphere.rotation.x += 0.003;
}).start(world);

world.start(); // Start animations and physics simulation.
world.setControls(new WHS.OrbitControls());
