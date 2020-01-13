$(document).ready(function () {
  var 
    $dollarIcon = $('#dollar-icon'),
    $topDollar = $('#top-dollar')
    ;

  var tml = new TimelineMax({});

  $($dollarIcon).mouseenter(function () {
    console.log('You hovered the dollar');
    tml
      .to($topDollar, 1, {rotation: 18, transformOrigin:"center"})
      .to($topDollar, 1, { rotation: 0, transformOrigin: "center" });
    //return tml;
  });
  $($dollarIcon).mouseleave(function(){
    
  });
});