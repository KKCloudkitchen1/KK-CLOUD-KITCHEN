// ==============================
// KK CLOUD KITCHEN V2
// ==============================

// Smooth fade animation on scroll

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

document.querySelectorAll(
".menu-card,.combo-card,.category,.offer-box,.contact-box,.about-section"
).forEach((el)=>{
    observer.observe(el);
});

// Sticky Header Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

if(window.scrollY>20){
header.style.boxShadow="0 10px 25px rgba(0,0,0,.25)";
}else{
header.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";
}

});

// Button Click Animation

document.querySelectorAll(".menu-btn,.order-btn,.contact-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.95)";

setTimeout(()=>{
btn.style.transform="scale(1)";
},150);

});

});

// Welcome Message

window.onload=function(){

console.log("Welcome to KK CLOUD KITCHEN ð");

};
