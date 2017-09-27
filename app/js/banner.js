function parseDom() {
  var elems = (function(doc) {
    var banner = doc.getElementById('banner');
    var rangeContainer = banner.querySelector('.range-container')
    var range = rangeContainer.querySelector('.range-container__range');
    var rangeValueSpan = range.querySelector('.range-values__value--current');

    var assets = document.querySelector('.assets');
    var images = assets.querySelectorAll('.asset');

    // console.log(images);

    return {banner, rangeContainer, range, rangeValueSpan, assets, images};
  })(document);

  return elems;
}

function configureRange(elems) {
  elems.range.setAttribute("min", 0);
  elems.range.setAttribute("max", 58);
  elems.range.setAttribute("step", 1);
  elems.range.setAttribute("value", 0);

  return elems;
}

function trackRangeValue(elems){
  elems.range.addEventListener('mousemove', function() {
    document.querySelector('.range-values__value--current').innerHTML = this.value;
  });
}

function showPic(elems){
  var x =elems.images
  console.log(x);
}

window.onload = function() {
  var elements = parseDom();
  configureRange(elements);
  trackRangeValue(elements);
  showPic(elems);
}
