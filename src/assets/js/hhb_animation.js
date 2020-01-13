$(document).ready(function () {
  var 
    $dollarContainer = $('#dollar-icon'),
    $docContainer = $('#documentIcon')
    $topDollar = $('#top-dollar'),
    $pen = $('#pen')
    //$documentIcon = $('#documentIcon')
    ;
  //create a tl
  var dollarTlEnter = new TimelineMax({});
  var dollarTlExit = new TimelineMax({});
  var docTlEnter = new TimelineMax({});
  var docTlExit = new TimelineMax({});
    
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
  

  
});