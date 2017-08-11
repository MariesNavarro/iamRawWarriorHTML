var w = window.innerWidth;
var h = window.innerHeight;
var pixDevice = window.devicePixelRatio;
var borderFocus = 1500;
var scene, camera, renderer, particlesBack, gradientGeometry, gradientTexture, gradientMaterial, gradientMesh;
var p, loader, mesh, parent;
var meshes = [], clonemeshes = [];
var clock = new THREE.Clock();
var main = _('main'),
    loading = _('loading');
var planetas, planetasMesh = [];
/* Detect device */
if(checkMobileIndex){
  window.onload = function(){
    console.log("Mobile");
    indexThree("m");
  }
 } else {
   window.onload = function(){
     headDom.appendChild(linkDomMaster);
     console.log("Desktop");
     indexThree("d");
   }
}

/* Init Three Js */
function indexThree(e){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(20, w/h, 1, 50000);
  camera.position.set(0,0,800);
  camera.lookAt(scene.position);
  if(Detector.webgl){
  	 renderer = new THREE.WebGLRenderer({antialias:false});
     renderer.setSize(w, h);
     renderer.setClearColor(0x03161e);
     renderer.setPixelRatio(pixDevice);
     renderer.autoClear = false;
     renderer.sortObjects = false;
     main.appendChild( renderer.domElement );
  } else {
    console.log("The browser doesn't support render WEBGL");
    renderer.setSize(w, h);
   	renderer = new THREE.CanvasRenderer();
    renderer.setClearColor(0x03161e);
    renderer.setPixelRatio(pixDevice);
    renderer.autoClear = false;
    renderer.sortObjects = false;
    main.appendChild( renderer.domElement );
  }
  /* Mesh */
  parent = new THREE.Object3D();
  /* Planetas */
  planetas = new THREE.Object3D();
  // callTheElements();
   scene.add( planetas );
  /* Gradient */
  gradientGeometry = new THREE.PlaneGeometry( w, h );
  gradientTexture = new THREE.Texture( generateTexture(window.innerWidth, window.innerHeight) );
  if(e == "d"){
      callMesh("d");
    particlesBack = createParticleSystem("des");
    scene.add(particlesBack);
    window.addEventListener('resize', onWindowResize, false);
  }
  if(e == "m"){
    callMesh("m");
    particlesBack = createParticleSystem("mob");
    scene.add(particlesBack);
    window.addEventListener('orientationchange', onWindowOrientation, false);
  }
  gradientTexture.needsUpdate = true;
  gradientMaterial = new THREE.MeshBasicMaterial( { map: gradientTexture, opacity: 1, transparent: true } );
  gradientMesh = new THREE.Mesh( gradientGeometry, gradientMaterial );
  gradientMesh.position.set(0, 0, -300);
  scene.add( gradientMesh );
  /* shader */
  var renderModel = new THREE.RenderPass( scene, camera );
  var effectBloom = new THREE.BloomPass( 0.5 );

  effectFocus = new THREE.ShaderPass(THREE.FocusShader);
  effectFocus.uniforms[ "screenWidth" ].value = w + borderFocus;
  effectFocus.uniforms[ "screenHeight" ].value = h + borderFocus;
  effectFocus.renderToScreen = true;

  composer = new THREE.EffectComposer( renderer );
  composer.addPass(renderModel);
  composer.addPass(effectBloom);
  composer.addPass(effectFocus);
  scene.add( parent );
  animateScene();
}

function generateTexture(wop,hop) {
	canvas = document.createElement( 'canvas' );
	canvas.width = wop;
	canvas.height = hop;
	var context = canvas.getContext( '2d' );
	context.rect( 0, 0, wop, hop );
  var grd = context.createRadialGradient(wop/2, hop/2, 20, wop/2, hop/2, 300);
	grd.addColorStop(0, "#0e2635");
	grd.addColorStop(1, '#000000');
	context.fillStyle = grd;
	context.fill();
	return canvas;
}

function createParticleSystem(d) {
    var particleCount = 30000;
    var particles = new THREE.Geometry();
    if(d === "mob"){
      for (var p = 0; p < particleCount; p++) {
        var x = Math.random() * w - h/2.5;
        var y = Math.random() * h - w;
        var z = Math.random() * 500;
          var particle = new THREE.Vector3(x, y, z);
          particles.vertices.push(particle);
      }
      var particleMaterial = new THREE.PointsMaterial(
        {color: 0xddcfbc,
         size: 0.5,
         transparent: false,
         opacity : 0.7
        });
    }
    if(d === "des"){
      for (var p = 0; p < particleCount; p++) {
        var x = Math.random() * (w) - (h);
        var y = Math.random() * (w) - (h);
        var z = Math.random() * (w/3) - (h/3);
          var particle = new THREE.Vector3(x, y, z);
          particles.vertices.push(particle);
      }
      var particleMaterial = new THREE.PointsMaterial(
        {color: 0xddcfbc,
         size: 1,
         transparent: false,
         opacity : 1
        });
    }

    particleSystem = new THREE.Points(particles, particleMaterial);
    particleSystem.verticesNeedUpdate = true;
    return particleSystem;
}


function animateScene(){
  requestAnimationFrame(animateScene);
  render();
}

function render(){
  var rot = particlesBack.rotation.y -= 0.0001;
  if(rot< -0.12){
    rot = particlesBack.rotation.y = 0.0001;
  }
  renderMesh();
  particleSystem.geometry.verticesNeedUpdate = true;
  renderer.clear();
  composer.render( 0.01 );
}
