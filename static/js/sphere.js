var scene, camera, renderer, container;
var geometry, material, sphere, directional_light;

var init = function() {
    // create scene
    scene = new THREE.Scene();

    // create camera
    camera = new THREE.PerspectiveCamera( 75, 100/100, 0.1, 1000 );
    camera.position.z = 4;

    // create renderer
    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(100, 100);
    document.body.appendChild( renderer.domElement );

    // bound renderer in div
    container = document.getElementById('canvas');
    container.appendChild(renderer.domElement);

    // create a mesh
    geometry = new THREE.SphereGeometry(1.2, 10, 10, 0, Math.PI * 2, 0, Math.PI * 2);
    material = new THREE.MeshPhongMaterial({color: "#8e9294"});
    sphere = new THREE.Mesh(geometry, material);


    // create directional light
    directional_light = new THREE.DirectionalLight(0xFFFFFF, 1);
    directional_light.position.set(100, 350, 250);
    directional_light.castShadow = true;

    // add to scene
    scene.add(sphere);
    scene.add(directional_light);
}; // init

var render = function () {
  requestAnimationFrame(render);

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  sphere.rotation.z += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}; // render

init();
render();

// https://blog.teamtreehouse.com/the-beginners-guide-to-three-js
// https://medium.com/@necsoft/three-js-101-hello-world-part-1-443207b1ebe1
