
$(document).ready(function () {
  var 
    $dollarContainer = $('#dollar-icon'),
    $docContainer = $('#documentIcon'),
    $phoneContainer = $('#phone-container'),
    $doorContainer = $('#door-container'),
    $hbContainer = $('#hamburger'),    
    $house3 = $('#house3'),
    $heart3 = $('#heart3'),
    $heart2 = $('#heart2'),
    $house2 = $('#house2'),
    $heart1 = $('#heart1'),
    $house1 = $('#house1'),
    $heart0 = $('#heart0'),
    $house0 = $('#house0'),  
    $bubbles = $('.bubbles'),
    $lineOne = $('#line-one'),
    $lineTwo = $('#line-two'),
<<<<<<< HEAD
    $lineThree = $('#line-three'),    
    
   
=======
    $lineThree = $('#line-three'),
    $staticSet = [$heartOne,$houseTwo,$house] 
    $bubbleCollection = [$heartOne, $heartThree, $houseOne,$houseTwo],
    //$houses = [$house, $houseOne, $houseTwo],
>>>>>>> master
    $lines = [$lineOne, $lineTwo, $lineThree],
    $pen = $('#pen')
    //$documentIcon = $('#documentIcon')
    ;
  


  //create a tl
<<<<<<< HEAD
  
  var steppedEase  = new SteppedEase(6); 
  var toggleMenu = new TimelineMax({paused: true, reversed:true});

  function bubblesUp(){
    var tlBubbles = new TimelineMax();
      tlBubbles  
        .to($house3, 1,{ y: '-=16px'})  
        .to($house3, .3, {opacity:0}) 
        .to($heart1, 1,{ y: '-=16px'})  
        .to($heart1, .3, {opacity:0, delay:0.1}) 
        .to($house2, 1,{ y: '-=16px'})  
        .to($house2, .3, {opacity:0, delay:0.1}) 
        .to($heart3, 1,{ y: '-=16px'})  
        .to($heart3, .3, {opacity:0, delay:0.1})  
        .to($house1, 1,{ y: '-=16px'})  
        .to($house1, .3, {opacity:0, delay:0.1})  
        return tlBubbles;        
  }
  
  function fadeInBubbles(){
    var fadeInBubblesTl = new TimelineMax();
      fadeInBubblesTl
      .to($house1, .25, {opacity:1})
      .to($heart3, .25, {opacity:1})
      .to($house2, .25, {opacity:1})
      .to($heart1, .25, {opacity:1})
      .to($house3, .25, {opacity:1})
      return fadeInBubblesTl;
  }
  
  /*
  .to($heart0, .50,{y:'-=12px'})      
      .fromTo($heart0, .5,{x:'6px', y:'42px', rotation:26, opacity:0},{x:'-1px',y:'36px', opacity: 1, rotation: 0, scale: 1, rotation:0},'-=.5')
  */
  /*
  function rotB2(){
    var tlHouse = new TimelineMax();
      tlHouse
      .fromTo($house0, .25, {x:-15, y:40, rotation:-45, scale:0.8, opacity:0},{x:0,y:35,opacity:1, rotation:0, scale: 1})
      .to($house0, 1.5,{y:-50, ease:steppedEase},'-=.15')
      .to($house0, .50,{opacity:0})
        return tlHouse;        
=======
  var phoneEnterMaster = new TimelineMax({repeat: -1, paused:true});
  var steppedEase  = new SteppedEase(4);
  //var phoneExit = new TimelineMax();
  var dollarTlEnter = new TimelineMax({paused:true, reversed:true});
  var dollarTlExit = new TimelineMax();
  var docTlEnter = new TimelineMax();
  var docTlExit = new TimelineMax();
  var toggleMenu = new TimelineMax({paused: true, reversed:true});

  function rotB(){
    var tl = new TimelineMax();
      tl
        
        .fromTo($heartFadeIn, .5,{
          y:35, rotation:-15, scale:0.8, opacity:0
        },{
            y:30, opacity: 1, rotation: 0, scale: 1, ease: "back.out(1.7)"
        })
        return tl;
  }
  function rotB2(){
    var tl = new TimelineMax();
      tl
      .fromTo($houseFadeIn, .5,
        {y:40, rotation:15, scale:0.8, opacity:0},
        {y:35,opacity:1, rotation:0, scale: 1,ease: "back.out(1.7)"})
        return tl;
>>>>>>> master
  }
  function moveUp(){
    var tl = new TimelineMax();
      tl
<<<<<<< HEAD
        .fromTo($bubbleCollection, 1.5,{y:0},{ y: -80, ease:steppedEase})
=======
        .fromTo($bubbleCollection, 2.5, {y:0},{ y: -80, ease:steppedEase})
        //.fromTo($heartFadeIn, 1.5, { y:"4px"}, { y: "-4px"})
        
>>>>>>> master
        return tl;
  }  
  */  
 var phoneEnterMaster = new TimelineMax({repeat:-1});
  phoneEnterMaster
    .set($bubbles, {onStart: onStart})      
<<<<<<< HEAD
      function onStart(){
                 
          phoneEnterMaster.add(bubblesUp())  
                    
           
          ;
      }
  
    //pause the tl
  phoneEnterMaster.pause();
  //target the tl based on user interaction
  $($phoneContainer).mouseenter(function(){
    phoneEnterMaster.play();
  });
  $($phoneContainer).mouseleave(function(){
    phoneEnterMaster.pause().progress(0);    
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
=======
    function onStart(){
        phoneEnterMaster
          .add(moveUp())
          .add(rotB())          
          .add(rotB2())
          
          ;
    }
  
    //pause the tl
    phoneEnterMaster.pause();
    //target the tl based on user interaction
   $($phoneContainer).mouseenter(function(){
     phoneEnterMaster.play();
   });
   $($phoneContainer).mouseleave(function(){
     phoneEnterMaster.pause().progress(0);
      
   });
    
($dollarContainer).mouseenter(function () {
  //console.log('You hovered the dollar');
  dollarTlEnter
    //.fromTo($blobOne,{scaleY:.75},{scaleY:.9, duration:.5, ease:Power1.easeInOut, transformOrigin:"center center"})
    .to($topDollar, {rotation:10, duration:.6, ease:Power1.easeInOut, transformOrigin:"center center"})
    .fromTo($arcArrows, {rotationX:"0"},{rotation:20, duration:.5, transformOrigin:"center center"},"-=1")   
    
    if(dollarTlEnter.paused() === true ){
      dollarTlEnter.play();
    }else{
      dollarTlEnter.reverse().resume();
    }          
});
 $($dollarContainer).mouseleave(function(){
  //console.log('You are no longer hovering dollar');
    
    dollarTlExit
    .to($arcArrows, {duration: .5,rotation:0, transformOrigin:"center center",ease:Power1.easeInOut},"rollBack")
    //.fromTo($blobOne, {scaleY:1},{scaleY:.85,duration:1,ease:Power1.easeInOut}, "-=.5")
    .to($blobOne, {duration:1,rotation:"-=.5",transformOrigin: "center center", ease:Power1.easeInOut})
    .to($topDollar, {duration: .5, rotation:4, ease:Power1.easeInOut},"-=rollBack")         
    
});

    
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
>>>>>>> master
});