// to make the header dissapear
const dissapearingHeader = document.querySelector(".header");

 const interface = document.querySelector(".interface__secondheader");

 const options = {
     rootMargin: "-200px 0px 0px 0px"
 };

 const observer = new IntersectionObserver(function
     (entries, observer){
     entries.forEach(entry => {
         if(!entry.isIntersecting){
             dissapearingHeader.classList.add("display");
             
         }else {
             dissapearingHeader.classList.remove("display");
         }
     })
 }, options);

 observer.observe(interface);

 //fade-in effect
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
    rootMargin: "0px 0px -400px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries, 
    appearOnScroll
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else{
                entry.target.classList.add("appears");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

//dark mode
const darkBody = document.querySelector("body");
const darkInterface = document.querySelector(".interface__secondheader");
const switchButton = document.getElementById("switch");
const aboutme = document.querySelector(".aboutme__info");
const work = document.querySelector(".descriptioninfo");
const contact = document.querySelector(".contactdescription");

switchButton.addEventListener ("click", checkmode);
function checkmode(){
    if(switchButton.checked){
        contact.classList.add("darkinterface");
        work.classList.add("darkinterface");
        aboutme.classList.add("darkinterface");
        sayHiDark.classList.add("sayHidark");
        darkBody.classList.add("dark"); 
        darkInterface.classList.add("darkinterface");
    }else{
        contact.classList.remove("darkinterface");
        work.classList.remove("darkinterface");
        aboutme.classList.remove("darkinterface");
        sayHiDark.classList.remove("sayHidark")
        darkBody.classList.remove("dark");
        darkInterface.classList.remove("darkinterface");
    }
};
//

// hamburger menu

const hamburger = document.querySelector(".header__menu");
const overlayMenu = document.querySelector(".overlay");
const aboutOverlay = document.querySelector(".aboutme");
const workOverlay = document.querySelector(".myWork");
const contactOverlay = document.querySelector(".contactme");

aboutOverlay.addEventListener("click", () =>{
    hamburger.classList.toggle("open");
    overlayMenu.classList.remove("overlaycategories");
});

workOverlay.addEventListener("click", () =>{
    hamburger.classList.toggle("open");
    overlayMenu.classList.remove("overlaycategories");
});

contactOverlay.addEventListener("click", () =>{
    hamburger.classList.toggle("open");
    overlayMenu.classList.remove("overlaycategories");
});

hamburger.addEventListener("click", () => { 
    email.classList.remove("contacts");
    hamburger.classList.toggle("open");
    overlayMenu.classList.toggle("overlaycategories");

});

//say hi
const buttonContacts = document.querySelector(".buttoncontacts")
const sayHi = document.querySelector(".button");
const email = document.querySelector(".email");
const sayHiDark = document.querySelector(".sayHi");
const cancel = document.querySelector(".cancel");

cancel.addEventListener("click", () =>{
    email.classList.remove("contacts");
})

buttonContacts.addEventListener("click", () =>{
    if(darkBody.classList.contains("dark")){
        sayHiDark.classList.add("sayHidark");
        email.classList.add("contacts");
    } else{
        sayHiDark.classList.remove("sayHidark");
        email.classList.add("contacts");
    }
    
});

sayHi.addEventListener("click", () =>{
    if(darkBody.classList.contains("dark")){
        sayHiDark.classList.add("sayHidark");
        email.classList.toggle("contacts");
    } else{
        sayHiDark.classList.remove("sayHidark");
        email.classList.toggle("contacts");
    }
    
});



const exit = document.querySelector(".exit");

exit.addEventListener("click", ()=>{

if(email.classList.contains("contacts")){
    email.classList.remove("contacts");
}
});

//say hi mobile
const sayHiMobile = document.querySelector(".mobile__sayHi");

sayHiMobile.addEventListener("click", () =>{
    if(darkBody.classList.contains("dark")){
        hamburger.classList.remove("open");
        sayHiDark.classList.add("sayHidark");
        email.classList.toggle("contacts");
        overlayMenu.classList.remove("overlaycategories");

    } else{
        hamburger.classList.remove("open");
        sayHiDark.classList.remove("sayHidark");
        email.classList.toggle("contacts");
        overlayMenu.classList.remove("overlaycategories");
    }
});

//Categories

const categoriesBtn = document.querySelector(".aboutme");
const myWork = document.querySelector(".myWork");

myWork.addEventListener("click", () => {
    hamburger.classList.remove("open");
    overlayMenu.classList.remove("overlaycategories");
});

categoriesBtn.addEventListener("click", () => {
    hamburger.classList.remove("open");
    overlayMenu.classList.remove("overlaycategories");
});

const home = document.querySelector(".home");

home.addEventListener("click", () => {
    hamburger.classList.remove("open");
    overlayMenu.classList.remove("overlaycategories");
});

//lightbox
const imgMobile = document.querySelector(".imgmobile");
const imgTab = document.querySelector(".imgtab");
const imgCp = document.querySelector(".imgcp");

const lightboxMobile = document.querySelector(".lightboxmobile");
const lightboxTab = document.querySelector(".lightboxtab");
const lightboxCp = document.querySelector(".lightboxcp");

   lightboxCp.addEventListener("click", e => {
        lightboxCp.classList.remove("lightboxheight");
    });

    lightboxTab.addEventListener("click", e => {
        lightboxTab.classList.remove("lightboxheight");
    });

    lightboxMobile.addEventListener("click", e => {
        lightboxMobile.classList.remove("lightboxheight");
    });


imgMobile.addEventListener("click", () => {
    lightboxMobile.classList.add("lightboxheight");
});

imgTab.addEventListener("click", () => {
    lightboxTab.classList.add("lightboxheight");
});

imgCp.addEventListener("click", () => {
    lightboxCp.classList.add("lightboxheight");
});