// loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  });
  
// Slider
var ListLi = document.querySelectorAll('#ul li');
var raodenoba = ListLi.length;
localStorage.slittyui = 0;
var toNumber = null;
var j = 0;
// function forward() {
//     toNumber = parseInt(localStorage.slittyui);
//     var logo1 = document.querySelectorAll(".sliderimage");
//     var ListLi = document.querySelectorAll('#ul li');

//     if (toNumber < raodenoba - 1) {
//         toNumber += 1;
//         for (var j = 0; j < ListLi.length; j++) {
//             ListLi[j].style.backgroundColor = "#fff";
//         }
//         localStorage.slittyui = toNumber;
//         ListLi[toNumber].style.backgroundColor = "#fbff8c";
//         localStorage.slittyui = toNumber;

//         for (var j = 0; j < ListLi.length; j++) {
//             logo1[j].style.opacity = "0";
//         }
//         logo1[toNumber].style.opacity = "1";
//     }
//     else {
//         toNumber = 0;
//         for (var j = 0; j < ListLi.length; j++) {
//             ListLi[j].style.backgroundColor = "#fff";
//         }
//         localStorage.slittyui = toNumber;
//         ListLi[toNumber].style.backgroundColor = "#fbff8c";
//         localStorage.slittyui = toNumber;



//         for (var j = 0; j < ListLi.length; j++) {
//             logo1[j].style.opacity = "0";
//         }
//         logo1[toNumber].style.opacity = "1";
//     }


// }
// function back() {
//     toNumber = parseInt(localStorage.slittyui);
//     var logo1 = document.querySelectorAll(".sliderimage");
//     var ListLi = document.querySelectorAll('#ul li');

//     if (toNumber != 0) {
//         toNumber -= 1;
//         for (var j = 0; j < ListLi.length; j++) {
//             ListLi[j].style.backgroundColor = "#fff";
//         }
//         localStorage.slittyui = toNumber;
//         ListLi[toNumber].style.backgroundColor = "#fbff8c";
//         localStorage.slittyui = toNumber;



//         for (var j = 0; j < ListLi.length; j++) {
//             logo1[j].style.opacity = "0";
//         }
//         logo1[toNumber].style.opacity = "1";
//     }
//     else {
//         toNumber = ListLi.length - 1;
//         for (var j = 0; j < ListLi.length; j++) {
//             ListLi[j].style.backgroundColor = "#fff";
//         }
//         localStorage.slittyui = toNumber;
//         ListLi[toNumber].style.backgroundColor = "#fbff8c";
//         localStorage.slittyui = toNumber;



//         for (var j = 0; j < ListLi.length; j++) {
//             logo1[j].style.opacity = "0";
//         }
//         logo1[toNumber].style.opacity = "1";
//     }


// }




var gffjjh = setInterval(function autoChange() {

    var logo1 = document.querySelectorAll(".sliderimage");



    toNumber = parseInt(localStorage.slittyui);
    for (var j = 0; j < ListLi.length; j++) {
        ListLi[j].style.backgroundColor = "#fff";
    }
    if (toNumber < raodenoba - 1) {
        toNumber += 1;
        localStorage.slittyui = toNumber;
        ListLi[toNumber].style.backgroundColor = "#fbff8c";
        localStorage.slittyui = toNumber;

    }
    else {
        toNumber = 0;
        localStorage.slittyui = toNumber;
        ListLi[toNumber].style.backgroundColor = "#fbff8c";
    }

    for (var j = 0; j < ListLi.length; j++) {



        logo1[j].style.opacity = "0";



    }



    logo1[toNumber].style.opacity = "1";



}, 5000);


function myFunction() {
    gffjjh = setInterval(function autoChange() {


        var logo1 = document.querySelectorAll(".sliderimage");


        toNumber = parseInt(localStorage.slittyui);
        for (var j = 0; j < ListLi.length; j++) {
            ListLi[j].style.backgroundColor = "#fff";
        }
        if (toNumber < raodenoba - 1) {
            toNumber += 1;
            localStorage.slittyui = toNumber;
            ListLi[toNumber].style.backgroundColor = "#fbff8c";
            localStorage.slittyui = toNumber;
        }
        else {
            toNumber = 0;
            localStorage.slittyui = toNumber;
            ListLi[toNumber].style.backgroundColor = "#fbff8c";
        }
        for (var j = 0; j < ListLi.length; j++) {



            logo1[j].style.opacity = "0";


        }


        logo1[toNumber].style.opacity = "1";

    }, 5000);


}

function myStopFunction() {
    clearInterval(gffjjh);

}

function changeSlider(el) {
    var elItem = parseInt(el.dataset.items);


    var logo1 = document.querySelectorAll(".sliderimage");


    for (var j = 0; j < ListLi.length; j++) {
        ListLi[j].style.backgroundColor = "#fff";
    }
    el.style.backgroundColor = "#fbff8c";
    localStorage.slittyui = elItem;

    for (var j = 0; j < ListLi.length; j++) {
        logo1[j].style.opacity = "0";
    }


    logo1[elItem].style.opacity = "1";

}

// Navbar

const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

// Navbar color change
const txt = document.querySelectorAll('header .navbar-wrapper .navbar-content .nav-links li a');
const navbar = document.querySelector('.navbar-wrapper');
const projectsection = document.getElementById('project-hero');
window.addEventListener('scroll', function () {
    if (window.scrollY > projectsection.offsetTop) {
        navbar.classList.add('bg-color-change');
        txt.classList.add('txt-color-change');
    }
    else {
        txt.classList.remove('txt-color-change');
        navbar.classList.remove('bg-color-change');
    }
})

const section = document.getElementById('project');

window.addEventListener('scroll', function () {
    if (window.scrollY > section.offsetTop) {
        navbar.classList.add('bg-color-change');
    }
    else {
        navbar.classList.remove('bg-color-change');
    }
})
$('.carousel-client').bxSlider({
    auto: true,
    slideWidth: 234,
    minSlides: 2,
    maxSlides: 5,
    controls: false
});

// Gallery

// Lightbox
const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("bx", "bx-left-arrow-alt", "lightbox-prev");
lightBoxNext.classList.add("bx", "bx-right-arrow-alt", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    showLightBox(index += n);
}
function prevImage() {
    slideImage(-1);
}
function nextImage() {
    slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}
lightBoxContainer.addEventListener("click", closeLightBox);





// popup
// const viewBtn = document.querySelector(".view-modal"),
// popup = document.querySelector(".popup"),
// close = popup.querySelector(".close"),
// field = popup.querySelector(".field"),
// input = field.querySelector("input"),
// copy = field.querySelector("button");

// viewBtn.onclick = ()=>{
//   popup.classList.toggle("show");
// }
// close.onclick = ()=>{
//   viewBtn.click();
// }

// copy.onclick = ()=>{
//   input.select(); //select input value
//   if(document.execCommand("copy")){ //if the selected text copy
//     field.classList.add("active");
//     copy.innerText = "Copied";
//     setTimeout(()=>{
//       window.getSelection().removeAllRanges(); //remove selection from document
//       field.classList.remove("active");
//       copy.innerText = "Copy";
//     }, 3000);
//   }
// }

const modal = document.querySelector(".view-modal")
const modal1 = document.querySelector(".view-modal1")
const formContainer = document.querySelector(".form-main-container");
const closebtn = document.querySelector('.closebtn')
modal.addEventListener("click", function () {
    console.log('asdasd')
    formContainer.style.setProperty("display", "flex", "important")
    sidebar.style.zIndex= "-1"
    formContainer.style.zIndex = "99999" 
  
});

closebtn.addEventListener("click",function(){
    formContainer.style.setProperty("display", "none", "important")
})



modal1.addEventListener("click", function () {
    console.log('asdasd')
    formContainer.style.setProperty("display", "flex", "important")
    sidebar.style.zIndex= "-1"
    formContainer.style.zIndex = "99999" 
  
});
 