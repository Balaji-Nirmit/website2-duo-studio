var crsr=document.querySelector('.cursor');
document.addEventListener('mousemove',function(dets){
    crsr.style.top=dets.y+10+"px";
    crsr.style.left=dets.x+10+"px";
});





// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });
// when this upper code is applied then smooth scroll is 
// applicable it will hijack the scroll so after this no gsap will work on it
// for gsap working  also use the code below
//  it is written in fucntion and called later by function name init but can write without function also 
function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()

// gsap.to('.page1 h1',{
//     x:-100,
//     duration:1,
//     scrollTrigger:{
//         trigger:".page1 h1",
//         scroller:'.main',
//         markers:false,
//         start:"top 30%",
//         end:"top 0",
//         scrub:2
//     }
// })

//  now the above code is  efficient but when we have to same the code more than once then we make it a timeline 
// for ease.
// like this having scroll trigger
var tl= gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:'.main',
        markers:false,
        start:"top 30%",
        end:"top 0",
        scrub:3
    }
}) 

// to use the timeline use down 
// tl.to('.page1 h1',{
//     x:-100
// })
// tl.to('.page1 h2',{
//     x:100
// })
// now to allow the both work simulatenously write down
tl.to('.page1 h1',{
    x:-100,
},'anime')
tl.to('.page1 h2',{
    x:100
},'anime')
// anime is just a variable
tl.to('.page1 video',{
    width:"90%"
},"anime")
// 
// 
// 
// 
var tl2= gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:'.main',
        markers:false,
        start:"top -110%",
        end:"top -116%",
        scrub:3
    }
}) 

tl2.to('.page2',{
    background:"white"
})
var tl3= gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:'.main',
        markers:false,
        start:"top -210%",
        end:"top -215%",
        scrub:3
    }
}) 
tl3.to('.page3',{
    background:'white'
})

// 
// 
// 
var boxes=document.querySelectorAll('.box')
boxes.forEach(function(i){
    i.addEventListener('mouseenter',function(){
        var att=i.getAttribute('data-image')
        crsr.style.width="300px";
        crsr.style.height="250px";
        crsr.style.borderRadius=0;
        crsr.style.backgroundImage=`url(${att})`
    })
    i.addEventListener('mouseleave',function(){
        i.style.backgroundColor='transparent';
        crsr.style.width="20px";
        crsr.style.height="20px";
        crsr.style.borderRadius="50%";
        crsr.style.backgroundImage=`none`
    })

})
// 
// 
// 
// 
let ele = document.getElementById('mq1');
var h4s=document.querySelectorAll('#nav h4');
var pp=document.querySelector('#purple');
var nav=document.querySelector('#nav');
h4s.forEach(function(i){
    i.addEventListener('mouseenter',function(){
        pp.style.display="block";
        ele.innerHTML = i.innerText.repeat(10);
    })
    nav.addEventListener('mouseleave',function(){
        pp.style.display="none";
    })
})