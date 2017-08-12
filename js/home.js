var openFoot = false;
var index;
var footerDom = document.getElementsByTagName("FOOTER")[0],
    navDom = document.getElementsByTagName("NAV")[0];
var linkDomMobile  = document.createElement('LINK');
var linkDomDesktop = document.createElement('LINK');
var linkDomMaster  = document.createElement('LINK');
linkDomMaster.rel  = 'stylesheet';
linkDomMaster.type = 'text/css';
linkDomMaster.href = "css/master.css";
linkDomMobile.rel  = 'stylesheet';
linkDomMobile.type = 'text/css';
linkDomMobile.href = "css/homeMobile.css";
linkDomDesktop.rel  = 'stylesheet';
linkDomDesktop.type = 'text/css';
linkDomDesktop.href = "css/homeDesktop.css";
var inner = _('inner'),
    subInner = _('subInner'),
    backToInner = _('backToInner'),
    menuBtn = _('menuBtn'),
    instruction = _('instruction'),
    instructionWrap = _('instructionWrap'),
    overFooterBtn = _('overFooterBtn'),
    overFooterImg = _('overFooterImg'),
    closeMenuMobile = _('closeMenuMobile'),
    switchElementsW = _('switchElementsW');
var j, jl, cm, data, vertices, vertices_tmp, vl, d, vt;
var elementDom = __('elementDom'),
    infoElementTit = __('infoElementTit'),
    infoElementLine = __('infoElementLine');

var infoJson,
    lineCosmic = __('lineCosmic'),
    svgCosmicsL = _('svgCosmicsLeft'),
    svgCosmicsR = _('svgCosmicsRight'),
    cosmicsLeft = [],
    cosmicsRight = [],
    linesLeft = [],
    linesRight = [];

function create(el){ return document.createElementNS('http://www.w3.org/2000/svg', el); }
function setSvgView(){
  var svgCosmicsW = window.innerWidth*0.35,
      svgCosmicsH = window.innerHeight*0.75;
      svgCosmicsL.setAttribute('width', svgCosmicsW);
      svgCosmicsL.setAttribute('height', svgCosmicsH);
      svgCosmicsR.setAttribute('width', svgCosmicsW);
      svgCosmicsR.setAttribute('height', svgCosmicsH);
}

setSvgView();
loadCosmicsJson();

function loadCosmicsJson(){
  var request;
  if(window.XMLHttpRequest){
  	request = new XMLHttpRequest();
  } else {
  	request = new ActiveObject("Microsoft.XMLHTTP");
  }
  request.open('GET', 'js/cosmics.json');
  request.onreadystatechange = function(){
  	if((request.status === 200) && (request.readyState === 4)){
      infoJson = JSON.parse(request.responseText);
      setCosmics();
      setLines();
      parseCosmicPos();
      if(checkMobileIndex){
        parseLinkCos("m");
      } else {
        parseLinkCos("d");
      }
  	}
  }
  request.send();
}

function createCosmic(parent){
	var g = create('g');
	g.classList.add('cosmicGroup');
	g.setAttribute('onmouseover', 'overCosmic()');
	g.setAttribute('onmouseout', 'outCosmic()');
	this.pos = function(perX, perY){
		var x = ((window.innerWidth * 0.35)*perX);
		var y = ((window.innerHeight * 0.75)*perY);
		g.setAttribute('transform', 'translate(' + x + ', ' + y + ')');
	}
  var i = create('image');
  i.classList.add('imgCosmic');
  i.setAttribute('width', '50');
  i.setAttribute('height', '50');
  i.setAttributeNS('http://www.w3.org/1999/xlink','href','img/glow.png');
  i.setAttribute('transform', 'translate(-25, -17)');
  g.appendChild(i);
  var r = create('rect');
  r.classList.add('rectCosmic');
  r.setAttribute('width', '10');
  r.setAttribute('height', '10');
  g.appendChild(r);
  var t = create('text');
  this.linkCos = function (l, i){
    var a = create('a');
    a.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l);
    a.setAttributeNS('http://www.w3.org/1999/xlink', 'target', '_blank');
    t.classList.add('textCosmic');
    t.setAttribute('x', '-5');
    t.setAttribute('y', '12');
    var textNode = document.createTextNode(i);
    t.appendChild(textNode);
    a.appendChild(t);
    g.appendChild(a);
  }
  this.overOn = function(){
    i.style.opacity = "0.5";
    r.style.opacity = "0";
    t.style.opacity = "1";
  }
  this.outOn = function(){
    i.style.opacity = "1";
    r.style.opacity = "1";
    t.style.opacity = "0";
  }
	parent.appendChild(g);
}

function createLine(parent){
  var l = create('line');
  l.classList.add('lineCosmic');
  this.pos = function(px1, py1, px2, py2){
    var x1 = ((window.innerWidth * 0.35) * px1);
    var y1 = ((window.innerHeight * 0.75) * py1);
    var x2 = ((window.innerWidth * 0.35) * px2);
    var y2 = ((window.innerHeight * 0.75) * py2);
    l.setAttribute('x1', x1);
    l.setAttribute('y1', y1);
    l.setAttribute('x2', x2);
    l.setAttribute('y2', y2);
  }
  this.overOn = function (){
    l.style.opacity = "1";
  }
  this.outOn = function (){
    l.style.opacity = "0";
  }
  parent.appendChild(l);
}

function setCosmics(){
  for (var i = 0; i <=8; i++) {
    var cl = new createCosmic(svgCosmicsL);
    cosmicsLeft.push(cl);
    var cr = new createCosmic(svgCosmicsR);
    cosmicsRight.push(cr);
  }
}

function setLines(){
  for (var i = 0; i <= 7; i++) {
    var ll = new createLine(svgCosmicsL);
    linesLeft.push(ll);
    var lr = new createLine(svgCosmicsR);
    linesRight.push(lr);
  }
  setLinesPos();
  aniSeqLines();
}

function parseCosmicPos(){
  for (var i = 0; i <=8; i++) {
      var xl = infoJson.cosmicsL[i].perX;
      var yl = infoJson.cosmicsL[i].perY;
      var xr = infoJson.cosmicsR[i].perX;
      var yr = infoJson.cosmicsR[i].perY;
      cosmicsLeft[i].pos(xl, yl);
      cosmicsRight[i].pos(xr, yr);
  }
}

function setLinesPos(){
  for (var i = 0; i <=7; i++) {
    var x1L = infoJson.lineL[i].perX1;
    var y1L = infoJson.lineL[i].perY1;
    var x2L = infoJson.lineL[i].perX2;
    var y2L = infoJson.lineL[i].perY2;
    linesLeft[i].pos(x1L, y1L, x2L, y2L);
    var x1R = infoJson.lineR[i].perX1;
    var y1R = infoJson.lineR[i].perY1;
    var x2R = infoJson.lineR[i].perX2;
    var y2R = infoJson.lineR[i].perY2;
    linesRight[i].pos(x1R, y1R, x2R, y2R);
  }
}

function parseLinkCos(s){
  switch (s) {
  case "m":
    for (var i = 0; i <=8; i++) {
        var wwl = infoJson.cosmicsL[i].linkMobile;
        var wwr = infoJson.cosmicsR[i].linkMobile;
        cosmicsLeft[i].linkCos(wwl, i+1);
        cosmicsRight[i].linkCos(wwr, 10 + i);
    }
  break;
  case "d":
    for (var i = 0; i <=8; i++) {
        var wwl = infoJson.cosmicsL[i].linkDesktop;
        var wwr = infoJson.cosmicsR[i].linkDesktop;
        cosmicsLeft[i].linkCos(wwl, i+1);
        cosmicsRight[i].linkCos(wwr, 10 + i);
    }
  break;
  }
}

function overCosmic(){
	for (var i = 0; i <=8; i++) {
    cosmicsLeft[i].overOn();
    cosmicsRight[i].overOn();
  }
  stopShuffleLoop();
  aniSeqLines("over")
}


function outCosmic(){
  for (var i = 0; i <=8; i++) {
    cosmicsLeft[i].outOn();
    cosmicsRight[i].outOn();
  }
  aniSeqLines("out");
}
var loopOverLeft, loopOverRight, loopShuffle;

var countLineLeft = 0;
var countLineRight = 0;

function aniSeqLines(c){
  switch (c) {
    case "over":
        loopOverLeft = setInterval(function(){
          linesLeft[countLineLeft].overOn();
          countLineLeft++;
          if(countLineLeft > 7) stoploopLeft();
        },200);
    break;
    case "out":
      stopBothInterval();
      initShuffleLines();
    break;
    default:
    initShuffleLines();
  }
}

function stoploopLeft(){
  countLineLeft = 0;
  clearInterval(loopOverLeft);
  loopOverRight = setInterval(function() {
    linesRight[countLineRight].overOn();
    countLineRight++;
    if(countLineRight > 7) stoploopRight();
  },200);
}

function stoploopRight (){
  countLineRight = 0;
  clearInterval(loopOverRight);
}

function stopBothInterval(){
  clearInterval(loopOverLeft);
  clearInterval(loopOverRight);
  countLineRight = 0;
  countLineLeft = 0;
  for (var i = 0; i <= 7; i++) {
    linesLeft[i].outOn();
    linesRight[i].outOn();
  }
}

var arr = [0,1,2,3,4,5,6,7];

function initShuffleLines(){
  loopShuffle = setInterval(function(){
    stopBothInterval();
    arr = shuffle(arr);
    var newArr = arr;
    linesLeft[newArr[0]].overOn();
    linesLeft[newArr[1]].overOn();
    linesLeft[newArr[2]].overOn();
    linesRight[newArr[0]].overOn();
    linesRight[newArr[1]].overOn();
  },3000);
}

function stopShuffleLoop(){
  clearInterval(loopShuffle);
}




function onWindowResize(event){
  parseCosmicPos();
  setSvgView();
  setLinesPos();
  var size = document.getElementById('size').innerHTML = "Width: " + innerWidth + " Height: " + innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  camera.lookAt( scene.position );
  composer.reset();
  effectFocus.uniforms[ "screenWidth" ].value = window.innerWidth + borderFocus;
  effectFocus.uniforms[ "screenHeight" ].value = window.innerHeight +  borderFocus;
}



if(checkMobileIndex){
  console.log("Mobile Home");
  percentageCount();
  headDom.appendChild(linkDomMaster);
  headDom.appendChild(linkDomDesktop);
  headDom.appendChild(linkDomMobile);
  diveDeep.setAttribute('onclick', 'diveDeepFun(1)');
  backToInner.setAttribute('onclick', 'diveDeepFun(2)');
  setInnerMenuMobile();
  setFooterHoverMobile();
  setTimeout(function(){ animateElementsMobile(); }, 5000);
} else {
  console.log("Desktop Home");
  percentageCount();
  headDom.appendChild(linkDomMaster);
  headDom.appendChild(linkDomDesktop);
  diveDeep.setAttribute('onclick', 'diveDeepFun(3)');
  backToInner.setAttribute('onclick', 'diveDeepFun(4)');
  setInnerMenu();
  setFooterHover();
  setElementsHoverDesktop();
}
/* Mesh */
function callMesh(d){
  loader = new THREE.BinaryLoader();
  loader.load("assets/model/16.js", function(geometry){
    if(d == "m") createMesh(geometry, 2.4, 0, -90, 0, 0xddcfbc);
    if(d == "d") createMesh(geometry, 2.4, 0, -110, 0, 0xddcfbc);
  }, modelOnProgress);
  function modelOnProgress (m) {
    if(m.total > 342800){
      loading.style.opacity = "0";
      setTimeout(function(){ loading.style.display = "none"; },1000);
      setTimeout(function(){ animateHome(); },3000);
    }
  }
}


function hoverSwitch(c){
  switch (c) {
  case 1:
    cosmicsWrap.style.opacity = "0";
  break;
  case 2:
    theElementsContainer.style.opacity = "0";
  break;
  case 3:
    cosmicsWrap.style.opacity = "1";
    theElementsContainer.style.opacity = "1";
  break;
  }
}


function diveDeepFun(c){
  switch (c) {
  case 1:
    subInner.style.display = "block";
    setTimeout(function(){subInner.style.opacity = "1"; },500);
  break;
  case 2:
    subInner.style.opacity = "0";
    setTimeout(function(){ subInner.style.display = "none";},400);
  break;
  case 3:
    subInner.style.right = "25px";
    menuBtn.style.display = "none";
    inner.style.display = "none";
  break;
  case 4:
    subInner.style.right = "-225px";
    inner.style.display = "block";
    menuBtn.style.display = "block";
  break;
  }
}

function setElementsHoverDesktop(){
  for (var i = 0; i < elementDom.length; i++) {
    elementDom[i].setAttribute('onmouseout', 'hoverElement(this, "outD")');
    elementDom[i].setAttribute('onmouseover', 'hoverElement(this, "enterD")');
    elementDom[i].setAttribute('data-index', i);
    infoElementLine[i].classList.add('spanScaleDown');
    infoElementTit[i].classList.add('posYStart');
    setTimeout(function(){
      for (var i = 0; i < infoElementTit.length; i++) {
        infoElementTit[i].classList.add('transitionClassElements');
        infoElementLine[i].classList.add('transitionClassElements');
      }
    },300);
  }
}
function hoverElement(el, e){
  switch (e) {
  case "enterD":
     index = el.getAttribute("data-index");
     infoElementLine[index].classList.remove('spanScaleDown');
     infoElementLine[index].classList.add('spanScaleUp');
     setTimeout(function(){
       infoElementTit[index].classList.remove('posYStart');
       infoElementTit[index].classList.add('posYEnd');
     },300);
  break;
  case "outD":
     index = el.getAttribute("data-index");
     infoElementLine[index].classList.remove('spanScaleUp');
     infoElementLine[index].classList.add('spanScaleDown');
     setTimeout(function(){
       infoElementTit[index].classList.remove('posYEnd');
       infoElementTit[index].classList.add('posYStart');
     },300);
  break;
  }
}


var countPer = 0;
function percentageCount(){
  var countInterval = setInterval(function(){
    countPer++;
    percentage.innerHTML = countPer + "%";
    if(countPer >99) clearInterval(countInterval);
  },500);
}

function createMesh(originalGeometry, scale, x, y, z, color){
  var vertices = originalGeometry.vertices;
  var vl = vertices.length;
  var geometry = new THREE.Geometry();
  var vertices_tmp = [];

  for(var i = 0; i < vl; i++){
    //p es global
    p = vertices[i];
    geometry.vertices[i] = p.clone();
    vertices_tmp[i] = [ p.x, p.y, p.z];
  }
  mesh = new THREE.Points(geometry, new THREE.PointsMaterial({size: 1, color: color}));
  mesh.scale.x = mesh.scale.y = mesh.scale.z = scale;
  mesh.position.x = x;
	mesh.position.y = y;
	mesh.position.z = z;
	parent.add( mesh );

  //array meshes propiedades
  meshes.push({
      mesh: mesh,
      vertices: geometry.vertices,
      vertices_tmp: vertices_tmp,
      vl: vl,
      down: 0,
      up: 0,
      direction: 0,
      speed: 35,
      delay: Math.floor(10 + 10 * Math.random()),
      started: false,
      start: Math.floor(10 + 10 * Math.random()),
  });
}

function renderMesh(){
    var timer = Date.now() * 0.0005;
  setTimeout(function(){
    mesh.rotation.y = Math.sin(timer) * 0.5;
  },1000);

  /* Mesh Intro Animation */
  var delta = 18 * clock.getDelta();
  delta = delta < 2 ? delta : 2;
  for( j = 0, jl = meshes.length; j < jl; j ++ ) {
     data = meshes[ j ];
     vertices = data.vertices;
     vertices_tmp = data.vertices_tmp;
     vl = data.vl;
     mesh = data.mesh;
     var min = 800;
     var max = 400;
     if ( data.start > 0 ) {
         data.start -= 1;
    } else {
      if ( !data.started ) {
      data.direction = -1;
        data.started = true;
      }
   }
   for (var i = 0; i < vl; i ++) {
     p = vertices[i];
     vt = vertices_tmp[i];
     if ( data.direction == 0 ) {
    var ani = Math.random() * min - max;
       p.x = ani;
       p.y = ani;
       p.z = Math.random() * 800 - 800;
     }
     if ( data.direction == -1 ) {
       d = Math.abs( p.x - vt[ 0 ] ) + Math.abs( p.y - vt[ 1 ] ) + Math.abs( p.z - vt[ 2 ] );
     if ( d > 1 ) {
         p.x += - ( p.x - vt[ 0 ] ) / d * data.speed * delta * ( 1 - Math.random() );
         p.y += - ( p.y - vt[ 1 ] ) / d * data.speed * delta * ( 1 + Math.random() );
         p.z += - ( p.z - vt[ 2 ] ) / d * data.speed * delta * ( 1 - Math.random() );
       }
     }
   }
     mesh.geometry.verticesNeedUpdate = true;
   }
}

function animateHome(){
  instruction.style.opacity = "1";
  switchElementsW.style.opacity = "1";
  navDom.style.opacity = "1";
  footerDom.style.opacity = "1";
  var arr = [0, 1, 2, 3, 4, 5, 6];
  arr = shuffle(arr);
  var newArr = arr;
  setTimeout(function(){ elementDom[newArr[0]].style.opacity = "1"; },500);
  setTimeout(function(){ elementDom[newArr[1]].style.opacity = "1"; },1000);
  setTimeout(function(){ elementDom[newArr[2]].style.opacity = "1"; },1500);
  setTimeout(function(){ elementDom[newArr[3]].style.opacity = "1"; },2000);
  setTimeout(function(){ elementDom[newArr[4]].style.opacity = "1"; },2500);
  setTimeout(function(){ elementDom[newArr[5]].style.opacity = "1"; },3000);
  setTimeout(function(){
    elementDom[newArr[6]].style.opacity = "1";
    cosmicsWrap.style.opacity = "1";
  },3500);
}

function animateElementsMobile(){
  var indexTit = [0, 1, 2, 3, 4, 5, 6];
  var l = indexTit.length;
    setInterval(function(){
    indexTit = shuffle(indexTit);
    var newIndexTit = indexTit;
    for (var i = 0; i < l; i++) {
      if(i >0) infoElementTit[newIndexTit[i-1]].style.opacity = "0";
      infoElementTit[newIndexTit[i]].style.opacity = "1";
    }
  },4000);
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


function setInnerMenu(){
  inner.setAttribute('onmouseover', 'overDesktop(1)');
  inner.setAttribute('onmouseout', 'overDesktop(2)');
}

function overDesktop(s){
  switch (s) {
  case 1:
  menuBtn.style.opacity = "0";
  inner.style.right = "0";
  inner.style.opacity = "1";
  break;
  case 2:
  menuBtn.style.opacity = "1";
  inner.style.right = "-200px";
  inner.style.opacity = "0";
  break;
  }
}

function onWindowOrientation(event){
  var size = document.getElementById('size').innerHTML = "Width: " + innerWidth + " Height: " + innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  camera.lookAt( scene.position );
  composer.reset();
  effectFocus.uniforms[ "screenWidth" ].value = window.innerWidth + borderFocus;
  effectFocus.uniforms[ "screenHeight" ].value = window.innerHeight +  borderFocus;
  if(window.orientation == 90 || window.orientation == -90){
    gradientTexture.image.width = window.innerWidth;
    gradientTexture.needsUpdate = true;
    gradientGeometry.groupsNeedUpdate = true;
    rot = particlesBack.rotation.y = 0.0001;
  } else {
    gradientTexture.image.width = window.innerWidth;
    gradientTexture.needsUpdate = true;
    gradientGeometry.groupsNeedUpdate = true;
  }
}

function setInnerMenuMobile(){
  menuBtn.setAttribute('onclick', 'overMobile(1)');
  closeMenuMobile.setAttribute('onclick', 'overMobile(2)')
}

function overMobile(s){
  switch (s) {
  case 1:
  inner.style.display = "block";
  switchElementsW.style.opacity = "0";
  setTimeout(function(){ inner.style.opacity = "1"; },500);
  break;
  case 2:
  inner.style.opacity = "0";
  switchElementsW.style.opacity = "1";
  setTimeout(function(){ inner.style.display = "none"; },700);
  break;
  }
}

function instructionsW(c){
  switch (c) {
  case 'open':
    instructionWrap.style.left = "0";
    instructionWrap.style.opacity = "1";
  break;
  case 'close':
    instructionWrap.style.left = "-100vw";
    instructionWrap.style.opacity = "0";
  break;
  }
}

function overInstruction(c, e) {
  var e = _(e);
  switch (c) {
  case 'over':
    e.setAttribute('src', 'img/icons/info_h.svg');
  break;
  case 'out':
    e.setAttribute('src', 'img/icons/info.svg');
  break;
  }
}

function setFooterHover(){
  overFooterBtn.setAttribute('onmouseover', 'footerHover(1)');
  overFooterBtn.setAttribute('onmouseout', 'footerHover(2)');
  overFooterBtn.setAttribute('onclick', 'footerClick()')
}

function setFooterHoverMobile(){
  overFooterBtn.setAttribute('ontouchstart', 'footerHover(1)');
  overFooterBtn.setAttribute('ontouchend', 'footerHover(2)');
  footerDom.setAttribute('onclick', 'footerClickMobile()')
}

function footerHover(s){
  switch (s) {
    case 1:
    overFooterImg.classList.add('rotateBack');
    break;
    case 2:
    overFooterImg.classList.remove('rotateBack');
    break;
  }
}

function footerClick(){
  openFoot = !openFoot;
  if(openFoot){
    footerDom.style.left = "-19vw";
  } else{
    footerDom.style.left = "0";
  }
}

function footerClickMobile(){
  openFoot = !openFoot;
  if(openFoot){
    footerDom.style.left = "-45vw";
  } else{
    footerDom.style.left = "0";
  }
}
