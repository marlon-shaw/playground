$(document).ready(function () {
  var 
    $dollarContainer = $('#dollar-icon'),
    $docContainer = $('#documentIcon')
    $topDollar = $('.top-dollar'),
    $arcArrows = $('#arc-arrows'),
    $hbContainer = $('#hamburger'),
    $lineOne = $('#line-one'),
    $lineTwo = $('#line-two'),
    $lineThree = $('#line-three'),
    $lines = [$lineOne, $lineTwo, $lineThree],
    $pen = $('#pen')
    //$documentIcon = $('#documentIcon')
    ;
  
  

  //create a tl
  var dollarTlEnter = new TimelineMax();
  var dollarTlExit = new TimelineMax();
  var docTlEnter = new TimelineMax();
  var docTlExit = new TimelineMax();
  var toggleMenu = new TimelineMax({paused: true, reversed:true});
    
    dollarTlEnter
    .set($topDollar,{rotation:15, transformOrigin:"50% 50%"})
      $($dollarContainer).mouseenter(function () {
        console.log('You hovered the dollar');
        dollarTlEnter             
          .to($topDollar, 1, {rotation: "+=5", transformOrigin: "50% 50%", ease:Power1.easeOutIn}, "rotateDollar")
          .to($arcArrows, 1,{rotation:20, transformOrigin:"center"},"-=.25")      
      });
    dollarTlExit
      $($dollarContainer).mouseleave(function(){
        console.log('You are no longer hovering dollar');
          dollarTlExit
          .to($topDollar, 0.75, { rotation: "-=5", transformOrigin: "50% 50%", ease:Power1.easeInOut}, "-=rotateDollar")
          .to($arcArrows, 1,{rotation:0, transformOrigin:"center"},"-=rotateDollar");
      });
      
    docTlEnter
      $($docContainer).mouseenter(function(){
        console.log('You have entered Doc');
        docTlEnter
          .to($pen, {duration:0.75, rotation:5, transformOrigin: "bottom right", yoyo:true, repeat:-1})
        });
    docTlExit
      $($docContainer).mouseleave(function(){
        console.log('You have exited Doc');
        docTlExit
          .to($pen, {duration:0.75, rotation:-15, transformOrigin: "bottom right"})
      });

    toggleMenu
      $($hbContainer).click(function(){
        console.log('You have clicked the menu');
        toggleMenu
          .to($lineTwo, 0.1250, {scaleX: 0})
          .to($lineOne, 0.1250, {rotation: 45, transformOrigin: "50% 50%", y:8}, "axis")
          .to($lineThree, 0.1250, {rotation: -45, transformOrigin: "50% 50%", y: -8},"axis");
          if(toggleMenu.reversed() === true){
            toggleMenu.play()
          }else{
            toggleMenu.reverse();
          }
    });  
});