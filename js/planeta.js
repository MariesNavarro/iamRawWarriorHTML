/*
Versión 28 de Mayo
Cambios
*/

var readMoreTitle = _('readMoreTitle');
var gifInfo = __('gifInfo');
var lineFlecha = _('lineFlecha');
var bullet = __('bullet');
var arrow = _('arrow');
var margin = _('margin');


var bullet = __('bullet');
var sliderGif = _('sliderGif');
var wrapBalls = _('eW');
var sliderCount = _('sliderCount');

var closeMenuBtn = _('closeMenuBtn');
var count1t7 = __('count1t7');
var checkMobile = false;

var percentage = _('percentage');
var loading = _('loading');

var infoMore = _('infoMore');
var zoneChange = window.innerHeight/2;
var lineMenu = __('lineMenu');
 var body = document.getElementsByTagName("BODY")[0];

 var arrowPrev = _('arrowPrev');
 var arrowNext = _('arrowNext');
 var moreArrow = _('moreArrow');

var commentsDisqus = __('commentsDisqus');

var headT =  document.getElementsByTagName("head")[0];
var linkCSS  = document.createElement('link');
linkCSS.rel  = 'stylesheet';
linkCSS.type = 'text/css';


window.onload = function(){
  if(bowser.mobile || bowser.tablet || /SymbianOS/.test(window.navigator.userAgent)) checkMobile = true;
  if(checkMobile){
    loadAssetsMobile();
    linkCSS.href = "css/planetaMobile.css";
    headT.appendChild(linkCSS);
  } else {
    linkCSS.href = "css/planetaDesktop.css";
    headT.appendChild(linkCSS);
    loadAssetsDesktop();
    menuDesktopFun();
    window.onresize = function (){
      document.getElementById("size").innerHTML = "W: " + window.innerWidth + "px | H: " + window.innerHeight + "px";
      menuDesktopFun();
    }
  }
}

var lastGif = 0;
var swipeBullet = 0;

var sizeHome = _('sizeHome'),
    footerFix = _('footerFix');
var scrollFooterFix;


var menuMobileZone = _('menuMobile'),
    menuDesktop = _('menuDesktop'),
    menuMobileBtn = _('menuMobileBtn');



function loadAssetsDesktop(){
  console.log("Desktop");
  sequencesDesktop(480);
  initInfoSlider();
  window.addEventListener("scroll", changeColorDesktop, false);
}

var desktopsliderC = 0;
sliderDesktop(0);

function sliderDesktopCount(d){
  if(d == 0) desktopsliderC++;
  if(desktopsliderC > 6) desktopsliderC = 0;
  if(d == 1) desktopsliderC--;
  if(desktopsliderC < 0) desktopsliderC = 0;
  sliderDesktop(desktopsliderC);
}

function sliderDesktop(n){
  switch (n) {
    case 0:
    arrowPrev.style.opacity = "0";
    moreArrow.style.display = "none";
    slider(n);
    break;
    case 1:
    arrowPrev.style.opacity = "1";
    slider(n);
    break;
    case 2:
    slider(n);
    break;
    case 3:
    slider(n);
    break;
    case 4:
    slider(n);
    break;
    case 5:
    slider(n);
    break;
    case 6:
    arrowNext.style.display = "none";
    moreArrow.style.display = "block";
    slider(n);
    break;
  }
}

function openDisqusR(n, state){
  if(state == true){
    commentsDisqus[n].style.display = "block";
      setTimeout(function(){
        commentsDisqus[n].style.top = "0";
        commentsDisqus[n].style.opacity = "1";
      },200);

  }
  if(state == false){
    commentsDisqus[n].style.top = "100vh";
    commentsDisqus[n].style.opacity = "0";
    setTimeout(function(){
      commentsDisqus[n].style.display = "none";
    },200);
  }
}


function menuDesktopFun(){
  if(window.innerWidth<850){
    menuNav.removeAttribute("style");
  menuMobileZone.removeEventListener('mouseover', showMenuDesktop, false);
  menuMobileZone.removeEventListener('mouseout', hideMenuDesktop, false);
  menuMobile();
  }else{
    menuNav.removeAttribute("style");
    menuDesktop.removeAttribute("style");
    menuMobileZone.addEventListener('mouseover', showMenuDesktop, false);
    menuMobileZone.addEventListener('mouseout', hideMenuDesktop, false);
  }
}

function showMenuDesktop() {
  menuMobileBtn.style.opacity = "0";
  menuMobileBtn.style.display = "none";
  menuDesktop.style.opacity = "1";
  menuDesktop.style.right = "50px";
}

function hideMenuDesktop(){
  menuMobileBtn.style.display = "block";
  menuMobileBtn.style.opacity = "1";
  menuDesktop.style.opacity = "0";
  menuDesktop.style.right = "-200px";
}


  function changeColorDesktop(){
      var scrollFooterFix = sizeHome.getBoundingClientRect().top;
      if(scrollFooterFix < -300){
        footerFix.style.opacity = "0";
        body.style.background = "#f6eed9";
      } else {
        footerFix.style.opacity = "1";
        body.style.background = "#0e2635";
      }
  }

function loadAssetsMobile(){
  menuMobile();
  detectswipe('sliderGif', swipeTransform);
  initInfoSlider();
  sequencesMobile(290);
  document.addEventListener("touchmove", ScrollStartMobile, false);
  document.addEventListener("scroll", ScrollStartMobile, false);
  window.addEventListener("orientationchange", function() {
  if(window.orientation == 90 || window.orientation == -90){
      landscape();
  	} else {
        portrait();
    }
  }, false);

  if(window.orientation == 90 || window.orientation == -90){
    landscape();
  } else {
      portrait();
  }
}


/* MENU MOBILE */
function menuMobile(m){
  if(m === 0){
    menuNav.style.display = "block";
    setTimeout(function(){
      menuNav.style.opacity = "1";
    },300);
  }
  if(m === 1){
    menuNav.style.opacity = "0";
    setTimeout(function(){
      menuNav.style.display = "none";
    },300);
  }
  closeMenuBtn.addEventListener('click', function(){
     menuMobile(1);
   });
  openMenuBtn.addEventListener('click', function(){
    menuMobile(0);
  });
}

function landscape(){
  closeMenuBtn.style.right = "45px";
  closeMenuBtn.style.top = "15px";
  sliderGif.style.top = "1vh";
  wrapBalls.style.top = "1vh";
  sliderCount.style.marginTop = "3.5vh";
  zoneChange = window.innerHeight;
  margin.style.height = "0";
}

function portrait(){
  closeMenuBtn.style.right = "25px";
  closeMenuBtn.style.top = "25px";
  sliderGif.style.top = "13vh";
  wrapBalls.style.top = "13vh";
  sliderCount.style.marginTop = "130px";
  zoneChange = window.innerHeight/7;
  margin.style.height = "40px";
}

function ScrollStartMobile() { changeColorMobile(); }
/* CHANGE COLOR MOBILE */
 function changeColorMobile(){
  var infoHeight = infoMore.getBoundingClientRect().top;

   var zoneCheck = infoHeight;
   if(zoneCheck < 380){
     body.style.background = "#f6eed9";
      for(var i = 0; i<lineMenu.length; i++){
        lineMenu[i].setAttribute('stroke', '#0e2635');
      }
   } else {
     body.style.background = "#0e2635";
     for(var i = 0; i<lineMenu.length; i++){
       lineMenu[i].setAttribute('stroke', '#f6eed9');
     }
   }
 }


/* DETECT SWIPE*/
function detectswipe(el,func) {
  swipe_det = new Object();
  swipe_det.sX = 0;
  swipe_det.sY = 0;
  swipe_det.eX = 0;
  swipe_det.eY = 0;
  var min_x = 20;
  var max_x = 40;
  var min_y = 40;
  var max_y = 50;
  var direc = "";
  ele = document.getElementById(el);
  ele.addEventListener('touchstart',function(e){
    var t = e.touches[0];
    swipe_det.sX = t.screenX;
    swipe_det.sY = t.screenY;
  },false);

  ele.addEventListener('touchmove',function(e){
    e.preventDefault();
    var t = e.touches[0];
    swipe_det.eX = t.screenX;
    swipe_det.eY = t.screenY;
  },false);

  ele.addEventListener('touchend',function(e){
    if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y)))) {
      if(swipe_det.eX > swipe_det.sX) direc = "r";
      else direc = "l";
    }
    if (direc != "") {
        if(typeof func == 'function') func(el,direc);
    }
    direc = "";
  },false);
} //detectSwipe



function swipeTransform(el,d) {
  if(d == "l") {
      swipeBullet++;
      if(swipeBullet > 6) swipeBullet = 0;
      slider(swipeBullet);
  } //l
  if(d == "r"){
    swipeBullet--;
    if(swipeBullet < 0) swipeBullet = 6;
    slider(swipeBullet);
  } //r
}

function initInfoSlider(){
  if(swipeBullet == 0){
    readMoreTitle.innerHTML = "Gif 1: Mr. Glass";
  }
  for(var i = 0; i<=6; i++){
    bullet[i].classList.remove('scaleUp');
    gifInfo[i].classList.remove("show");
  }
  bullet[swipeBullet].classList.add('scaleUp');
  gifInfo[0].classList.add("show");
}

function slider(n){
  switch(n) {
    case 0:
      changeAnimation(0);
      swipeBullet = 0;
      readMoreTitle.innerHTML = "Gif 1: Mr. Glass";
      for(var i = 0; i<=6; i++){
        bullet[i].classList.remove("scaleUp");
        gifInfo[i].classList.remove("show");
      }
      bullet[0].classList.add('scaleUp');
      gifInfo[0].classList.add("show");
      break;
    case 1:
      changeAnimation(1);
      swipeBullet = 1;
      readMoreTitle.innerHTML = "Gif 2: The Righteous Man";
      for(var i = 0; i<=6; i++) {
        bullet[i].classList.remove("scaleUp");
        gifInfo[i].classList.remove("show");
      }
      bullet[1].classList.add('scaleUp');
      gifInfo[1].classList.add("show");
      break;
    case 2:
      changeAnimation(2);
      swipeBullet = 2;
      readMoreTitle.innerHTML = "Gif 3: The Valley of Darkness";
      for(var i = 0; i<=6; i++) {
        bullet[i].classList.remove('scaleUp');
        gifInfo[i].classList.remove("show");
      }
      bullet[2].classList.add('scaleUp');
      gifInfo[2].classList.add("show");
      break;
    case 3:
      changeAnimation(3);
      swipeBullet = 3;
      readMoreTitle.innerHTML = "Gif 4: Start Giving Me Some";
      for(var i = 0; i<=6; i++) {
        bullet[i].classList.remove('scaleUp');
        gifInfo[i].classList.remove("show");
      }
      bullet[3].classList.add('scaleUp');
      gifInfo[3].classList.add("show");
      break;
    case 4:
      changeAnimation(4);
      swipeBullet = 4;
      readMoreTitle.innerHTML = "Gif 5: Go Someplace";
      for(var i = 0; i<=6; i++) {
        bullet[i].classList.remove('scaleUp');
        gifInfo[i].classList.remove("show");
      }
      bullet[4].classList.add('scaleUp');
      gifInfo[4].classList.add("show");
      break;
    case 5:
      changeAnimation(5);
      swipeBullet = 5;
      readMoreTitle.innerHTML = "Gif 6: Shoot In The Head";
      for(var i = 0; i<=6; i++) {
        bullet[i].classList.remove('scaleUp');
        gifInfo[i].classList.remove("show");
      }
      bullet[5].classList.add('scaleUp');
      gifInfo[5].classList.add("show");
      break;
    case 6:
      changeAnimation(6);
      swipeBullet = 6;
      readMoreTitle.innerHTML = "Gif 7: Brother's Keeper";
      for(var i = 0; i<=6; i++) {
        bullet[i].classList.remove('scaleUp');
        gifInfo[i].classList.remove("show");
      }
      bullet[6].classList.add('scaleUp');
      gifInfo[6].classList.add("show");
      break;
  }
}

function sequencesMobile(size){
  app = new PIXI.Application(size, size,{antialias: true, transparent: true, resolution: 1});
  sliderGif.appendChild(app.view);
  PIXI.loader
  .add('img/seqGif/mobile/gif1m_1.json')
  .add('img/seqGif/mobile/gif1m_2.json')
  .add('img/seqGif/mobile/gif1m_3.json')

  .add('img/seqGif/mobile/gif2m_1.json')
  .add('img/seqGif/mobile/gif2m_2.json')
  .add('img/seqGif/mobile/gif2m_3.json')

  .add('img/seqGif/mobile/gif3m_1.json')
  .add('img/seqGif/mobile/gif3m_2.json')
  .add('img/seqGif/mobile/gif3m_3.json')

  .add('img/seqGif/mobile/gif4m_1.json')
  .add('img/seqGif/mobile/gif4m_2.json')
  .add('img/seqGif/mobile/gif4m_3.json')

  .add('img/seqGif/mobile/gif5m_1.json')
  .add('img/seqGif/mobile/gif5m_2.json')
  .add('img/seqGif/mobile/gif5m_3.json')

  .add('img/seqGif/mobile/gif6m_1.json')
  .add('img/seqGif/mobile/gif6m_2.json')
  .add('img/seqGif/mobile/gif6m_3.json')

  .add('img/seqGif/mobile/gif7m_1.json')
  .add('img/seqGif/mobile/gif7m_2.json')
  .add('img/seqGif/mobile/gif7m_3.json')
  .load(function(){
    createAnimation(0,118,'gif1_', app.renderer, app.stage, true);
  })
  .on('progress', function (loader, loadedResource) {
      var num = Math.round(loader.progress);
      percentage.innerHTML = num + '%';
      if(num>99){
        loading.style.opacity = 0;
        setTimeout(function(){ loading.style.display = "none" },1000);
      }
			console.log('Progress:', Math.round(loader.progress) + '%');
	})
}





function sequencesDesktop(size){
  app = new PIXI.Application(size, size,{antialias: true, transparent: true, resolution: 1});
  // app.view.style.background = "green";
  sliderGif.appendChild(app.view);
  PIXI.loader
  .add('img/seqGif/desktop/desktopgif1_1.json')
  .add('img/seqGif/desktop/desktopgif1_2.json')

  .add('img/seqGif/desktop/desktopgif2_1.json')
  .add('img/seqGif/desktop/desktopgif2_2.json')


  .add('img/seqGif/desktop/desktopgif3_1.json')
  .add('img/seqGif/desktop/desktopgif3_2.json')


  .add('img/seqGif/desktop/desktopgif4_1.json')
  .add('img/seqGif/desktop/desktopgif4_2.json')


  .add('img/seqGif/desktop/desktopgif5_1.json')
  .add('img/seqGif/desktop/desktopgif5_2.json')


  .add('img/seqGif/desktop/desktopgif6_1.json')
  .add('img/seqGif/desktop/desktopgif6_2.json')


  .add('img/seqGif/desktop/desktopgif7_1.json')
  .add('img/seqGif/desktop/desktopgif7_2.json')

  .load(function(){
    createAnimation(0,118,'gif1_', app.renderer, app.stage, true);
  })
  .on('progress', function (loader, loadedResource) {
      var num = Math.round(loader.progress);
      percentage.innerHTML = num + '%';
      if(num>99){
        loading.style.opacity = 0;
        setTimeout(function(){ loading.style.display = "none" },1000);
      }
			console.log('Progress:', Math.round(loader.progress) + '%');
	})
}


  function changeAnimation(n){
  		if(n == 0){
        removeAnimationChildren();
    		createAnimation(0,118,'gif1_', app.renderer, app.stage, true);
      }
      if(n == 1){
        removeAnimationChildren();
    		createAnimation(0,118,'gif2_', app.renderer, app.stage, true);
      }
      if(n == 2){
        removeAnimationChildren();
    		createAnimation(0,118,'gif3_', app.renderer, app.stage, true);
      }
      if(n == 3){
        removeAnimationChildren();
    		createAnimation(0,118,'gif4_', app.renderer, app.stage, true);
      }
      if(n == 4){
        removeAnimationChildren();
    		createAnimation(0,118,'gif5_', app.renderer, app.stage, true);
      }
      if(n == 5){
        removeAnimationChildren();
    		createAnimation(0,118,'gif6_', app.renderer, app.stage, true);
      }
      if(n == 6){
        removeAnimationChildren();
    		createAnimation(0,118,'gif7_', app.renderer, app.stage, true);
      }
  }


  function createAnimation(start, end, pathGif, appRender, appStage, onStage) {
  	var framesTemp = [];
  	for (var i = start; i < end; i++) {
  			framesTemp.push(PIXI.Texture.fromFrame(pathGif + i + '.png'));
  	}
  	var ani = new PIXI.extras.AnimatedSprite(framesTemp);
  		ani.x = (appRender.width / 2) - 10;
  		ani.y = (appRender.height / 2) - 10;
  		ani.anchor.set(0.5);
  		ani.animationSpeed = 0.16;

  	if(onStage) appStage.addChild(ani);
  	ani.play();
  }
  function removeAnimationChildren(){
  	for (var i = app.stage.children.length - 1; i >= 0; i--) {	app.stage.removeChild(app.stage.children[i]); };
  }
