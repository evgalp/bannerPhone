var banner = document.getElementById('banner');
var rangeContainer = banner.querySelector('.range-container')
var range = rangeContainer.querySelector('.range-container__range');
var rangeValueSpan = range.querySelector('.range-values__value--current');

var assetsList = document.querySelector('.assets');
var images = assetsList.querySelectorAll('.asset');

range.setAttribute("min", 0);
range.setAttribute("max", 58);
range.setAttribute("step", 1);
range.setAttribute("value", 0);

range.addEventListener('mousemove', function() {
  document.querySelector('.range-values__value--current').innerHTML = this.value;
  trackChange();
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
