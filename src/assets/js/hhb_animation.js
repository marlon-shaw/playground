
$(document).ready(function () {
  var 
    $dollarContainer = $('#dollar-icon'),
    $docContainer = $('#documentIcon'),
    $phoneContainer = $('#phone-container'),
    $doorContainer = $('#door-container'),
    $hbContainer = $('#hamburger'),
    $phoneHand = $('#phone-hand'),
    $topDollar = $('.top-dollar'),
    $arcArrows = $('#arc-arrows'),
    
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
  var phoneEnter = new TimelineMax();
  var phoneExit = new TimelineMax();
  var dollarTlEnter = new TimelineMax();
  var dollarTlExit = new TimelineMax();
  var docTlEnter = new TimelineMax();
  var docTlExit = new TimelineMax();
  var toggleMenu = new TimelineMax({paused: true, reversed:true});

   $($phoneContainer).mouseenter(function(){
     phoneEnter
      .to($phoneHand, 1,{rotation:"+=5",transformOrigin: "bottom right", ease:Power1.easeInOut})
   });

   $($phoneContainer).mouseleave(function(){
     phoneEnter
      .to($phoneHand, 1,{rotation:"-=5",transformOrigin: "bottom right", ease:Power1.easeOutIn})
   });
    
    
    
    //.set($topDollar,{rotation:8, transformOrigin:"50% 50%"})
      $($dollarContainer).mouseenter(function () {
        //console.log('You hovered the dollar');
        dollarTlEnter
          //.fromTo($blobOne,{scaleY:.75},{scaleY:.9, duration:.5, ease:Power1.easeInOut, transformOrigin:"center center"})
          .to($blobOne, 1,{rotation:"+=.5",transformOrigin: "center center", ease:Power1.easeInOut})           
          .fromTo($topDollar, {rotation:4}, {rotation:10, duration:.6, ease:Power1.easeInOut, transformOrigin:"center center"},"-=.75")
          .fromTo($arcArrows, {rotationX:"0"},{rotation:20, duration:.5, transformOrigin:"center center"},"-=1")   
           
          
      });
    
      $($dollarContainer).mouseleave(function(){
        //console.log('You are no longer hovering dollar');
          dollarTlExit
          .to($arcArrows, .5,{rotation:0, transformOrigin:"center center",ease:Power1.easeInOut},"rollBack")
          //.fromTo($blobOne, {scaleY:1},{scaleY:.85,duration:1,ease:Power1.easeInOut}, "-=.5")
          .to($blobOne, 1,{rotation:"-=.5",transformOrigin: "center center", ease:Power1.easeInOut})
          .to($topDollar, .5, { rotation:4, ease:Power1.easeInOut},"-=rollBack")         
          
      });
      
    
      $($docContainer).mouseenter(function(){
        //console.log('You have entered Doc');        
        docTlEnter

            .from($pen, .75, { x:-6, y:3})
            .to($blobTwo, .75,{rotation:5, transformOrigin:"center center",ease:Power1.easeOutIn})
            //.fromTo($blobTwo, {scaleX:0},{scaleX:.25,transformOrigin:"center center",duration:1})
            .to($docShadow,{x:-20,ease:Power1.easeOutIn},"moveShadow")
            //.fromTo($docShadow,{x:0},{x:-20,ease:Power1.easeOutIn},"moveShadow")
        });
    
      $($docContainer).mouseleave(function(){
        //console.log('You have exited Doc');
        docTlExit
          .to($blobTwo, 1.5,{rotation:-5, transformOrigin:"center center",ease:Power1.easeInOut})
          .fromTo($docShadow,{x:-15},{x:0, duration:.75},"-=moveShadow")
          .to($pen, 1,{x:0, y:0, ease:Power1.easeOutIn})
          
          
      });

    
      $($hbContainer).click(function(){
        //console.log('You have clicked the menu');
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