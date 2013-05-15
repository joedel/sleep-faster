var twoSettings = { fullscreen: true },
    two = new Two(twoSettings).appendTo(document.body),
    height = two.height,
    width = two.width,
    square = two.makeRectangle(width/2, height/2, 10, 10),
    direction = 'expand',
    maxPixel = width < height ? height : width,
    maxScale = maxPixel / 10,
    params = {},
    settings = {};

paramSettings();

var scalePerFrameIn = maxScale /  (settings.breathIn * 60);
var scalePerFrameOut = maxScale / (settings.breathOut * 60);

two.play();
two.bind('update', expandContract);

function expandContract(frameCount) {
  var scale = square.scale;
  switch (direction) {
    case 'expand':
      scale += scalePerFrameIn;
      square.scale = scale;
      if (scale >= maxScale) { direction = 'contract'; }
      break;
    case 'contract':
      scale -= scalePerFrameOut;
      square.scale = scale;
      if (scale <= 1) { direction = 'expand'; }
      break;
  }
}

function paramSettings() {
  square.linewidth = 0;

  var paramArr = window.location.search.substr(1).split('&');
  for (var i = 0; i < paramArr.length; i++) {
    var p = paramArr[i].split('=');
    params[p[0]] = p[1];
  }

  if (params.breathIn) {
    settings.breathIn = params.breathIn;
  } else {
    settings.breathIn = 4;
  }

  if (params.breathOut) {
    settings.breathOut = params.breathOut;
  } else {
    settings.breathOut = 4;
  }

 // if (params.scale) {
 //   square.scale = params.scale;
 // } else {
    square.scale = 1;
 // }

  if (params.color) {
    square.fill = "#" + params.color;
  } else {
    square.fill = '#228B22';
  }
}