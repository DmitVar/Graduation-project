'use strict';
function app() {
    const imageArray = ['image/game.jpg', 'image/maket1_1.jpg', 'image/maket1_2.jpg', 'image/maket1_3.jpg', 
    'image/maket1_4.jpg', 'image/maket1_5.jpg', 'image/maket2_1.jpg', 'image/maket2_2.jpg', 'image/maket3_1.jpg', 
    'image/maket3_2.jpg', 'image/maket3_3.jpg', 'image/maket3_4.jpg', 'image/maket3_5.jpg', 'image/maket3_6.jpg', 
    'image/maket3_7.jpg', 'image/maket3_8.jpg'];
    let scrollValue;
    let mobileNav = document.getElementById('mobile__nav');
    let headerSize = document.getElementById('wrapper').clientHeight;
    let aboutSize = document.getElementById('about').clientHeight;
    let sliderSize = document.getElementById('slider__box').clientHeight;
    let portfolioSize = document.getElementById('portfolio__container').clientHeight;
    let contactsSize = document.getElementById('contact__container').clientHeight;
    let elHeader = document.getElementById('header');
    let elSlider = document.getElementById('slider__box');
    let elPortfolio = document.getElementById('portfolio__container');
    let elAbout = document.getElementById('about');
    let elContacts = document.getElementById('contact__container');
    let navBox = document.getElementById('nav__box');
    let menuSize = document.getElementById('menu').clientHeight;
    let homeButton = document.getElementById('home');
    let aboutButton = document.getElementById('about__nav');
    let aboutImage = document.getElementById('about__image');
    let aboutText = document.getElementById('about__text');
    let portfolioButton = document.getElementById('portfolio');
    let skillsButton = document.getElementById('skills');
    let contactsButton = document.getElementById('contacts');
    let homeButton1 = document.getElementById('home1');
    let aboutButton1 = document.getElementById('about__nav1');
    let portfolioButton1 = document.getElementById('portfolio1');
    let skillsButton1 = document.getElementById('skills1');
    let contactsButton1 = document.getElementById('contacts1');
    let buttonLeft = document.getElementById('left__button');
    let buttonRight = document.getElementById('right__button');
    let imageBox = document.getElementById('slider__screen');
    let imageIndex = 0;
    let imageIndex1;
    let diagramHtml = document.getElementById('diagram__html');
    let progresHtml = document.getElementById('plug__html');
    let currentHtml = 0;
    let diagramCss = document.getElementById('diagram__css');
    let progresCss = document.getElementById('plug__css');
    let currentCss = 0;
    let diagramJS = document.getElementById('diagram__javascript');
    let progresJS = document.getElementById('plug__javascript');
    let currentJS = 0;
    let diagramReact = document.getElementById('diagram__react');
    let progresReact = document.getElementById('plug__react');
    let currentReact = 0;
    let diagramAnimationStart = true;
    let aboutMeAnimationStart = true;
    homeButton.addEventListener('click', ()=> {
        window.scrollTo(0, 0);
    });
    function diagramStart(el, progres, current, stop, color){
            let timer = setInterval( () => {
            current = (current >= 359) ? 0: current + 3.6;
            progres.innerHTML = `${Math.trunc(current / 3.6)}%`;
            el.style.backgroundImage = `conic-gradient(${color} ${current}deg, white ${current}deg 360deg)`;
            if((Math.trunc(current / 3.6)) >= stop){
                clearInterval(timer);
            }
        }, 100);
    }
   
    function scrollElement(el) {
        el.scrollIntoView({ block: "start", inline: "nearest"});
    }

    aboutButton.addEventListener('click', () => {
        scrollElement(elAbout);
    });
    portfolioButton.addEventListener('click', () =>{
        scrollElement(elSlider);
    });
    skillsButton.addEventListener('click', () => {
        scrollElement(elPortfolio);
    });
    contactsButton.addEventListener('click', () =>{
        scrollElement(elContacts);
    });
    homeButton1.addEventListener('click', () =>{
        scrollElement(elHeader);
    });
    aboutButton1.addEventListener('click', () => {
        scrollElement(elAbout);
    });
    portfolioButton1.addEventListener('click', () =>{
        scrollElement(elSlider);
    });
    skillsButton1.addEventListener('click', () => {
        scrollElement(elPortfolio);
    });
    contactsButton1.addEventListener('click', () =>{
        scrollElement(elContacts);
    }),


    window.addEventListener('scroll', () => {
        scrollValue = window.pageYOffset;
        

        if (scrollValue >= 0 && scrollValue < 70) {
            document.getElementById('menu').style.backgroundColor = 'rgba(22, 2, 81, 0)';
        } else {
            document.getElementById('menu').style.backgroundColor = 'rgba(22, 2, 81, 0.9)';
        }
        if (scrollValue >= 0 && scrollValue <= (headerSize - menuSize)) {
            homeButton.style.color = 'red';
            aboutButton.style.color = '#fff';
            portfolioButton.style.color = '#fff';
            skillsButton.style.color = '#fff';
            contactsButton.style.color = '#fff';
        } else if (scrollValue > (headerSize - menuSize) && scrollValue <= (headerSize + aboutSize - menuSize)) {
            homeButton.style.color = '#fff';
            aboutButton.style.color = 'red';
            portfolioButton.style.color = '#fff';
            skillsButton.style.color = '#fff';
            contactsButton.style.color = '#fff';
        } else if (scrollValue > (headerSize + aboutSize - menuSize) && scrollValue <= 
                   (headerSize + aboutSize + (sliderSize - menuSize))) {
            homeButton.style.color = '#fff';
            aboutButton.style.color = '#fff';
            portfolioButton.style.color = 'red';
            skillsButton.style.color = '#fff';
            contactsButton.style.color = '#fff';
            
        } else if (scrollValue > headerSize + aboutSize + sliderSize - menuSize && scrollValue <= 
                  (headerSize + aboutSize + sliderSize + portfolioSize - menuSize)) {
            homeButton.style.color = '#fff';
            aboutButton.style.color = '#fff';
            skillsButton.style.color = 'red';
            portfolioButton.style.color = '#fff';
            contactsButton.style.color = '#fff';
        } else if (scrollValue > headerSize + aboutSize + sliderSize + portfolioSize - menuSize && scrollValue <= 
                  (headerSize + aboutSize + sliderSize + portfolioSize + contactsSize - menuSize)) {
            homeButton.style.color = '#fff';
            aboutButton.style.color = '#fff';
            skillsButton.style.color = '#fff';
            portfolioButton.style.color = '#fff';
            contactsButton.style.color = 'red';
        }

        if (scrollValue >= 0 && scrollValue <= (headerSize - menuSize)) {
            homeButton1.style.color = 'red';
            aboutButton1.style.color = '#fff';
            portfolioButton1.style.color = '#fff';
            skillsButton1.style.color = '#fff';
            contactsButton1.style.color = '#fff';
        } else if (scrollValue > (headerSize - menuSize) && scrollValue <= (headerSize + aboutSize - menuSize)) {
            homeButton1.style.color = '#fff';
            aboutButton1.style.color = 'red';
            portfolioButton1.style.color = '#fff';
            skillsButton1.style.color = '#fff';
            contactsButton1.style.color = '#fff';
        } else if (scrollValue > (headerSize + aboutSize - menuSize) && scrollValue <= 
                  (headerSize + aboutSize + (sliderSize - menuSize))) {
            homeButton1.style.color = '#fff';
            aboutButton1.style.color = '#fff';
            portfolioButton1.style.color = 'red';
            skillsButton1.style.color = '#fff';
            contactsButton1.style.color = '#fff';
            
        } else if (scrollValue > headerSize + aboutSize + sliderSize - menuSize && scrollValue <= 
                  (headerSize + aboutSize + sliderSize + portfolioSize - menuSize)) {
            homeButton1.style.color = '#fff';
            aboutButton1.style.color = '#fff';
            skillsButton1.style.color = 'red';
            portfolioButton1.style.color = '#fff';
            contactsButton1.style.color = '#fff';
        } else if (scrollValue > headerSize + aboutSize + sliderSize + portfolioSize - menuSize && scrollValue <= 
                  (headerSize + aboutSize + sliderSize + portfolioSize + contactsSize - menuSize)) {
            homeButton1.style.color = '#fff';
            aboutButton1.style.color = '#fff';
            skillsButton1.style.color = '#fff';
            portfolioButton1.style.color = '#fff';
            contactsButton1.style.color = 'red';
        }

        if(scrollValue >= headerSize && scrollValue < (headerSize + aboutSize)){
            
            setTimeout(() => {
                if(aboutMeAnimationStart == true){
                    rotateTextY(aboutImage);
                    rotateTextY(aboutText);
                    aboutMeAnimationStart = false;
                }  
            }, 100);
        }

        if(scrollValue > (headerSize + aboutSize) && 
           scrollValue < (headerSize + aboutSize + sliderSize + portfolioSize)){
            
                setTimeout(() => {
                    if(diagramAnimationStart == true){
                        diagramStart(diagramHtml, progresHtml, currentHtml, 90, 'green');
                        diagramStart(diagramCss, progresCss, currentCss, 75, 'grey');
                        diagramStart(diagramJS, progresJS, currentJS, 80, 'red');
                        diagramStart(diagramReact, progresReact, currentReact, 60, 'black');
                        diagramAnimationStart = false;
                    }  
                }, 800);
        }

    });
    function rotateTextY(el){
        let deg = 90;
        let timer6 = setInterval(() =>{
            el.style.transform = `rotateY(${deg -= 1}deg)`;
            if(deg == 0){
                clearInterval(timer6);
            }
        }, 15);
    }
    function rotateTextX(el){
        let deg = 90;
        let timer6 = setInterval(() =>{
            el.style.transform = `rotateX(${deg -= 1}deg)`;
            if(deg == 0){
                clearInterval(timer6);
            }
        }, 15);
    }
    function rotateTextZ(el){
        let deg = 90;
        let timer6 = setInterval(() =>{
            el.style.transform = `rotateZ(${deg -= 1}deg)`;
             if(deg == 0){
                clearInterval(timer6);
            }
        }, 15);
    }
    let headerText = document.getElementById('header__text');
    let headerText1 = document.getElementById('header__text1');
    let headerText2 = document.getElementById('header__text2');
    rotateTextY(headerText);
    rotateTextX(headerText1);
    rotateTextZ(headerText2);

    function moveImageLeft() {
        imageIndex++;
        if (imageIndex > imageArray.length - 1) {
            imageIndex = imageArray.length - 1;
            return;
        }
        let image = document.createElement('img');
        image.classList.add('image__portfolio');
        image.setAttribute('src', imageArray[imageIndex]);
        imageBox.append(image);
        image.style.top = '0px';
        image.style.left = '70vw';
        let timer = setInterval(() => {
            let i = image.offsetLeft;
            image.style.left = `${i -= 4}px`;
            if (i <= 0) {
                clearInterval(timer);
            }
        }, 0.5);
    }
    function moveImageRight() {
        let arr = document.querySelectorAll('.image__portfolio');
        imageIndex1 = arr.length - 1;
        if (imageIndex1 == 0) {
            return;
        }
        let i = 0;
        let timer1 = setInterval(() => {
            arr[imageIndex1].style.left = `${i += 4}px`;
            if (arr[imageIndex1].offsetLeft >= arr[imageIndex1].offsetWidth) {
                clearInterval(timer1);
                arr[imageIndex1].remove();
                imageIndex--;
            }
        }, 0.5);
    }

    buttonRight.addEventListener('click', moveImageLeft);
    buttonLeft.addEventListener('click', moveImageRight);
    mobileNav.addEventListener('click', () => {
        document.getElementById('nav__box').classList.toggle('nav__box__invisible');        
    });
    let form = document.forms.fedback;
    let fedbackObj = {};
    let buttonSubmit = document.getElementById('contact__button');
    let jsonSubmitObj;
    buttonSubmit.addEventListener('click', ()=>{
        fedbackObj.name = form.userName.value;
        fedbackObj.email = form.userEmail.value;
        fedbackObj.text = form.userText.value;
        jsonSubmitObj = JSON.stringify(fedbackObj);
        console.log(jsonSubmitObj);
        console.log(fedbackObj);
    });
    

}
app();