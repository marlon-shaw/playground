
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
    $lineThree = $('#line-three'),    
    
   
    $lines = [$lineOne, $lineTwo, $lineThree],
    $pen = $('#pen')
    //$documentIcon = $('#documentIcon')
    ;
  


  //create a tl
  
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
  }
  function moveUp(){
    var tl = new TimelineMax();
      tl
        .fromTo($bubbleCollection, 1.5,{y:0},{ y: -80, ease:steppedEase})
        return tl;
  }  
  */  
 var phoneEnterMaster = new TimelineMax({repeat:-1});
  phoneEnterMaster
    .set($bubbles, {onStart: onStart})      
      function onStart(){
                 
          phoneEnterMaster.add(bubblesUp())  
                    
          phoneEnterMaster.add(fadeInBubbles().reverse())   
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
});