var banner = document.getElementById('banner');
var rangeContainer = banner.querySelector('.range-container');
var range = rangeContainer.querySelector('.range-container__range');

var assetsList = document.querySelector('.assets');
var images = assetsList.querySelectorAll('.asset');
var innerAssets = assetsList.querySelectorAll('.asset-inner');
var assetInner = assetsList.querySelector('.asset-inner');
var player = assetsList.querySelector('#player');

var featureText = banner.querySelectorAll('.feature__caption');

range.setAttribute("min", 0);
range.setAttribute("max", 58);
range.setAttribute("step", 1);
range.setAttribute("value", 0);

range.addEventListener('mousemove', function() {
  trackChange();
  changeText();
  changeInnerAsset();
});

function trackChange(){
  var images = assetsList.querySelectorAll('.asset');

  for (i = 0; i < images.length; i++){
    if(range.value == images[i].dataset.asset){
      images[i].classList.add('asset--active');
    } else {
      images[i].classList.remove('asset--active');
    }
  }

}

function changeText(){

  if (range.value < 15) {
    featureText[0].classList.add('feature__caption--active');
    featureText[1].classList.remove('feature__caption--active');
    featureText[2].classList.remove('feature__caption--active');
    featureText[3].classList.remove('feature__caption--active');
  } else if (range.value >= 15 && range.value < 30) {
    featureText[1].classList.add('feature__caption--active');
    featureText[0].classList.remove('feature__caption--active');
    featureText[2].classList.remove('feature__caption--active');
    featureText[3].classList.remove('feature__caption--active');
  } else if (range.value >= 30 && range.value < 45) {
    featureText[2].classList.add('feature__caption--active');
    featureText[0].classList.remove('feature__caption--active');
    featureText[1].classList.remove('feature__caption--active');
    featureText[3].classList.remove('feature__caption--active');
  } else if (range.value >= 45 && range.value < 58) {
    featureText[3].classList.add('feature__caption--active');
    featureText[0].classList.remove('feature__caption--active');
    featureText[1].classList.remove('feature__caption--active');
    featureText[2].classList.remove('feature__caption--active');
  }

}

function changeInnerAsset() {
  if (range.value == 58) {
    setTimeout(function(){
      assetInner.classList.add('asset-inner--active');
    }, 0)
  } else if (range.value == 0) {
    player.classList.add('asset-inner--active');
  } else {
    for (var i = 0; i < innerAssets.length; i++) {
      innerAssets[i].classList.remove('asset-inner--active');
    }
  }
}
