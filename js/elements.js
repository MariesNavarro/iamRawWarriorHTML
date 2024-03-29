var scriptDisqus = document.createElement('SCRIPT');
    scriptDisqus.id  = 'dsq-count-scr';
    scriptDisqus.defer = 'defer';

var objectDom = document.createElement('OBJECT');
objectDom.type = "text/html";


var rotationBlock = true;
var openFoot = false,
    initCountSlider = true;
var footerDom = document.getElementsByTagName("FOOTER")[0],
    navDom = document.getElementsByTagName("NAV")[0],
    body = document.getElementsByTagName("BODY")[0],
    objectThread = __('objectThread'),
    readMoreTitle = _('readMoreTitle'),
    inner = _('inner'),
    eW = _('eW'),
    loading = _('loading'),
    percentage = _('percentage'),
    subInner = _('subInner'),
    suscribe = _('suscribeW'),
    backToInner = _('backToInner'),
    bullet = __('bullet'),
    disqusTit = _('disqusTit'),
    outer = _('outer'),
    gifInfo = __('gifInfo'),
    shareWrap = __('shareWrap'),
    sizeHome = _('sizeHome'),
    menuBtn = _('menuBtn'),
    instructionMobile = _('instructionMobile'),
    sliderArrows = _('sliderArrows');
    var linkDomMobile  = document.createElement('LINK');
    var linkDomDesktop = document.createElement('LINK');
    var linkDomHomeMobile = document.createElement('LINK');
    linkDomMobile.rel  = 'stylesheet';
    linkDomMobile.type = 'text/css';
    linkDomMobile.href = "css/planetaMobile.css";
    linkDomDesktop.rel  = 'stylesheet';
    linkDomDesktop.type = 'text/css';
    linkDomDesktop.href = "css/planetaDesktop.css";
    linkDomHomeMobile.rel  = 'stylesheet';
    linkDomHomeMobile.type = 'text/css';
    linkDomHomeMobile.href = "css/homeMobile.css";
var scrollFooterFix;
    navDom.style.opacity = "1";
    footerDom.style.opacity = "1";
    var desktopsliderC = 0;

    var lastGif = 0;
    var swipeBullet = 0;

var pictureSwipe = _('pictureSwipe');
var changePicture = true;
swapPicture();
function swapPicture(){
  setInterval(function(){
    changePicture = !changePicture;
    if(changePicture){
      pictureSwipe.setAttribute('src', 'img/icons/picture1.svg');
    } else {
      pictureSwipe.setAttribute('src', 'img/icons/picture.svg');
    }
  },1800);
}

window.addEventListener('orientationchange', onWindowOrientation, false);
function onWindowOrientation(event){
  if (rotationBlock) {
    if(window.orientation == 90 || window.orientation == -90){
  		blockLandscapeAndroid.classList.remove('hideBlockLand');
  		blockLandscapeAndroid.classList.add('showBlockLand');
  	} else {
      blockLandscapeAndroid.classList.remove('showBlockLand');
  		blockLandscapeAndroid.classList.add('hideBlockLand');
    }
  }
}


var commentsDisqus = document.getElementsByClassName('commentsDisqus');
window.onresize = function (){
	document.getElementById("size").innerHTML = "W: " + window.innerWidth + "px | H: " + window.innerHeight + "px";
}
    if(checkMobileIndex){
    window.onload = function(){
      instructionMobile.style.display = "block";
      setTimeout(function(){
        instructionMobile.style.opacity = "1";
      },500);
      if (bowser.android) {
        for (var i = 0; i < shareWrap.length; i++) {
            shareWrap[i].style.marginLeft = "-80%";
            shareWrap[i].style.width = " 80vw";
        }
      }
        outer.style.top = "-30px";
        setInnerMenuMobile();
        setFooterHoverMobile();
        diveDeep.setAttribute('onclick', 'diveDeepFun(1)');
        backToInner.setAttribute('onclick', 'diveDeepFun(2)');
        window.addEventListener("scroll", changeColorDesktop, false);
        sequencesDesktop();
        detectswipe('eW', swipeTransform);
        initInfoSlider();
        headDom.appendChild(linkDomDesktop);
        headDom.appendChild(linkDomHomeMobile);


      setTimeout(function(){
        if(urlValue == 0){
          slider(0);
        }
        if(urlValue == 1){
          slider(1);
        }
        if(urlValue == 2){
          slider(2);
        }
        if(urlValue == 3){
          slider(3);
        }
        if(urlValue == 4){
          slider(4);
        }
        if(urlValue == 5){
          slider(5);
        }
        if(urlValue == 6){
          slider(6);
        }
      },1000);
      }
    } else{
      console.log("Desktop elements");
      window.onload = function(){
        instructionMobile.style.display = "none";
        window.addEventListener("scroll", changeColorDesktop, false);
        setInnerMenu();
        setFooterHover();
        sequencesDesktop();
        initInfoSlider();
        headDom.appendChild(linkDomDesktop);
        diveDeep.setAttribute('onclick', 'diveDeepFun(3)');
        backToInner.setAttribute('onclick', 'diveDeepFun(4)');

        for (var i = 0; i < shareWrap.length; i++) {
          shareWrap[i].style.width = "20vw";
          shareWrap[i].style.marginLeft = "16%";
        }
      setTimeout(function(){
        if(urlValue == 0){
          slider(0);
        }
        if(urlValue == 1){
          slider(1);
        }
        if(urlValue == 2){
          slider(2);
        }
        if(urlValue == 3){
          slider(3);
        }
        if(urlValue == 4){
          slider(4);
        }
        if(urlValue == 5){
          slider(5);
        }
        if(urlValue == 6){
          slider(6);
        }
      },1000);
      }
    }

    sliderDesktop(0);

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

    function changeColorDesktop(){
      var hideArrow = readMoreTitle.getBoundingClientRect().top;
        if(hideArrow < -20){
          sliderArrows.style.display = "none";
        } else {
          if(checkMobileIndex){
              sliderArrows.style.display = "none !important";
          } else {
            sliderArrows.style.display = "block";
          }
        }
      var scrollFooterFix = sizeHome.getBoundingClientRect().top;
      if(scrollFooterFix < -300){
        //Sin degradado
        body.classList.add("bodyBackNoDeg");
        body.classList.remove("bodyBackDeg");
        for (var i = 0; i < gifInfo.length; i++) {
          gifInfo[i].style.opacity = "1";
        }
      } else {
        //Degradado
        body.classList.add("bodyBackDeg");
        body.classList.remove("bodyBackNoDeg");
        for (var i = 0; i < gifInfo.length; i++) {
          gifInfo[i].style.opacity = "0";
        }
      }
    }


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
        readMoreTitle.innerHTML = "RESPONSIBILITY";
      }
      for(var i = 0; i<=6; i++){
        bullet[i].classList.remove('scaleUp');
        gifInfo[i].classList.remove("show");
      }
      bullet[swipeBullet].classList.add('scaleUp');
      gifInfo[0].classList.add("show");
    }

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

  function unBindBullet(c){
    switch (c) {
    case 0:
      desktopsliderC = 0;
      slider(desktopsliderC);
    break;
    case 1:
      desktopsliderC = 1;
      slider(desktopsliderC);
    break;
    case 2:
      desktopsliderC = 2;
      slider(2);
    break;
    case 3:
      desktopsliderC = 3;
      slider(3);
    break;
    case 4:
      desktopsliderC = 4;
      slider(4);
    break;
    case 5:
      desktopsliderC = 5;
      slider(5);
    break;
    case 6:
      desktopsliderC = 6;
      slider(6);
    break;
    }
  }

  function slider(n){
  switch(n) {
    case 0:
      arrowPrev.style.opacity = "0";
      moreArrow.style.display = "none";
      arrowNext.style.display = "block";
      changeAnimation(0);
      swipeBullet = 0;
      readMoreTitle.innerHTML = "RESPONSIBILITY";
      for(var i = 0; i<=6; i++){
        bullet[i].classList.remove("scaleUp");
        gifInfo[i].classList.remove("show");
      }
      bullet[0].classList.add('scaleUp');
      gifInfo[0].classList.add("show");
      break;
    case 1:
      arrowPrev.style.opacity = "1";
      moreArrow.style.display = "none";
      arrowNext.style.display = "block";
      changeAnimation(1);
      swipeBullet = 1;
      readMoreTitle.innerHTML = "AWARENESS";
      for(var i = 0; i<=6; i++) {
        bullet[i].classList.remove("scaleUp");
        gifInfo[i].classList.remove("show");
      }
      bullet[1].classList.add('scaleUp');
      gifInfo[1].classList.add("show");
      break;
    case 2:
      moreArrow.style.display = "none";
      arrowNext.style.display = "block";
      changeAnimation(2);
      swipeBullet = 2;
      readMoreTitle.innerHTML = "WILLINGNESS";
      for(var i = 0; i<=6; i++) {
        bullet[i].classList.remove('scaleUp');
        gifInfo[i].classList.remove("show");
      }
      bullet[2].classList.add('scaleUp');
      gifInfo[2].classList.add("show");
      if(initCountSlider){
        showSuscribe(1);
      }
      initCountSlider = false;
      break;
      case 3:
      moreArrow.style.display = "none";
      arrowNext.style.display = "block";
      changeAnimation(3);
      swipeBullet = 3;
      readMoreTitle.innerHTML = "HUMAN SUSTAINABILITY ";
      for(var i = 0; i<=6; i++) {
        bullet[i].classList.remove('scaleUp');
        gifInfo[i].classList.remove("show");
      }
      bullet[3].classList.add('scaleUp');
      gifInfo[3].classList.add("show");
      break;
    case 4:
      moreArrow.style.display = "none";
      arrowNext.style.display = "block";
      changeAnimation(4);
      swipeBullet = 4;
      readMoreTitle.innerHTML = "SYNTHESIZING";
      for(var i = 0; i<=6; i++) {
        bullet[i].classList.remove('scaleUp');
        gifInfo[i].classList.remove("show");
      }
      bullet[4].classList.add('scaleUp');
      gifInfo[4].classList.add("show");
      break;
    case 5:
      moreArrow.style.display = "none";
      arrowNext.style.display = "block";
      changeAnimation(5);
      swipeBullet = 5;
      readMoreTitle.innerHTML = "SOCIAL RESPONSIBILITY";
      for(var i = 0; i<=6; i++) {
        bullet[i].classList.remove('scaleUp');
        gifInfo[i].classList.remove("show");
      }
      bullet[5].classList.add('scaleUp');
      gifInfo[5].classList.add("show");
      break;
    case 6:
      arrowPrev.style.opacity = "1";
      moreArrow.style.display = "block";
      arrowNext.style.display = "none";
      changeAnimation(6);
      swipeBullet = 6;
      readMoreTitle.innerHTML = "CONTINUITY";
      for(var i = 0; i<=6; i++) {
        bullet[i].classList.remove('scaleUp');
        gifInfo[i].classList.remove("show");
      }
      bullet[6].classList.add('scaleUp');
      gifInfo[6].classList.add("show");
      break;
  }
}

function sequencesDesktop(){
    app = new PIXI.Application(480, 480,{antialias: true, transparent: true, resolution: 1});
    sliderGif.appendChild(app.view);
    PIXI.loader
    .add('../img/seqGif/mobile/gif1_1.json')
    .add('../img/seqGif/mobile/gif2_1.json')
    .add('../img/seqGif/mobile/gif3_1.json')
    .add('../img/seqGif/mobile/gif4_1.json')
    .add('../img/seqGif/mobile/gif5_1.json')
    .add('../img/seqGif/mobile/gif6_1.json')
    .add('../img/seqGif/mobile/gif7_1.json')
    .load(function(){
      createAnimation(0,113,'gif1_', app.renderer, app.stage, true);
    })
    .on('progress', function (loader, loadedResource) {
        var num = Math.round(loader.progress);
        percentage.innerHTML = num + '%';
        if(num>30){
          stopFakeCount();
        }
        if(num>99){
          loading.style.opacity = 0;
          setTimeout(function(){ loading.style.display = "none" },1000);
        }
    })
}

function createAnimation(start, end, pathGif, appRender, appStage, onStage) {
  var framesTemp = [];
  for (var i = start; i < end; i++) {
      framesTemp.push(PIXI.Texture.fromFrame(pathGif + i + '.png'));
  }
  var ani = new PIXI.extras.AnimatedSprite(framesTemp);
    ani.x = (appRender.width / 2);
    ani.y = (appRender.height / 2);
    ani.width = appRender.width;
    ani.height = appRender.height;
    ani.anchor.set(0.5);
    ani.animationSpeed = 0.16;

  if(onStage) appStage.addChild(ani);
  ani.play();
}
function removeAnimationChildren(){
  for (var i = app.stage.children.length - 1; i >= 0; i--) {	app.stage.removeChild(app.stage.children[i]); };
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


function overMobile(s){
  switch (s) {
  case 1:
  inner.style.display = "block";
  setTimeout(function(){ inner.style.opacity = "1"; },500);
  break;
  case 2:
  inner.style.opacity = "0";
  setTimeout(function(){ inner.style.display = "none"; },700);
  break;
  }
}

function setInnerMenuMobile(){
  menuBtn.setAttribute('onclick', 'overMobile(1)');
  closeMenuMobile.setAttribute('onclick', 'overMobile(2)');
}

function setFooterHoverMobile(){
  overFooterBtn.setAttribute('ontouchstart', 'footerHover(1)');
  overFooterBtn.setAttribute('ontouchend', 'footerHover(2)');
  footerDom.setAttribute('onclick', 'footerClickMobile()');
}

function setInnerMenu(){
  inner.setAttribute('onmouseover', 'overDesktop(1)');
  inner.setAttribute('onmouseout', 'overDesktop(2)');
}

function setFooterHover(){
  overFooterBtn.setAttribute('onmouseover', 'footerHover(1)');
  overFooterBtn.setAttribute('onmouseout', 'footerHover(2)');
  footerDom.setAttribute('onclick', 'footerClick()');
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

function changeAnimation(n){
      if(n == 0){
        removeAnimationChildren();
        createAnimation(0,113,'gif1_', app.renderer, app.stage, true);
      }
      if(n == 1){
        removeAnimationChildren();
        createAnimation(0,41,'gif2_', app.renderer, app.stage, true);
      }
      if(n == 2){
        removeAnimationChildren();
        createAnimation(0,113,'gif3_', app.renderer, app.stage, true);
      }
      if(n == 3){
        removeAnimationChildren();
        createAnimation(0,113,'gif4_', app.renderer, app.stage, true);
      }
      if(n == 4){
        removeAnimationChildren();
        createAnimation(0,113,'gif5_', app.renderer, app.stage, true);
      }
      if(n == 5){
        removeAnimationChildren();
        createAnimation(0,33,'gif6_', app.renderer, app.stage, true);
      }
      if(n == 6){
        removeAnimationChildren();
        createAnimation(0,33,'gif7_', app.renderer, app.stage, true);
      }
  }


function changeIconShare(c, url, e){
  switch (c) {
  case 'over':
    e.setAttribute('src', url + '_hover.svg');
  break;
  case 'out':
    e.setAttribute('src', url + '.svg');
  break;
  }
}



function openDisqusR(n, state){
  if(state == true){
    objectDom.setAttribute('data', 'disqus/thread'+ n +'e.html');
    commentsDisqus[n].appendChild(objectDom);
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




function instructionsNone(){
  instructionMobile.style.display = "none";
  rotationBlock = false
}



function showSuscribe(c){
  switch (c) {
  case 1:
    suscribe.style.display = "block";
    setTimeout(function(){ suscribe.style.opacity = "1"; },500);
  break;
  case 2:
  suscribe.style.opacity = "0";
  setTimeout(function(){ suscribe.style.display = "none"; },500);
  break;
  }
}
