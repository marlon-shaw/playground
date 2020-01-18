
$(document).ready(function () {
  var 
    $dollarContainer = $('#dollar-icon'),
    $docContainer = $('#documentIcon'),
    $phoneContainer = $('#phone-container'),
    $doorContainer = $('#door-container'),
    $hbContainer = $('#hamburger'),
    //$heartOne = $('#heart-1'),
    //$heartThree = $('#heart-3'),
    //$house = $('#bubble-house-1_1_'),
    //$houseOne = $('#bubble-house-1_2_'),
    //$houseTwo = $('#bubble-house-2'),
    $bubbles = $('.bubbles'),
    $topDollar = $('.top-dollar'),
    $arcArrows = $('#arc-arrows'),
    
    $blobOne = $('.blob1'),
    $blobTwo = $('.blob2'),
    $docShadow = $('.document-shadow'),
    $lineOne = $('#line-one'),
    $lineTwo = $('#line-two'),
    $lineThree = $('#line-three'),
    //$hearts = [$heartOne, $heartThree],
    //$houses = [$house, $houseOne, $houseTwo],
    $lines = [$lineOne, $lineTwo, $lineThree],
    $pen = $('#pen')
    //$documentIcon = $('#documentIcon')
    ;
  

  //create a tl
  var phoneEnter = gsap.timeline({repeat:true});
  //var phoneExit = gsap.timeline();
  var dollarTlEnter = gsap.timeline({paused:true, reversed:true});
  var dollarTlExit = gsap.timeline();
  var docTlEnter = gsap.timeline();
  var docTlExit = gsap.timeline();
  var toggleMenu = gsap.timeline({paused: true, reversed:true});

  //establish the timelinee
  phoneEnter
      .set($bubbles, {onStart: onStart, onUpdate: onUpdate, repeat:-1})
      //.set($houses, {x:-2, y:4, onStart: onStart, onUpdate: onUpdate})  

      function onStart(){
        phoneEnter
        .fromTo('#bubble-house-1_2_', .5,
          {x:-6, y:8, opacity:0},
          {x:0, y:0, duration:0.15, opacity:1, scaleX:1, ease: "elastic.inout(1, 0.4)"})
        .fromTo('#heart-3', .5,
          {x:6, y:4, opacity:0},
          {x:0, y:0, opacity:1, duration:0.4, ease: "elastic.inout(1, 0.4)"},'0.25')
        
        //.staggerFromTo($bubbles, .15,
        //{opacity:1, rotation:0, ease:Back.easeIn},
        //{opacity:0, rotation:5})
        //.staggerFrom($bubbles, {opacity:0.5, duration:.15,rotation: -10, ease:Power1.easeInOut})
      }
      function onUpdate(){
        phoneEnter    
        .fromTo('#bubble-house-1_2_', 2.5,
        {y:0, opacity:1},
        {y:'-=100', opacity:0, ease: "steps(5)"}) 
        .fromTo('#heart-3', 2.5,{y:0},{y:'-=100', ease: "steps(5)"},'-=2.5')
        .fromTo('#bubble-house-2', 2.5, {y:0},{y:'-=100', ease:"steps(5)"},'-=2.5')
        .fromTo('#heart-1', 2.5, {y:0},{y:'-=100', ease:"steps(5)"},'-=2.75')
        .fromTo('#bubble-house-1_1_', 2.5, {y:0},{y:'-=100', ease:"steps(5)"},'-=2.75')

        
        
        //.fromTo($bubbles, 1, 
        //  {y:1},
        //  {x:0, y:"-=15", opacity:1, ease:Power1.easeOut, stagger:.25, repeat: -1})
        
        //.to($bubbles, {opacity:1, x:0, y:-15, rotation:0, duration:1, stagger:0.5, repeat: -1, ease:Power1.easesOut},0.9)
        
        
        
        //.to($houses, {opacity:1, x:0, y:"-=30", rotation:0, duration:1.5, stagger:0.5, repeat: -1},'-=0.15')
      }
      function onComplete(){
        phoneEnter
      }
  //pause the tl
  phoneEnter.pause();
  //target the tl based on user interaction
   $($phoneContainer).mouseenter(function(){
     phoneEnter.play();
   });
   $($phoneContainer).mouseleave(function(){
     phoneEnter.pause().progress(0);
   });

        
   
      
      ($dollarContainer).mouseenter(function () {
        //console.log('You hovered the dollar');
        dollarTlEnter
          //.fromTo($blobOne,{scaleY:.75},{scaleY:.9, duration:.5, ease:Power1.easeInOut, transformOrigin:"center center"})
          .to($blobOne, {duration:1,rotation:"+=.5",transformOrigin: "center center", ease:Power1.easeInOut})           
          .to($topDollar, {rotation:10, duration:.6, ease:Power1.easeInOut, transformOrigin:"center center"},"-=.75")
          .fromTo($arcArrows, {rotationX:"0"},{rotation:20, duration:.5, transformOrigin:"center center"},"-=1")   
          
          if(dollarTlEnter.paused() === true ){
            dollarTlEnter.play();
          }else{
            dollarTlEnter.reverse().resume();
          }          
      });
      
    /*
      $($dollarContainer).mouseleave(function(){
        //console.log('You are no longer hovering dollar');
          
          dollarTlExit
          .to($arcArrows, {duration: .5,rotation:0, transformOrigin:"center center",ease:Power1.easeInOut},"rollBack")
          //.fromTo($blobOne, {scaleY:1},{scaleY:.85,duration:1,ease:Power1.easeInOut}, "-=.5")
          .to($blobOne, {duration:1,rotation:"-=.5",transformOrigin: "center center", ease:Power1.easeInOut})
          .to($topDollar, {duration: .5, rotation:4, ease:Power1.easeInOut},"-=rollBack")         
         
      });
    */
    
      $($docContainer).mouseenter(function(){
        //console.log('You have entered Doc');        
        docTlEnter

            .from($pen, {duration: .75, x:-6, y:3})
            .to($blobTwo, {duration: .75,rotation:5, transformOrigin:"center center",ease:Power1.easeOutIn})
            //.fromTo($blobTwo, {scaleX:0},{scaleX:.25,transformOrigin:"center center",duration:1})
            .to($docShadow,{x:-20,ease:Power1.easeOutIn},"moveShadow")
            //.fromTo($docShadow,{x:0},{x:-20,ease:Power1.easeOutIn},"moveShadow")
        });
    
      $($docContainer).mouseleave(function(){
        //console.log('You have exited Doc');
        docTlExit
          .to($blobTwo, {duration: 1.5,rotation:-5, transformOrigin:"center center",ease:Power1.easeInOut})
          .fromTo($docShadow,{x:-15},{x:0, duration:.75},"-=moveShadow")
          .to($pen, {duration:1,x:0, y:0, ease:Power1.easeOutIn})
          
          
      });

    
      $($hbContainer).click(function(){
        //console.log('You have clicked the menu');
        toggleMenu
          .to($lineTwo, {duration: .125,scaleX: 0})
          .to($lineOne, {duration: .125,rotation: 45, transformOrigin: "50% 50%", y:8}, "axis")
          .to($lineThree, {duration: .125,rotation: -45, transformOrigin: "50% 50%", y: -8},"axis");
          if(toggleMenu.reversed() === true){
            toggleMenu.play()
          }else{
            toggleMenu.reverse();
          }
    });  
});