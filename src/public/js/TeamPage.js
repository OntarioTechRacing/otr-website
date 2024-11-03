function setDimensions(){
    var windowsHeight = $(window).height();
    $('#element').css('height', windowsHeight + 'px');
 }
 
 //when resizing the site, we adjust the heights of the sections
 $(window).resize(function() {
     setDimensions();
 });
 
 setDimensions();