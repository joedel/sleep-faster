var settings = { fullscreen: true },
    two = new Two(settings).appendTo(document.body),
    height = two.height,
    width = two.width,
    circle = two.makeCircle(width/2, height/2, 10),
    scale = 1,
    breathIn = 4000,
    breathOut = 4000;
    direction = 'expand';

circle.linewidth = 0;
circle.fill = '#228B22';

var maxPixel = width < height ? height : width;
var maxScale = maxPixel / 10;
var paramString = window.location.search.substr(1);
var paramArray = paramString.split('&');
var params = {};

for (var i = 0; i < paramArray.length; i++) {
  var p = paramArray[i].split('=');
  params[p[0]] = p[1];
}
setBreath();


setInterval(function() {
  direction = direction === 'expand' ? 'contract' : 'expand';
  console.log(circle.scale);
}, breathIn);

two.play();

two.bind('update', expandContract);

function expandContract() {
  if (direction === 'expand') {
    scale += 0.15;
    circle.scale = scale;
  }

  if (direction === 'contract') {
    scale -= 0.15;
    circle.scale = scale;
  }
}

function setBreath() {
  if (params.breathIn) {
    breathIn = params.breathIn * 1000;
  }

  if (params.breathOut) {
    breathOut = params.breathOut * 1000;
  }
}