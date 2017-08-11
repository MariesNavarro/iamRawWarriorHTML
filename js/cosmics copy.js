var openFoot = false;
var footerDom = document.getElementsByTagName("FOOTER")[0],
    navDom = document.getElementsByTagName("NAV")[0],
    body = document.getElementsByTagName("BODY")[0],

    countSlider = 0,
    infoCos,
    titCos = _('titCos'),
    endpoint = 'http://www.vimeo.com/api/oembed.json',
    callback = 'embedVideo',
    videoUrl,
    allUrl,

imgBtnInfo = _('imgBtnInfo'),
infoBtnW = _('infoBtnW'),
main = _('main'),
videoInfoContainer = _('videoInfoContainer'),
imgExercises = _('imgExercises'),
imgComment = _('imgComment'),
inner = _('inner'),
subInner = _('subInner'),
backToInner = _('backToInner'),
menuBtn = _('menuBtn');
navDom.style.opacity = "1";
footerDom.style.opacity = "1";

if(checkMobileIndex){
  console.log("Mobile cosmic");
  window.onload = function(){
    setInnerMenuMobile();
    setFooterHoverMobile();
  }
} else{
  window.onload = function(){
    setInnerMenu();
    setFooterHover();
    loadInfoJson();
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

function sliderCosmic(b, i){
  if(b === true){
    console.log(i);
    titCos.innerHTML = infoCos.e[i].tit;
    videoUrl = infoCos.e[i].url;
    allUrl = endpoint + '?url=' + encodeURIComponent(videoUrl) + '&callback=' + callback + '&width=840' + '&color=f6eeda';
    loadVimeo(allUrl);
  } else {
    console.log(i);
    titCos.innerHTML = infoCos.e[i].tit;
    videoUrl = infoCos.e[i].url;
    allUrl = endpoint + '?url=' + encodeURIComponent(videoUrl) + '&callback=' + callback + '&width=840' + '&color=f6eeda';
    loadVimeo(allUrl);
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
function showInfo(){
  main.style.left = "60%";
  videoInfoContainer.style.left = "0";
  infoBtnW.style.display = "none";
}
function hideInfo(){
  main.style.left = "0";
  videoInfoContainer.style.left = "-60%";
  infoBtnW.style.display = "block";
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
