
/* ------------page1 loader--------------------------------------------------- */
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var tl = gsap.timeline();


tl.to("#page1",{
    y:"0",
    scale:0.5,
    duration:2,
    delay:1
})

tl.to("#page1",{
    rotate:360,
    duration:2,
    delay:.2
})

tl.to("#page1",{
    scale:1,
    
})

/* ------------page5--------------------------------------------------- */
var sl1 = document.querySelector("#sl1");
var sl2 = document.querySelector("#sl2");
var sl3 = document.querySelector("#sl3");
var sl4 = document.querySelector("#sl4");

sl1.addEventListener("mouseenter",function(){
    let tl = gsap.timeline();
    tl.to(["#sl2","#sl3","#sl4"],{
        x:300,
        
    })
})
sl1.addEventListener("mouseleave",function(){
    let tl = gsap.timeline();
    tl.to(["#sl2","#sl3","#sl4"],{
        x:0,
        
    })
})

sl2.addEventListener("mouseenter",function(){
    let tl = gsap.timeline();
    tl.to(["#sl3","#sl4"],{
        x:300,
        
    })
})
sl2.addEventListener("mouseleave",function(){
    let tl = gsap.timeline();
    tl.to(["#sl3","#sl4"],{
        x:0,
        
    })
})

sl3.addEventListener("mouseenter",function(){
    let tl = gsap.timeline();
    tl.to("#sl4",{
        x:300,
        
    })
})
sl3.addEventListener("mouseleave",function(){
    let tl = gsap.timeline();
    tl.to("#sl4",{
        x:0,
        
    })
})











