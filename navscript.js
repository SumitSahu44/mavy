
// nav bar

let menu=document.querySelector("#nav i");
let close=document.querySelector("#full i");

let first=gsap.timeline()

first.to("#full",{
    right:0,
    duration:0.5
})

first.from("#full h4",{
    x:150,
    duration:0.6,
    stagger:0.2,
    opacity:0
})

first.from("#full i",{
    opacity:0
} )


first.pause()


menu.addEventListener("click",function(){
    first.play()
})

close.addEventListener("click",function(){
    first.reverse()
})
