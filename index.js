window.onscroll = function() {scrollRotate()};
function scrollRotate() {
  var navimg = document.getElementById("container1");
  navimg.style.transform = "rotate("+ (window.scrollY/-7 -9)  + "deg)"
  navimg.style.transform += "translateX("+ ((1-Math.cos((window.scrollY/-7)*3.14/180))*1458.5)  + "px)"
  navimg.style.transform += "translateY("+ ((Math.sin((window.scrollY/-7)*3.14/180))*1458.5 - window.scrollY)  + "px)"
  var navimg = document.getElementById("container2");
  navimg.style.transform = "rotate("+ (window.scrollY/-7 -3)  + "deg)"
  navimg.style.transform += "translateX("+ ((1-Math.cos((window.scrollY/-7)*3.14/180))*1458.5)  + "px)"
  navimg.style.transform += "translateY("+ ((Math.sin((window.scrollY/-7)*3.14/180))*1458.5 - window.scrollY)  + "px)"
  var navimg = document.getElementById("container3");
  navimg.style.transform = "rotate("+ (window.scrollY/-7 +3)  + "deg)"
  navimg.style.transform += "translateX("+ ((1-Math.cos((window.scrollY/-7)*3.14/180))*1458.5)  + "px)"
  navimg.style.transform += "translateY("+ ((Math.sin((window.scrollY/-7)*3.14/180))*1458.5 - window.scrollY)  + "px)"
  var navimg = document.getElementById("container4");
  navimg.style.transform = "rotate("+ (window.scrollY/-7 +9)  + "deg)"
  navimg.style.transform += "translateX("+ ((1-Math.cos((window.scrollY/-7)*3.14/180))*1458.5)  + "px)"
  navimg.style.transform += "translateY("+ ((Math.sin((window.scrollY/-7)*3.14/180))*1458.5 - window.scrollY)  + "px)"
}
