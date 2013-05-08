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
circle.fill = "#228B22";

setInterval(function() {
  direction = direction === 'expand' ? 'contract' : 'expand';
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