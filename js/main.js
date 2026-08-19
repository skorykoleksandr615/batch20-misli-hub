(function(){
 var header=document.getElementById("siteHeader");
 var toggle=document.getElementById("navToggle");
 var nav=document.getElementById("siteNav");
 function onScroll(){
  if(!header)return;
  if(window.scrollY>10)header.classList.add("is-solid");
  else header.classList.remove("is-solid");
 }
 window.addEventListener("scroll",onScroll,{passive:true});
 onScroll();
 if(toggle&&nav){
  toggle.addEventListener("click",function(){
   var open=document.body.classList.toggle("nav-open");
   toggle.setAttribute("aria-expanded",open?"true":"false");
  });
  nav.querySelectorAll("a").forEach(function(a){
   a.addEventListener("click",function(){
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded","false");
   });
  });
 }
 var reduce=window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 var stage=document.querySelector(".hero-stage");
 if(stage && !reduce){
  stage.addEventListener("pointermove",function(e){
   var r=stage.getBoundingClientRect();
   var x=((e.clientX-r.left)/r.width-0.5)*10;
   var y=((e.clientY-r.top)/r.height-0.5)*10;
   stage.style.transform="perspective(900px) rotateY("+x.toFixed(2)+"deg) rotateX("+(-y).toFixed(2)+"deg)";
  });
  stage.addEventListener("pointerleave",function(){
   stage.style.transform="none";
  });
 }
})();
