/* any settings that need to change prior to foundation getting initialized go here. */
//
// for example:
// Foundation.Accordion.defaults.allowAllClosed = true;
// Foundation.Abide.defaults.patterns['tel'] = /^\(?\d{3}\)?[\s+|-]?\d{3}[\s+|-]?\d{4}/;
// 

$(document).foundation(); 

TweenLite.set(overlay, {y:0, yPercent:-100});

$('#open').on('click',
  function() {
    TweenMax.to(overlay, 0.8, {
      yPercent: 0
    });
  });

$('#close').on('click',
  function() {
    TweenMax.to(overlay, 0.8, {
      yPercent: -100
    });
  });