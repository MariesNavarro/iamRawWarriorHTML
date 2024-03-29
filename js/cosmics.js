var linkDomHomeMobile = document.createElement('LINK');
linkDomHomeMobile.rel  = 'stylesheet';
linkDomHomeMobile.type = 'text/css';
linkDomHomeMobile.href = "css/homeMobile.css";
var rotationBlock = true;
var openFoot = false;
var footerDom = document.getElementsByTagName("FOOTER")[0],
    navDom = document.getElementsByTagName("NAV")[0],
    body = document.getElementsByTagName("BODY")[0],
countSuscribe = 0,
countSlider = 0,
infoCos,
endpoint = 'http://www.vimeo.com/api/oembed.json',
callback = 'embedVideo',
videoUrl,
allUrl,
loading = _('loading'),
embed = _('embed'),
swipeEl = _('swipeEl'),
percentage = _('percentage'),
arrowLeftDesk = _('arrowLeftDesk'),
arrowRightDesk = _('arrowRightDesk'),
suscribe = _('suscribeW'),
playBMobVimeo = _('playBMobVimeo'),
titCos = _('titCos'),
menuBo = _('menuBo'),
instructionMobile = _('instructionMobile'),
videoContainer = _('videoContainer'),
changeNumCos = _('changeNumCos'),
imgBtnInfo = _('imgBtnInfo'),
infoBtnW = _('infoBtnW'),
main = _('main'),
videoInfoContainer = _('videoInfoContainer'),
imgExercises = _('imgExercises'),
imgComment = _('imgComment'),
inner = _('inner'),
bulletInterface = __('bulletInterface')[0],
subInner = _('subInner'),
backToInner = _('backToInner'),
textCosmic = _('textCosmic'),
bulletCosmic = __('bulletCosmic'),
btnExercises = _('btnExercises'),
shareFbCos = __('shareFbCos'),
btnDisqus = _('btnDisqus'),
swipeCosmic = _('swipeCosmic'),
disqus = __('disqus'),
menuBtn = _('menuBtn');
navDom.style.opacity = "1";
footerDom.style.opacity = "1";



if(checkMobileIndex){
  window.onload = function(){
    //Quitar onclick bullets en movil
    for (var i = 0; i < bulletCosmic.length; i++) {
      bulletCosmic[i].setAttribute('onclick', ' ');
    }
    instructionMobile.style.display = "block";
    setTimeout(function(){
      instructionMobile.style.opacity = "1";
    },500);
    //Mobile disqus wrap
    for (var i = 0; i < disqus.length; i++) {
      disqus[i].classList.remove('hideDisqus');
      disqus[i].classList.add('disqusMobile');
      disqus[i].classList.add('hideDisqusMobile');
    }
    setInnerMenuMobile();
    setFooterHoverMobile();
    loadInfoJson();
    videoContainer.style.width = "100%";
    videoContainer.style.left = "0";
    arrowRightDesk.style.display = "none";
    arrowLeftDesk.style.display = "none";
    footerDom.style.display = "none";
    bulletInterface.style.width = "100%";
    bulletInterface.style.margin = "-50px auto";
    infoBtnW.style.left = "calc(50vw - 15px)";
    infoBtnW.style.bottom = "-5px";
    //info
    widthInfo = 100;
    infoBtnW.style.display = "block";
    main.style.left = "0";
    videoInfoContainer.style.width = widthInfo + "vw";
    videoInfoContainer.style.left = -widthInfo + "%";


    diveDeep.setAttribute('onclick', 'diveDeepFun(1)');
    backToInner.setAttribute('onclick', 'diveDeepFun(2)');
    loadingPercentage();
    headDom.appendChild(linkDomHomeMobile);
  }
} else{
  window.onload = function(){
    instructionMobile.style.display = "none";
    swipeCosmic.style.display = "none";
    setInnerMenu();
    setFooterHover();
    loadInfoJson();
    diveDeep.setAttribute('onclick', 'diveDeepFun(3)');
    backToInner.setAttribute('onclick', 'diveDeepFun(4)');
    loadingPercentage();
  }
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
  infoBtnW.style.display = "none";
  inner.style.display = "block";
  setTimeout(function(){ inner.style.opacity = "1"; },500);
  break;
  case 2:
  infoBtnW.style.display = "block";
  inner.style.opacity = "0";
  setTimeout(function(){ inner.style.display = "none"; },700);
  break;
  }
}

var countPercentage = 1;
var percentageComplete = false;
function loadingPercentage(){
  var countSet = setInterval(function(){
    countPercentage++;
    percentage.innerHTML = countPercentage + '%';
    if(countPercentage>99){
      countPercentage = 100;
      stopSet();
      percentageComplete = true;
    }
  },300);

  function stopSet(){
    clearInterval(countSet);
  }
}

function loadInfoJson(){
  var req;
  if(window.XMLHttpRequest){
  	req = new XMLHttpRequest();
  } else {
  	req = new ActiveObject("Microsoft.XMLHTTP");
  }
  req.open('GET', 'js/info.json');
  req.onreadystatechange = function (){
    if((req.status === 200) && (req.readyState === 4)){
      infoCos = JSON.parse(req.responseText);
      sliderCosmic(urlindex, urlValue);
    }
  }
  req.send();
}

document.onkeydown = function(evt) {
  var k = evt.keyCode;
  switch (k) {
    case 27:
      showSuscribe(2);
    break;
    case 37:
    break;
    case 39:
    break;
  }
};

var countInitSuscribe = true;
var iframeDom = document.createElement('IFRAME');
function sliderCosmic(b, i){
  //count subscribe
  if(countInitSuscribe){
    countSuscribe++;
    if(countSuscribe === 4){
      showSuscribe(1);
      countSuscribe = 0;
      countInitSuscribe = false;
    }
  }
  for (var x = 0; x < shareFbCos.length; x++) {
    shareFbCos[x].style.display = "none"
  }
  var num = [];
  if(i == 0){
    num = 1;
  } else {
    num = (i + 1);
  }
  changeNumCos.innerHTML = num;
  if(b === true){
    shareFbCos[i].style.display = "block";
    titCos.innerHTML = infoCos.e[i].tit;
    textCosmic.innerHTML = infoCos.e[i].info;
    // btnExercises.setAttribute('href', infoCos.e[i].exercises);
    btnDisqus.setAttribute('onclick', infoCos.e[i].disqus);
    videoUrl = infoCos.e[i].url;
    if(checkMobileIndex){
      // allUrl = endpoint + '?url=' + encodeURIComponent(videoUrl) + '&callback=' + callback + '&width=840' + '&width=320' + '&color=f6eeda';
    } else {
      allUrl = endpoint + '?url=' + encodeURIComponent(videoUrl) + '&callback=' + callback + '&width=840' + '&color=f6eeda';
    }
    loadVimeo(allUrl);
  } else {
    shareFbCos[i].style.display = "block";
    titCos.innerHTML = infoCos.e[i].tit;
    textCosmic.innerHTML = infoCos.e[i].info;
    // btnExercises.setAttribute('href', infoCos.e[i].exercises);
    btnDisqus.setAttribute('onclick', infoCos.e[i].disqus);
    videoUrl = infoCos.e[i].url;
    if(checkMobileIndex){
      // allUrl = endpoint + '?url=' + encodeURIComponent(videoUrl) + '&callback=' + callback + '&width=840' + '&width=320' + '&color=f6eeda';
    } else {
      allUrl = endpoint + '?url=' + encodeURIComponent(videoUrl) + '&callback=' + callback + '&width=840' + '&color=f6eeda';
    }
    loadVimeo(allUrl);
  }
  for (var j = 0; j < bulletCosmic.length; j++) {
    bulletCosmic[j].classList.remove('scaleUp');
  }
  bulletCosmic[i].classList.add('scaleUp');
}

function arrSliderCos(c){
  if(c === 0) countSlider--;
  if(countSlider < 0 ) countSlider = 17;
  if(c === 1) countSlider++;
  if(countSlider > 17) countSlider = 0;
  sliderCosmic(urlindex, countSlider)
}


function vimeoMobileLoad(){
  console.log("Mobile vimeo loaded");
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

detectswipe('interface', swipeTransform);

//DOUBLE TAP
// var tapedTwice = false;
// swipeEl.addEventListener("touchstart", tapHandler);
// function tapHandler(event) {
//     if(!tapedTwice) {
//         tapedTwice = true;
//         setTimeout( function() { tapedTwice = false; }, 300 );
//         return false;
//     }
//     event.preventDefault();
//     console.log('You tapped me Twice !!!');
//  }

var countSwipe = 0;
function swipeTransform(el,d) {
  if(d == "l") {
      sliderCosmic(countSwipe,countSwipe);
      sliderMobileVimeo(countSwipe);
      countSwipe++;
      if(countSwipe>=18) countSwipe = 0;
      console.log("Valor de count" + countSwipe);
  } //l
  if(d == "r"){
    sliderCosmic(countSwipe,countSwipe);
    sliderMobileVimeo(countSwipe)
    countSwipe--;
    if(countSwipe<=0) countSwipe = 17;
    console.log("Valor de count" + countSwipe);
  } //r
}

//playBMobVimeo
function sliderMobileVimeo(c){
  switch (c) {
  case 0:
    vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/226627921?api=1&player_id=cosmicv');
    // playBMobVimeo.href = "http://www.vimeo.com/226627921";
    // swipeEl.style.backgroundImage = "url('img/sliderCosmic/0.jpg')";
  break;
  case 1:
    vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/226629389?api=1&player_id=cosmicv');
    // playBMobVimeo.href = "http://vimeo.com/226629389";
    // swipeEl.style.backgroundImage = "url('img/sliderCosmic/1.jpg')";
  break;
  case 2:
    vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/226631176?api=1&player_id=cosmicv');
    // playBMobVimeo.href = "http://www.vimeo.com/226631176";
    // swipeEl.style.backgroundImage = "url('img/sliderCosmic/2.jpg')";
  break;
  case 3:
    vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/226632661?api=1&player_id=cosmicv');
    // playBMobVimeo.href = "http://www.vimeo.com/226632661";
    // swipeEl.style.backgroundImage = "url('img/sliderCosmic/3.jpg')";
  break;
  case 4:
    vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/226634119?api=1&player_id=cosmicv');
    // swipeEl.style.backgroundImage = "url('img/sliderCosmic/4.jpg')";
  break;
  case 5:
  vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/226645164?api=1&player_id=cosmicv');
  // swipeEl.style.backgroundImage = "url('img/sliderCosmic/5.jpg')";
  break;
  case 6:
  vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/226635739?api=1&player_id=cosmicv');
  // swipeEl.style.backgroundImage = "url('img/sliderCosmic/6.jpg')";
  break;
  case 7:
  vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/226637359?api=1&player_id=cosmicv');
  // swipeEl.style.backgroundImage = "url('img/sliderCosmic/7.jpg')";
  break;
  case 8:
  vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/226639104?api=1&player_id=cosmicv');
  // swipeEl.style.backgroundImage = "url('img/sliderCosmic/8.jpg')";
  break;
  case 9:
  vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/227661329?api=1&player_id=cosmicv');
  // swipeEl.style.backgroundImage = "url('img/sliderCosmic/9.jpg')";
  break;
  case 10:
  vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/226629389?api=1&player_id=cosmicv');
  // swipeEl.style.backgroundImage = "url('img/sliderCosmic/10.jpg')";
  break;
  case 11:
  vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/226642650?api=1&player_id=cosmicv');
  // swipeEl.style.backgroundImage = "url('img/sliderCosmic/11.jpg')";
  break;
  case 12:
  vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/227663079?api=1&player_id=cosmicv');
  // swipeEl.style.backgroundImage = "url('img/sliderCosmic/12.jpg')";
  break;
  case 13:
  vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/227664801?api=1&player_id=cosmicv');
  // swipeEl.style.backgroundImage = "url('img/sliderCosmic/13.jpg')";
  break;
  case 14:
  vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/227666623?api=1&player_id=cosmicv');
  // swipeEl.style.backgroundImage = "url('img/sliderCosmic/14.jpg')";
  break;
  case 15:
  vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/227670135?api=1&player_id=cosmicv');
  // swipeEl.style.backgroundImage = "url('img/sliderCosmic/15.jpg')";
  break;
  case 16:
  vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/227666622?api=1&player_id=cosmicv');
  // swipeEl.style.backgroundImage = "url('img/sliderCosmic/16.jpg')";
  break;
  case 17:
  vimeoFrame.setAttribute('src', 'https://player.vimeo.com/video/227672132?api=1&player_id=cosmicv');
  // swipeEl.style.backgroundImage = "url('img/sliderCosmic/17.jpg')";
  break;
  }
}

function unBindBulletCosmic(c){
  switch (c) {
    case 0:
      countSlider = 0;
      sliderCosmic(0,0);
    break;
    case 1:
      countSlider = 1;
      sliderCosmic(1,1);
    break;
    case 2:
      countSlider = 2;
      sliderCosmic(2,2);
    break;
    case 3:
      countSlider = 3;
      sliderCosmic(3,3);
    break;
    case 4:
      countSlider = 4;
      sliderCosmic(4,4);
    break;
    case 5:
      countSlider = 5;
      sliderCosmic(5,5);
    break;
    case 6:
      countSlider = 6;
      sliderCosmic(6,6);
    break;
    case 7:
      countSlider = 7;
      sliderCosmic(7,7);
    break;
    case 8:
      countSlider = 8;
      sliderCosmic(8,8);
    break;
    case 9:
      countSlider = 9;
      sliderCosmic(9,9);
    break;
    case 10:
      countSlider = 10;
      sliderCosmic(10,10);
    break;
    case 11:
      countSlider = 11;
      sliderCosmic(11,11);
    break;
    case 12:
      countSlider = 12;
      sliderCosmic(12,12);
    break;
    case 13:
      countSlider = 13;
      sliderCosmic(13,13);
    break;
    case 14:
      countSlider = 14;
      sliderCosmic(14,14);
    break;
    case 15:
      countSlider = 15;
      sliderCosmic(15,15);
    break;
    case 16:
      countSlider = 16;
      sliderCosmic(16,16);
    break;
    case 17:
      countSlider = 17;
      sliderCosmic(17,17);
    break;
  }
}

function loadVimeo(url) {
  prevDup();
  var js = document.createElement('script');
  js.setAttribute('type', 'text/javascript');
  js.setAttribute('src', url);
  js.setAttribute('id', "vimeoScriptOld");
  setTimeout(function(){ headDom.appendChild(js) },300);
}

function embedVideo(video) {
    document.getElementById('embed').innerHTML = decodeURI(video.html);
    var child = document.getElementById('embed').firstChild;
    child.setAttribute('onload', 'vimeoLoad()');
}

function vimeoLoad(){
  loading.style.display = "none";
}

function prevDup(){
  var dup = document.getElementById('vimeoScriptOld');
  if(dup) headDom.removeChild(dup);
}





function overBtn(c){
  switch (c) {
  case "overEx":
    imgExercises.setAttribute('src', 'img/icons/exercises_h.svg');
  break;
  case "outEx":
    imgExercises.setAttribute('src', 'img/icons/exercises.svg');
  break;
  case "overCm":
    imgComment.setAttribute('src', 'img/icons/comment_h.svg');
  break;
  case "outCm":
    imgComment.setAttribute('src', 'img/icons/comment.svg');
  break;
  }
}
function infoOver(c){
  switch (c) {
  case 1:
  imgBtnInfo.setAttribute('src', 'img/icons/info_h.svg');
  break;
  case 2:
  imgBtnInfo.setAttribute('src', 'img/icons/info.svg');
  break;
  }
}

var widthInfo = 60;
var infoOpen = false;
window.onresize = function(){
  var size = document.getElementById('size').innerHTML = "Width: " + innerWidth + " Height: " + innerHeight;
  if(window.innerWidth > 660){
    widthInfo = 60;
    if(infoOpen){
      showInfo("open");
    } else {
      showInfo("close");
    }
  } else {
    widthInfo = 100;
    if(infoOpen){
      showInfo("open");
    } else {
      showInfo("close");
    }
  }
  if(checkMobileIndex){
     newWidthVimeo = vimeoWrap.offsetWidth;
     vimeoFrame.setAttribute('width', newWidthVimeo);
     ratioVimeo = vimeoFrame.getAttribute('data-ratio');
     heightFrameWeb  = ratioVimeo * newWidthVimeo;
     vimeoFrame.setAttribute('height', heightFrameWeb);
  }
}


function showInfo(c){
    switch (c) {
    case "open":
      infoOpen = true;
      if(checkMobileIndex){
          widthInfo = 100;
          infoBtnW.style.display = "none";
          main.style.left = widthInfo + "%";
          videoInfoContainer.style.width = widthInfo + "vw";
          videoInfoContainer.style.left = "0";
      } else {
      infoBtnW.style.display = "none";
      main.style.left = widthInfo + "%";
      videoInfoContainer.style.width = widthInfo + "vw";
      videoInfoContainer.style.left = "0";
    }
    break;
    case "close":
      infoOpen = false;
      if(checkMobileIndex){
        widthInfo = 100;
        infoBtnW.style.display = "block";
        main.style.left = "0";
        videoInfoContainer.style.width = widthInfo + "vw";
        videoInfoContainer.style.left = -widthInfo + "%";
      } else {
      infoBtnW.style.display = "block";
      main.style.left = "0";
      videoInfoContainer.style.width = widthInfo + "vw";
      videoInfoContainer.style.left = -widthInfo + "%";
    }
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

function setFooterHover(){
  overFooterBtn.setAttribute('onmouseover', 'footerHover(1)');
  overFooterBtn.setAttribute('onmouseout', 'footerHover(2)');
  overFooterBtn.setAttribute('onclick', 'footerClick()');
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


function changeIcon(c, e){
  switch (c) {
  case 'over':
    e.setAttribute('src', 'img/icons/facebookE_hover.svg');
  break;
  case 'out':
    e.setAttribute('src', 'img/icons/facebookE.svg');
  break;
  case 'overT':
    e.setAttribute('src', 'img/icons/twitterE_hover.svg');
  break;
  case 'outT':
    e.setAttribute('src', 'img/icons/twitterE.svg');
  break;
  }
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



var scriptDisqus = document.createElement('SCRIPT');
    scriptDisqus.id  = 'dsq-count-scr';
    scriptDisqus.defer = 'defer';

var objectDom = document.createElement('OBJECT');
objectDom.type = "text/html";



// commentsDisqus[n].appendChild(objectDom);

/* Disqus */
function disqusCosmics(i, state){
    if(state === true){
      disqus[i].classList.remove('hideDisqus');
      disqus[i].classList.add('showDisqus');
      if(checkMobileIndex){
        disqus[i].classList.remove('hideDisqusMobile');
        disqus[i].classList.add('showDisqusMobile');
      }
    } else {
      disqus[i].classList.remove('showDisqus');
      disqus[i].classList.add('hideDisqus');
      if(checkMobileIndex){
        disqus[i].classList.remove('showDisqusMobile');
        disqus[i].classList.add('hideDisqusMobile');
      }
    }
  switch (i) {
    case 0:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
    case 1:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
    case 2:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
    case 3:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
    case 4:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
    case 5:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
    case 6:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
    case 7:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
    case 8:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
    case 9:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
    case 10:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
    case 11:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
    case 12:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
    case 13:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
    case 14:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
    case 15:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
    case 16:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
    case 17:
      objectDom.setAttribute('data', 'disqus/cthread'+ i +'.html');
      disqus[i].appendChild(objectDom);
    break;
  }
}


var vimeoWrap = _('vimeoWrap'),
 vimeoFrame = _('vimeoFrame'),
 heightFrameWeb;
var newWidthVimeo = vimeoWrap.offsetWidth,
    wOriginVimeo = vimeoFrame.getAttribute('width'),
    hOriginVimeo = vimeoFrame.getAttribute('height');
vimeoFrame.setAttribute('data-ratio', hOriginVimeo / wOriginVimeo);
var ratioVimeo = vimeoFrame.getAttribute('data-ratio');

setTimeout(function(){
  vimeoFrame.setAttribute('width', newWidthVimeo);
  heightFrameWeb  = ratioVimeo * newWidthVimeo;
  vimeoFrame.setAttribute('height', heightFrameWeb);
},1000);


function frameLoad(){
  if(checkMobileIndex){
    setTimeout(function(){
      loading.style.display = "none";
    },1000);
  }
}


function instructionsNone(){
  instructionMobile.style.display = "none";
  rotationBlock = false;
}
