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
// window.addEventListener('scroll', function () {
//     if (window.scrollY > projectsection.offsetTop) {
//         navbar.classList.add('bg-color-change');
//         txt.classList.add('txt-color-change');
//     }
//     else {
//         txt.classList.remove('txt-color-change');
//         navbar.classList.remove('bg-color-change');
//     }
// })

const section = document.getElementById('project');

window.addEventListener('scroll', function () {
    if (window.scrollY > section.offsetTop) {
        txt.classList.add('txt-color-change');
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


// POPUP შავი კარკასი

// get popup elements
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close');
const viewModalBtn = document.querySelector('.view-modal1');

// get form elements
const inputNumber = document.querySelector('#number-input');


inputNumber.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        submitBtn.click();
    }
});

// open popup when view modal button is clicked
viewModalBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

// close popup when close button is clicked
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// close popup when user clicks outside of it
window.addEventListener('click', (e) => {
    if (e.target == popup) {
        popup.style.display = 'none';
    }
});

const numberInput = document.getElementById('number-input');
const submitBtn = document.getElementById('submit-btn');
const productTable = document.getElementById('product-table');
const activateBtns = document.getElementsByClassName('activate-btn');
const productPrices = document.getElementsByClassName('product-price');
const totalSum = document.getElementById('total-sum');

// Initialize product prices array
const productPricesArr = [10, 40, 15, 15, 40, 15, 18, 40];

// Initialize total sum
let currentTotalSum = 0;

// Add event listener to submit button
submitBtn.addEventListener('click', () => {
    const enteredNumber = Number(numberInput.value);

    // Calculate product prices
    for (let i = 0; i < productPricesArr.length; i++) {
        const productPrice = productPricesArr[i] * enteredNumber;
        productPrices[i].textContent = productPrice;
    }

    // Reset total sum and activate buttons
    currentTotalSum = 0;
    totalSum.textContent = currentTotalSum;
    for (let i = 0; i < activateBtns.length; i++) {
        activateBtns[i].textContent = 'დამატება';
        activateBtns[i].disabled = false;
    }

});

// Add event listeners to activate buttons
for (let i = 0; i < activateBtns.length; i++) {
    activateBtns[i].addEventListener('click', () => {
        const productPrice = Number(productPrices[i].textContent);
        const btnText = activateBtns[i].textContent;

        if (btnText === 'დამატება') {
            activateBtns[i].style.backgroundColor = "red";
            activateBtns[i].textContent = 'გამოკლება';
            currentTotalSum += productPrice;
            totalSum.textContent = currentTotalSum;
        } else {
            activateBtns[i].style.backgroundColor = "green";
            activateBtns[i].textContent = 'დამატება';
            currentTotalSum -= productPrice;
            totalSum.textContent = currentTotalSum;
        }
    });
}

// Popup თეთრი კარკასი
 
// get popup elements
const popup2 = document.querySelector('.popup2');
const closeBtn2 = document.querySelector('.close2');
const viewModalBtn2 = document.querySelector('.view-modal2');

// get form elements
const inputNumber2 = document.querySelector('#number-input2');


inputNumber2.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        submitBtn2.click();
    }
});

// open popup when view modal button is clicked
viewModalBtn2.addEventListener('click', () => {
    popup2.style.display = 'block';
});

// close popup when close button is clicked
closeBtn2.addEventListener('click', () => {
    popup2.style.display = 'none';
});

// close popup when user clicks outside of it
window.addEventListener('click', (e) => {
    if (e.target == popup2) {
        popup2.style.display = 'none';
    }
});

const numberInput2 = document.getElementById('number-input2');
const submitBtn2 = document.getElementById('submit-btn2');
const productTable2 = document.getElementById('product-table2');
const activateBtns2 = document.getElementsByClassName('activate-btn2');
const productPrices2 = document.getElementsByClassName('product-price2');
const totalSum2 = document.getElementById('total-sum2');

// Initialize product prices array
const productPricesArr2 = [40, 15, 18, 40];

// Initialize total sum
let currentTotalSum2 = 0;

// Add event listener to submit button
submitBtn2.addEventListener('click', () => {
    const enteredNumber2 = Number(numberInput2.value);

    // Calculate product prices
    for (let i = 0; i < productPricesArr2.length; i++) {
        const productPrice2 = productPricesArr2[i] * enteredNumber2;
        productPrices2[i].textContent = productPrice2;
    }

    // Reset total sum and activate buttons
    currentTotalSum2 = 0;
    totalSum2.textContent = currentTotalSum2;
    for (let i = 0; i < activateBtns2.length; i++) {
        activateBtns2[i].textContent = 'დამატება';
        activateBtns2[i].disabled = false;
    }

});

// Add event listeners to activate buttons
for (let i = 0; i < activateBtns2.length; i++) {
    activateBtns2[i].addEventListener('click', () => {
        const productPrice2 = Number(productPrices2[i].textContent);
        const btnText2 = activateBtns2[i].textContent;

        if (btnText2 === 'დამატება') {
            activateBtns2[i].style.backgroundColor = "red";
            activateBtns2[i].textContent = 'გამოკლება';
            currentTotalSum2 += productPrice2;
            totalSum2.textContent = currentTotalSum2;
        } else {
            activateBtns2[i].style.backgroundColor = "green";
            activateBtns2[i].textContent = 'დამატება';
            currentTotalSum2 -= productPrice2;
            totalSum2.textContent = currentTotalSum2;
        }
    });
}