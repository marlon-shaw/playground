$(document).ready(function () {
  var 
    $dollarContainer = $('#dollar-icon'),
    $docContainer = $('#documentIcon')
    $topDollar = $('#top-dollar'),
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
      $($dollarContainer).mouseenter(function () {
        console.log('You hovered the dollar');
        dollarTlEnter 
          .to($topDollar, 1, {rotation: 18, transformOrigin:"center"})      
      });
    dollarTlExit
      $($dollarContainer).mouseleave(function(){
        console.log('You are no longer hovering dollar');
          dollarTlExit
          .to($topDollar, 1, { rotation: 0, transformOrigin: "center" });
        
      });
      
    docTlEnter
      $($docContainer).mouseenter(function(){
        console.log('You have entered Doc');
        });
    docTlExit
      $($docContainer).mouseleave(function(){
        console.log('You have exited Doc');
      });

    toggleMenu
      $($hbContainer).click(function(){
        console.log('You have clicked the menu');
        toggleMenu
          .to($lineTwo, .1250, {scaleX: 0})
          .to($lineOne, .1250, {rotation: 45, transformOrigin: "50% 50%", y:8}, "axis")
          .to($lineThree, .1250, {rotation: -45, transformOrigin: "50% 50%", y: -8},"axis");
          if(toggleMenu.reversed() === true){
            toggleMenu.play()
          }else{
            toggleMenu.reverse();
          }
    });
      

  
});