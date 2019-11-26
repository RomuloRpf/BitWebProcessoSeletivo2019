document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
  var elems = document.querySelectorAll('.carousel');
  var options = {duration:1000,dist:0,shift:0}
  var instances = M.Carousel.init(elems,options);
  });