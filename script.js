var cursor = document.querySelector(".cursor");
var blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.clientX+20 + "px";
    cursor.style.top = dets.clientY + "px";
    blur.style.left = dets.clientX - 90 + "px";
    blur.style.top = dets.clientY - 90 + "px";
})

var aAllLinks = document.querySelectorAll("nav a");
    aAllLinks.forEach(function(elem){
       elem.addEventListener("mouseenter", function(){
           cursor.style.scale = 3;
           cursor.style.border = "1px solid #fff";
           cursor.style.backgroundColor = "transparent";
       })
       elem.addEventListener("mouseleave", function(){
           cursor.style.scale = 1;
           cursor.style.border = "0px solid #95c11e";
           cursor.style.backgroundColor = "#95c11e";
       })
})

gsap.to("nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top -10%",
        end: "top -10%",
        scrub: 1,
    },
})

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    },
})

gsap.from(".about-us img, .about-us-in", {
   y:50,
   opacity: 0,
   duration: 1,
   scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
   }
})

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
     trigger: ".card",
     scroller: "body",
     start: "top 70%",
     end: "top 65%",
     scrub: 1,
    }
 })

 gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 45%",
        end: "top 35%",
        scrub: 4,
    }
 })

 gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 65%",
        end: "top 45%",
        scrub: 4,
    }
 })

 gsap.from(".page5 h1", {
    y: 50,
    // opacity: 0,
    // duration: 1,
    scrollTrigger: {
        trigger: ".page5 h1",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
 })

 var f2h3 = document.querySelectorAll(".f2 h3");
    f2h3.forEach(function(elem){
       elem.addEventListener("mouseenter", function(){
           cursor.style.scale = 3;
           cursor.style.border = "1px solid #fff";
           cursor.style.backgroundColor = "transparent";
       })
       elem.addEventListener("mouseleave", function(){
           cursor.style.scale = 1;
           cursor.style.border = "0px solid #95c11e";
           cursor.style.backgroundColor = "#95c11e";
       })
})


var f3h3 = document.querySelectorAll(".f3 h3");
f3h3.forEach(function(elem){
   elem.addEventListener("mouseenter", function(){
       cursor.style.scale = 3;
       cursor.style.border = "1px solid #fff";
       cursor.style.backgroundColor = "transparent";
   })
   elem.addEventListener("mouseleave", function(){
       cursor.style.scale = 1;
       cursor.style.border = "0px solid #95c11e";
       cursor.style.backgroundColor = "#95c11e";
   })
})

var f4h3 = document.querySelectorAll(".f4 h3");
f4h3.forEach(function(elem){
   elem.addEventListener("mouseenter", function(){
       cursor.style.scale = 3;
       cursor.style.border = "1px solid #fff";
       cursor.style.backgroundColor = "transparent";
   })
   elem.addEventListener("mouseleave", function(){
       cursor.style.scale = 1;
       cursor.style.border = "0px solid #95c11e";
       cursor.style.backgroundColor = "#95c11e";
   })
})

