
$(document).ready(function () {
  var 
    $dollarContainer = $('#dollar-icon'),
    $docContainer = $('#documentIcon'),
    $phoneContainer = $('#phone-container'),
    $doorContainer = $('#door-container'),
    $hbContainer = $('#hamburger'),
    $heartOne = $('#heart-1'),
    $heartThree = $('#heart-3'),
    $heartFadeIn = $('#heart-fade-in'),
    $houseFadeIn = $('#house-fade-in')
    $house = $('#house-fade-out'),
    $houseOne = $('#house-one'),
    $houseTwo = $('#house-two'),
    $bubbles = $('.bubbles'),
    $topDollar = $('.top-dollar'),
    $arcArrows = $('#arc-arrows'),
    
    $blobOne = $('.blob1'),
    $blobTwo = $('.blob2'),
    $docShadow = $('.document-shadow'),
    $lineOne = $('#line-one'),
    $lineTwo = $('#line-two'),
    $lineThree = $('#line-three'),
    $staticSet = [$heartOne,$houseTwo,$house] 
    //$hearts = [$heartOne, $heartThree],
    //$houses = [$house, $houseOne, $houseTwo],
    $lines = [$lineOne, $lineTwo, $lineThree],
    $pen = $('#pen')
    //$documentIcon = $('#documentIcon')
    ;
  

  //create a tl
  var phoneEnter = new TimelineMax({repeat:-1});
  var steppedEase  = new SteppedEase(4);
  //var phoneExit = new TimelineMax();
  var dollarTlEnter = new TimelineMax({paused:true, reversed:true});
  var dollarTlExit = new TimelineMax();
  var docTlEnter = new TimelineMax();
  var docTlExit = new TimelineMax();
  var toggleMenu = new TimelineMax({paused: true, reversed:true});

  //establish the timelinee
  
  phoneEnter
    
      .set($bubbles, {onStart: onStart, onUpdate: onUpdate})      
      function onStart(){
        phoneEnter
          
          .fromTo($heartFadeIn, 2,
            {y:0},
            {y:-50, ease:steppedEase}
          )
          .fromTo($houseFadeIn, 2,
            {y:0},
            {y:-50, ease:steppedEase},"-=1.75" 
          )   


          /*
          .fromTo($heartFadeIn, .75, {x:2, y:40, opacity:0},{x:0, y:30, opacity:1})       
          .fromTo($houseOne, 0.25, {y:0},{y:-10})
          .fromTo($heartThree, 0.5, {y:0},{y:-15})
          .fromTo($staticSet, 1,{y:0},{y:-20},'-=1.25')
          .fromTo($houseFadeIn, .5, {x:-10, y:40, opacity:0},{x:0, y:30, opacity:1})
          */      
          
         /*
          .staggerFrom($bubbles, .5,{transformOrigin:"50% bottom", opacity:0, cycle:{x: [-5, 1], rotationY:[45, 180]}, ease:Back.easeIn, rotation:45}) 
          .staggerTo($bubbles, 1.5,{opacity:1, cycle:{y:[-25,-30]}}, '-=0.15')
        */
      }
      
      
      function onUpdate(){
        phoneEnter
         
          .to($houseOne, .5,{y:-10})
          //.fromTo($houseFadeIn, .5,{y:30},{y:20})
          //.fromTo($heartFadeIn, .5,{y:30},{y:15})


        /*.fromTo('#house-one', 2.5,
        {y:0, opacity:1},
        {y:'-=100', opacity:1, ease: "steps(5)"}) 
        .fromTo('#heart-3', 2.5,{y:0},{y:'-=100', ease: "steps(5)"},'-=2.5')
        */
        //.fromTo('#house-two', 2.5, {y:0},{y:'-=100', ease:"steps(5)"},'-=2.5')
        //.fromTo('#heart-1', 2.5, {y:0},{y:'-=100', ease:"steps(5)"},'-=2.75')
        //.fromTo('#house-fade-out', 2.5, {y:0},{y:'-=100', ease:"steps(5)"},'-=2.75')
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