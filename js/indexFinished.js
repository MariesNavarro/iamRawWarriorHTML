var rulesAndroid  = document.createElement('LINK');
rulesAndroid.rel  = 'stylesheet';
rulesAndroid.type = 'text/css';
rulesAndroid.href = "css/androidRules.css";
var linkDomMaster  = document.createElement('LINK');
linkDomMaster.rel  = 'stylesheet';
linkDomMaster.type = 'text/css';
linkDomMaster.href = "css/master.css";
var pixiContainer = _('pixiContainer'),
    svgView = __('svgView'),
    blockLandscapeAndroid = _('blockLandscapeAndroid'),
    frameBorder = __('frameBorder'),
    triggerBtn = __('triggerBtn'),
    diveDeep = _('diveDeep');
var introElements = [
  introLogotipo = _('introLogotipo'),
  tituloIntro = _('tituloIntro'),
  textIntro = _('textIntro'),
  introBtnA = _('introBtnA'),
  introBtnB = _('introBtnB')
];
var lengthBorder = frameBorder[0].getTotalLength();
for(var i =0; i< frameBorder.length; i++){
  frameBorder[i].style.strokeDasharray = lengthBorder + ' ' + lengthBorder;
  frameBorder[i].style.strokeDashoffset = lengthBorder;
}


var blockHeight = _('blockHeight');

if(checkMobileIndex){
  headDom.appendChild(linkDomMaster);
  setMobileButtons();
  eyeDesktop();
  if (bowser.android){
      headDom.appendChild(rulesAndroid);
  }
  if(window.orientation == 90 || window.orientation == -90){ indexLandscape(); }
} else {
  headDom.appendChild(linkDomMaster);
   eyeDesktop();
}


function eyeDesktop(){
  var app = new PIXI.Application(400, 400,{antialias: false, transparent: true, resolution: 1});
  pixiContainer.appendChild(app.view);
  PIXI.loader
  .add('img/pixi/ojo/ojo_desktop_1.json')
  .add('img/pixi/ojo/ojo_desktop_2.json')
  .add('img/pixi/ojo/ojo_desktop_3.json')
  .add('img/pixi/ojo/ojo_desktop_4.json')
  .on('progress', function(loader, loadedResource){
    var num = Math.round(loader.progress);
    percentage.innerHTML = num + '%';
    if(num>99){
      loading.style.opacity = 0;
      setTimeout(function(){
        loading.style.display = "none";
        animationIntro();
      },1000);
    }
  })
  .load(onAssetsLoaded);
  function onAssetsLoaded(){
    var frames = [];
    for (var i = 0; i < 99; i++) {
        frames.push(PIXI.Texture.fromFrame('Ojo' + i + '.png'));
    }
    var anim = new PIXI.extras.AnimatedSprite(frames);
    anim.width = app.renderer.width;
		anim.height = app.renderer.height;
    anim.animationSpeed = 0.16;
    anim.play();
    app.stage.addChild(anim);
  }
}


function animationIntro(){
  setTimeout(function(){
    for(var i =0; i< introElements.length; i++){
      introElements[i].classList.add('transitionClass');
    }
    frameBorder[0].classList.add('transitionClass');
    frameBorder[1].classList.add('transitionClass');
  },500);
  setTimeout(function(){  introElements[0].style.opacity= "1"; },550);
  setTimeout(function(){  introElements[1].style.opacity= "1"; },1500);
  setTimeout(function(){  introElements[2].style.opacity= "1"; },2500);
  setTimeout(function(){
    introElements[3].style.opacity= "1";
    frameBorder[0].style.strokeDashoffset = 0;
  },3500);
  setTimeout(function(){
    introElements[4].style.opacity= "1";
    frameBorder[1].style.strokeDashoffset = 0;
  },4500);
}


function hoverButton(state){
  switch (state) {
  case 1:
    imgBtnA.setAttribute('src', 'img/icons/english_h.svg');
  break;
  case 2:
    imgBtnA.setAttribute('src', 'img/icons/english.svg');
  break;
  case 3:
    imgBtnB.setAttribute('src', 'img/icons/espanol_h.svg');
  break;
  case 4:
    imgBtnB.setAttribute('src', 'img/icons/espanol.svg');
  break;
  case 5:
    imgBtnA.setAttribute('src', 'img/icons/more_mobile_h.svg');
  break;
  case 6:
  imgBtnA.setAttribute('src', 'img/icons/more_mobile.svg');
  break;
  case 7:
  imgBtnB.setAttribute('src', 'img/icons/subscribe_mobile_h.svg');
  break;
  case 8:
  imgBtnB.setAttribute('src', 'img/icons/subscribe_mobile.svg');
  break;

  case 9:
  imgBtnA.setAttribute('src', 'img/icons/want_h.svg');
  break;
  case 10:
  imgBtnA.setAttribute('src', 'img/icons/want.svg');
  break;
  case 11:
  imgBtnB.setAttribute('src', 'img/icons/suscribe_h.svg');
  break;
  case 12:
  imgBtnB.setAttribute('src', 'img/icons/suscribe.svg');
  break;
  }
}



function hoverSuscribe(c){
  switch (c) {
  }
}

function setMobileButtons(){
  imgBtnA.setAttribute('src', 'img/icons/more_mobile.svg');
  imgBtnB.setAttribute('src', 'img/icons/subscribe_mobile.svg');
  for (var i = 0; i < svgView.length; i++) {
    svgView[i].setAttribute('viewBox', '0 0 119.4 78.6');
  }
  for (var i = 0; i < triggerBtn.length; i++) {
    triggerBtn[i].setAttribute('onmouseover', ' ');
    triggerBtn[i].setAttribute('onmouseout', ' ');
  }
  triggerBtn[0].setAttribute('ontouchstart', 'hoverButton(5)');
  triggerBtn[0].setAttribute('ontouchend', 'hoverButton(6)');
  triggerBtn[1].setAttribute('ontouchstart', 'hoverButton(7)');
  triggerBtn[1].setAttribute('ontouchend', 'hoverButton(8)');
  frameBorder[0].setAttribute('d', 'M22.2,3.1h80.3v36.2H22.2V3.1z');
  frameBorder[1].setAttribute('d', 'M19.5,3.1v36.2h80.3V3.1H19.5z')
}





function indexLandscape(){
  pixiContainer.style.width = "150px";
  pixiContainer.style.height = "150px";
  pixiContainer.style.margin = "0 auto 0 auto;"
  pixiContainer.style.marginTop = "1%";
  textIntro.style.fontSize = "1rem";
}


function onWindowOrientation(event){
  if(window.orientation == 90 || window.orientation == -90){
    blockLandscapeAndroid.classList.remove('hideBlockLand');
    blockLandscapeAndroid.classList.add('showBlockLand');
    if (bowser.android) {
        blockLandscapeAndroid.classList.remove('hideBlockLand');
        blockLandscapeAndroid.classList.add('showBlockLand');
    } else {
      pixiContainer.style.width = "150px";
      pixiContainer.style.height = "150px";
      pixiContainer.style.margin = "0 auto 0 auto;"
      pixiContainer.style.marginTop = "1%";
      textIntro.style.fontSize = "1rem";
      gradientTexture.image.width = window.innerWidth;
      gradientTexture.needsUpdate = true;
      gradientGeometry.groupsNeedUpdate = true;
      rot = particlesBack.rotation.y = 0.0001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      camera.lookAt( scene.position );
    }
  } else {
    blockLandscapeAndroid.classList.remove('showBlockLand');
    blockLandscapeAndroid.classList.add('hideBlockLand');
    if (bowser.android) {
      blockLandscapeAndroid.classList.remove('showBlockLand');
      blockLandscapeAndroid.classList.add('hideBlockLand');
    } else {
      pixiContainer.style.margin = "13% auto 0 auto;"
      pixiContainer.style.marginTop = "13%";
      pixiContainer.style.width = "250px";
      pixiContainer.style.height = "250px";
      textIntro.style.fontSize = "1.1rem";
      gradientTexture.image.width = window.innerWidth;
      gradientTexture.needsUpdate = true;
      gradientGeometry.groupsNeedUpdate = true;
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / (window.innerHeight/1.01);
      camera.updateProjectionMatrix();
      camera.lookAt( scene.position );
    }
  }
}

function callMesh(){}
function renderMesh(){}
function callTheElements(){}


function onWindowResize(event){
  if (window.innerHeight < 480) {
    blockHeight.classList.remove('blockHeightHide');
    blockHeight.classList.add('blockHeightShow');
  } else {
    blockHeight.classList.remove('blockHeightShow');
    blockHeight.classList.add('blockHeightHide');
  }
  var size = document.getElementById('size').innerHTML = "Width: " + innerWidth + " Height: " + innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  camera.lookAt( scene.position );
  composer.reset();
  effectFocus.uniforms[ "screenWidth" ].value = window.innerWidth + borderFocus;
  effectFocus.uniforms[ "screenHeight" ].value = window.innerHeight +  borderFocus;
}
