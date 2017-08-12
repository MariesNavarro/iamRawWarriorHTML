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
suscribe = _('suscribe'),
titCos = _('titCos'),
menuBo = _('menuBo'),
changeNumCos = _('changeNumCos'),
imgBtnInfo = _('imgBtnInfo'),
infoBtnW = _('infoBtnW'),
main = _('main'),
videoInfoContainer = _('videoInfoContainer'),
imgExercises = _('imgExercises'),
imgComment = _('imgComment'),
inner = _('inner'),
subInner = _('subInner'),
backToInner = _('backToInner'),
textCosmic = _('textCosmic'),
bulletCosmic = __('bulletCosmic'),
menuBtn = _('menuBtn');
navDom.style.opacity = "1";
footerDom.style.opacity = "1";

if(checkMobileIndex){
  console.log("Mobile cosmic");
  window.onload = function(){
    setInnerMenuMobile();
    setFooterHoverMobile();
    diveDeep.setAttribute('onclick', 'diveDeepFun(1)');
    backToInner.setAttribute('onclick', 'diveDeepFun(2)');
  }
} else{
  window.onload = function(){
    setInnerMenu();
    setFooterHover();
    loadInfoJson();
    diveDeep.setAttribute('onclick', 'diveDeepFun(3)');
    backToInner.setAttribute('onclick', 'diveDeepFun(4)');
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

function sliderCosmic(b, i){
  var num = [];
  if(i == 0){
    num = 1;
  } else {
    num = (i + 1);
  }
  changeNumCos.innerHTML = num;
  if(b === true){
      countSuscribe++;
      if(countSuscribe === 3){
        countSuscribe = 0;
        showSuscribe(1);
      }
    titCos.innerHTML = infoCos.e[i].tit;
    textCosmic.innerHTML = infoCos.e[i].info;
    videoUrl = infoCos.e[i].url;
    allUrl = endpoint + '?url=' + encodeURIComponent(videoUrl) + '&callback=' + callback + '&width=840' + '&color=f6eeda';
    loadVimeo(allUrl);
  } else {
    titCos.innerHTML = infoCos.e[i].tit;
    textCosmic.innerHTML = infoCos.e[i].info;
    videoUrl = infoCos.e[i].url;
    allUrl = endpoint + '?url=' + encodeURIComponent(videoUrl) + '&callback=' + callback + '&width=840' + '&color=f6eeda';
    loadVimeo(allUrl);
  }
}

function arrSliderCos(c){
  if(urlValue > 0) countSlider = urlValue;
  switch (c) {
    case 0:
    countSlider--;
    if (countSlider < 0) countSlider = 17;
    sliderCosmic(urlindex, countSlider);
    break;
    case 1:
      countSlider++;
      if (countSlider > 17) countSlider = 0;
      sliderCosmic(urlindex, countSlider);
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
  //console.log("Vimeo is loaded");
}

function prevDup(){
  var dup = document.getElementById('vimeoScriptOld');
  if(dup) headDom.removeChild(dup);
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
}


function showInfo(c){
    switch (c) {
    case "open":
      infoOpen = true;
      infoBtnW.style.display = "none";
      main.style.left = widthInfo + "%";
      videoInfoContainer.style.width = widthInfo + "vw";
      videoInfoContainer.style.left = "0";
    break;
    case "close":
      infoOpen = false;
      infoBtnW.style.display = "block";
      main.style.left = "0";
      videoInfoContainer.style.width = widthInfo + "vw";
      videoInfoContainer.style.left = -widthInfo + "%";
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
