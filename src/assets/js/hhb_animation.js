
$(document).ready(function () {
  var 
    $dollarContainer = $('#dollar-icon'),
    $docContainer = $('#documentIcon'),
    $phoneContainer = $('#phone-container'),
    $topDollar = $('.top-dollar'),
    $arcArrows = $('#arc-arrows'),
    $hbContainer = $('#hamburger'),
    $blobOne = $('.blob1'),
    $blobTwo = $('.blob2'),
    $docShadow = $('.document-shadow'),
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

  //tl.to('#phone-hand', 1,{rotation:+=5,transformOrigin: "80% 2%"})
    
    dollarTlEnter
    //.set($topDollar,{rotation:8, transformOrigin:"50% 50%"})
      $($dollarContainer).mouseenter(function () {
        console.log('You hovered the dollar');
        dollarTlEnter
          .fromTo($blobOne,{scaleY:.75},{scaleY:.9, duration:.5, ease:Power1.easeInOut, transformOrigin:"center center"})              
          .fromTo($topDollar, {rotation:5}, {rotation:20, duration:.6, ease:Power1.easeInOut, transformOrigin:"center center"},"-=.75")
          .fromTo($arcArrows, {rotationX:"0"},{rotation:20, duration:.5, transformOrigin:"center center"},"-=1")   
           
          
      });
    dollarTlExit
      $($dollarContainer).mouseleave(function(){
        console.log('You are no longer hovering dollar');
          dollarTlExit
          .to($arcArrows, .5,{rotation:0, transformOrigin:"center center",ease:Power1.easeInOut}, ".8")
          .fromTo($blobOne, {scaleY:1},{scaleY:.85,duration:1,ease:Power1.easeInOut}, "-=.5")
          .to($topDollar, .25, { rotation:6, ease:Power1.easeOutIn},"-=.2")         
          
      });
      
    docTlEnter
      $($docContainer).mouseenter(function(){
        console.log('You have entered Doc');        
        docTlEnter

            .from($pen, .75, { x:-6, y:3})
            .to($blobTwo, .75,{scaleX:1, transformOrigin:"center center"})
            .fromTo($docShadow,{x:0},{x:-20, duration:1.25,ease:Power1.easeOutIn},"moveShadow")
        });
    docTlExit
      $($docContainer).mouseleave(function(){
        console.log('You have exited Doc');
        docTlExit
          .fromTo($docShadow,{x:-15},{x:0, duration:.75},"-=moveShadow")
          .to($pen, 1,{x:0, y:0, ease:Power1.easeOutIn})
          //.fromTo($pen, {x:-20, y:0},{x:0, y:3 ,duration:1, ease:Power2.easeOut})
          
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