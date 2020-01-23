
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
    $bubbleCollection = [$heartOne, $heartThree, $houseOne,$houseTwo],
    //$houses = [$house, $houseOne, $houseTwo],
    $lines = [$lineOne, $lineTwo, $lineThree],
    $pen = $('#pen')
    //$documentIcon = $('#documentIcon')
    ;
  

  //create a tl
  var phoneEnterMaster = new TimelineMax({repeat: -1, paused:true});
  var steppedEase  = new SteppedEase(3);
  //var phoneExit = new TimelineMax();
  var dollarTlEnter = new TimelineMax({paused:true, reversed:true});
  var dollarTlExit = new TimelineMax();
  var docTlEnter = new TimelineMax();
  var docTlExit = new TimelineMax();
  var toggleMenu = new TimelineMax({paused: true, reversed:true});

  function rotB(){
    var tlHeart = new TimelineMax();
      tlHeart       
        .fromTo($heartFadeIn, .25,{x:15, y:35, rotation:45, scale:0.8, opacity:0},{x:0, y:20, opacity: 1, rotation: 0, scale: 1})
        .fromTo($bubbleCollection, .25,{y:0},{ y: '-5px', ease:steppedEase},"moveCollectionUp")
        .to($heartFadeIn, 2,{y:-50, ease:steppedEase}, "moveCollectionUp")
        .to($heartFadeIn, .50,{opacity:0})
        //start the house bubble
                
        return tlHeart;
        
  }
  function rotB2(){
    var tlHouse = new TimelineMax();
      tlHouse
      .fromTo($houseFadeIn, .25, {x:-15, y:40, rotation:-45, scale:0.8, opacity:0},{x:0,y:35,opacity:1, rotation:0, scale: 1})
      .to($houseFadeIn, 1.5,{y:-50, ease:steppedEase},'-=.15')
      .to($houseFadeIn, .50,{opacity:0})
        return tlHouse;
        
  }

  function moveUp(){
    var tl = new TimelineMax();
      tl
        .fromTo($bubbleCollection, 1.5,{y:0},{ y: -80, ease:steppedEase},"moveCollectionUp")
        
        return tl;
  }

  
  //establish the timelinee
  
  phoneEnterMaster
    .set($bubbles, {onStart: onStart})      
    function onStart(){
        phoneEnterMaster
          
          .add(rotB())  
          .add(moveUp(),'-=2.25')          
          .add(rotB2(),'-=2.25')    
              
          ;
    }
  
    //pause the tl
    phoneEnterMaster.pause();
    //target the tl based on user interaction
   $($phoneContainer).mouseenter(function(){
     phoneEnterMaster.play();
   });
   $($phoneContainer).mouseleave(function(){
     phoneEnterMaster.progress(0).pause();
      
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