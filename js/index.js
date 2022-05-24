function app(){
const navigation = document.getElementById('navigation'),
		header = document.getElementById('header'),
		aboutMe = document.querySelector('.adout-me__container'),
		skills = document.querySelector('.skills__conteiner'),
		portfolio = document.querySelector('.portfolio'),
		contacts = document.querySelector('.contacts'),
		diagramHtml = document.getElementById('diagram__html'),
		plugHtml = document.getElementById('plug__html'),
		diagramCss = document.getElementById('diagram__css'),
		plugCss = document.getElementById('plug__css'),
		diagramJS = document.getElementById('diagram__javascript'),
		plugJS = document.getElementById('plug__javascript'),
		diagramReact = document.getElementById('diagram__react'),
		plugReact = document.getElementById('plug__react'),

		// button
		homeButton = document.getElementById('home'),
		homeButtonMobile = document.getElementById('home__mobile'),
		aboutMeButton = document.getElementById('about__me'),
		aboutMeButtonMobile = document.getElementById('about-me__mobile'),
		skillsButton = document.getElementById('skills'),
		skillsButtonMobile = document.getElementById('skills__mobile'),
		portfolioButton = document.getElementById('portfolio'),
		portfolioButtonMobile = document.getElementById('portfolio__mobile'),
		contactsButton = document.getElementById('contacts'),
		contactsButtonMobile = document.getElementById('contacts__mobile'),
		submitButton = document.getElementById('submit__button'),


		headerTitle = document.querySelector('.header__title'),
		headerText = document.querySelector('.header__text');
let scrollValue;
const navigationHeight = navigation.offsetHeight,
	  headerHeight = header.offsetHeight,
	  aboutMeHeight = aboutMe.offsetHeight,
	  skillsHeight = skills.offsetHeight,
	  portfolioHeight = portfolio.offsetHeight,
	  contactsHeight = contacts.offsetHeight;
let coordHeader = 0; 
let coordAboutMe = getCoords(aboutMe).top - navigationHeight;
let coordSkills = getCoords(skills).top - navigationHeight;
let coordPortfolio = getCoords(portfolio).top - navigationHeight;
let coordContacts = getCoords(contacts).top - navigationHeight;
let diagramAnimationStart = true;
console.log(coordAboutMe, coordSkills, coordPortfolio, coordContacts)
function addScrollEventButtons(el, scroll){
	el.addEventListener('click', () =>{
		window.scrollTo({
			top: scroll,
			behavior: 'smooth'
		});
	});
}

addScrollEventButtons(homeButton, coordHeader);
addScrollEventButtons(homeButtonMobile, coordHeader);
addScrollEventButtons(aboutMeButton, coordAboutMe);
addScrollEventButtons(aboutMeButtonMobile, coordAboutMe);
addScrollEventButtons(skillsButton, coordSkills);
addScrollEventButtons(skillsButtonMobile, coordSkills);
addScrollEventButtons(portfolioButton,  coordPortfolio);
addScrollEventButtons(portfolioButtonMobile, coordPortfolio);
addScrollEventButtons(contactsButton, coordContacts);
addScrollEventButtons(contactsButtonMobile, coordContacts);



function diagramStart(el, progres, current, stop, color){
	let timer = setInterval(() => {
	current = (current >= 359) ? 0: current + 3.6;
	progres.innerHTML = `${Math.trunc(current / 3.6)}%`;
	el.style.backgroundImage = `conic-gradient(${color} ${current}deg, white ${current}deg 360deg)`;
	if((Math.trunc(current / 3.6)) >= stop){
		 clearInterval(timer);
	}
}, 100);
}

function getCoords(elem) {
	let box = elem.getBoundingClientRect();
  
	return {
	  top: box.top + window.pageYOffset,
	  right: box.right + window.pageXOffset,
	  bottom: box.bottom + window.pageYOffset,
	  left: box.left + window.pageXOffset
	};
}

window.addEventListener('scroll', () =>{
	scrollValue = window.pageYOffset;
	if(scrollValue > 0){
		navigation.style.backgroundColor = 'rgba(27, 29, 31, 0.9)';
		headerTitle.classList.remove('visible-header__text');
		headerTitle.classList.add('invisible-header__text');
		headerText.classList.remove('visible-header__text');
		headerText.classList.add('invisible-header__text');
	} else {
		navigation.style.backgroundColor = 'rgba(27, 29, 31, 0)';
		headerTitle.classList.remove('invisible-header__text');
		headerTitle.classList.add('visible-header__text');
		headerText.classList.remove('invisible-header__text');
		headerText.classList.add('visible-header__text');
	}
	//change button color
	if(scrollValue < coordAboutMe -1){
		homeButton.style.color = 'rgb(15, 135, 214)';
		homeButtonMobile.style.color = 'rgb(15, 135, 214)';
		aboutMeButton.style.color = 'rgb(255, 255, 255)';
		aboutMeButtonMobile.style.color = 'rgb(255, 255, 255)';
		skillsButton.style.color = 'rgb(255, 255, 255)';
		skillsButtonMobile.style.color = 'rgb(255, 255, 255)';
		portfolioButton.style.color = 'rgb(255, 255, 255)';
		portfolioButtonMobile.style.color = 'rgb(255, 255, 255)';
		contactsButton.style.color = 'rgb(255, 255, 255)';
		contactsButtonMobile.style.color = 'rgb(255, 255, 255)';
		console.log(scrollValue);
	} else if(scrollValue >= coordAboutMe - 1 && scrollValue < coordSkills - 1){
		homeButton.style.color = 'rgb(255, 255, 255)';
		homeButtonMobile.style.color = 'rgb(255, 255, 255)';
		aboutMeButton.style.color = 'rgb(15, 135, 214)';
		aboutMeButtonMobile.style.color = 'rgb(15, 135, 214)';
		skillsButton.style.color = 'rgb(255, 255, 255)';
		skillsButtonMobile.style.color = 'rgb(255, 255, 255)';
		portfolioButton.style.color = 'rgb(255, 255, 255)';
		portfolioButtonMobile.style.color = 'rgb(255, 255, 255)';
		contactsButton.style.color = 'rgb(255, 255, 255)';
		contactsButtonMobile.style.color = 'rgb(255, 255, 255)';
		console.log(scrollValue);
	} else if (scrollValue >= coordSkills -1 && scrollValue < coordPortfolio - 1) {
		console.log(scrollValue);
		homeButton.style.color = 'rgb(255, 255, 255)';
		homeButtonMobile.style.color = 'rgb(255, 255, 255)';
		aboutMeButton.style.color = 'rgb(255, 255, 255)';
		aboutMeButtonMobile.style.color = 'rgb255, 255, 255)';
		skillsButton.style.color = 'rgb(15, 135, 214)';
		skillsButtonMobile.style.color = 'rgb(15, 135, 214)';
		portfolioButton.style.color = 'rgb(255, 255, 255)';
		portfolioButtonMobile.style.color = 'rgb(255, 255, 255)';
		contactsButton.style.color = 'rgb(255, 255, 255)';
		contactsButtonMobile.style.color = 'rgb(255, 255, 255)';
		if(diagramAnimationStart == true){
			diagramStart(diagramHtml, plugHtml, 0, 85, 'rgb(15, 135, 214)');
			diagramStart(diagramCss, plugCss, 0, 80, 'rgb(15, 135, 214)');
			diagramStart(diagramJS, plugJS, 0, 70, 'rgb(15, 135, 214)');
			diagramStart(diagramReact, plugReact, 0, 60, 'rgb(15, 135, 214)');
			diagramAnimationStart = false;
		}

	} else if (scrollValue >= coordPortfolio - 1 && scrollValue < coordContacts -1) {
		console.log(scrollValue);
		homeButton.style.color = 'rgb(255, 255, 255)';
		homeButtonMobile.style.color = 'rgb(255, 255, 255)';
		aboutMeButton.style.color = 'rgb(255, 255, 255)';
		aboutMeButtonMobile.style.color = 'rgb255, 255, 255)';
		skillsButton.style.color = 'rgb(255, 255, 255)';
		skillsButtonMobile.style.color = 'rgb(255, 255, 255)';
		portfolioButton.style.color = 'rgb(15, 135, 214)';
		portfolioButtonMobile.style.color = 'rgb(15, 135, 214)';
		contactsButton.style.color = 'rgb(255, 255, 255)';
		contactsButtonMobile.style.color = 'rgb(255, 255, 255)';
	}  else if (scrollValue >= coordContacts - 1) {
		homeButton.style.color = 'rgb(255, 255, 255)';
		homeButtonMobile.style.color = 'rgb(255, 255, 255)';
		aboutMeButton.style.color = 'rgb(255, 255, 255)';
		aboutMeButtonMobile.style.color = 'rgb255, 255, 255)';
		skillsButton.style.color = 'rgb(255, 255, 255)';
		skillsButtonMobile.style.color = 'rgb(255, 255, 255)';
		portfolioButton.style.color = 'rgb(255, 255, 255)';
		portfolioButtonMobile.style.color = 'rgb(255, 255, 255)';
		contactsButton.style.color = 'rgb(15, 135, 214)';
		contactsButtonMobile.style.color = 'rgb(15, 135, 214)';
	}
	

});
	//slider
	const slides = document.querySelectorAll('.offer__slide'),
		  leftButton = document.getElementById('slider__left'),
		  rightButton = document.getElementById('slider__right'),
		  slider = document.querySelector('.slider'),
		  slidesFild = document.querySelector('.offer__slider-inner'),
		  portfolioText = document.querySelector('.portfolio-text');
		  sliderWidth = window.getComputedStyle(slider).width,
		  portfolioTextArray = [
			  'Самостоятельная работа верстка сайта по макету Cuda.',
			  'Самостоятельная работа верстка сайта по макету.',
			  'Лаболаторная работа верстка сайта по макету Duhoot в Компьютерной академии "Шаг".',
			  'Самостоятельная работа верстка сайта по макету MYCOMPANY.',
			  'Экзаменационная работа по JavaScript в Компьютерной академии "Шаг". Реализовать игру найди пару. Игра начинается по нажатию кнопки "Начать игру". В начале игры все карты открываются и через 10 секунд переворачиваются рубашкой вверх. Игроку нужно найти все парные карты.',
			  'Самостоятельная работа по верстке сайта и реализации логики на JavaScript. С пощью JavaScript выполнен переход по разделам страницы, валидация полей форм с использование регулярных выражений и логика открытия и закрыти модальных окон. Дизайнер сайта Алина Мороз.'
		  ];

	let slideIndex = 0;
	let offset = 0;
	slidesFild.style.width = 100 * slides.length + '%';
	slidesFild.style.display = 'flex';
	slidesFild.style.transition = '0.5s all';
	portfolioText.textContent = portfolioTextArray[slideIndex];

	slides.forEach((el) =>{
		el.style.width = sliderWidth;
	});
	rightButton.addEventListener('click', () =>{
		if(offset == +sliderWidth.slice(0, sliderWidth.length - 2) * (slides.length - 1)){
			offset = 0;
			slideIndex = 0;
		}else{
			offset += +sliderWidth.slice(0, sliderWidth.length - 2);
			slideIndex++;
		}
		slidesFild.style.transform = `translateX(-${offset}px)`;
		portfolioText.textContent = portfolioTextArray[slideIndex];
	});
	leftButton.addEventListener('click', () =>{
		if(offset == 0){
			offset = +sliderWidth.slice(0, sliderWidth.length - 2) * (slides.length - 1);
			slideIndex = portfolioTextArray.length - 1;
		}else{
			offset -= +sliderWidth.slice(0, sliderWidth.length - 2);
			slideIndex--;
		}
		slidesFild.style.transform = `translateX(-${offset}px)`;
		portfolioText.textContent = portfolioTextArray[slideIndex];
	});

	//form
	const form = document.querySelector('[data-contacts]');
	const reqEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	const emailError = document.querySelector('.email__error');
	const nameError = document.querySelector('.name__error');
	const textError = document.querySelector('.text__error');
	const checkbox = document.getElementById('checkbox');
	let letter = {
		name: '',
		email: '',
		text: ''
	};
	let inputName = form.name;
	let inputEmail = form.email;
	let textEmail = form.text__letter;
	submitButton.disabled = true;
	inputName.addEventListener('input', () =>{
		if(inputName.value.trim() != ''){
			letter.name = inputName.value;
			inputName.style.borderColor = 'green';
			nameError.textContent = ''; 
		} else {
			inputName.style.borderColor = 'red';
			nameError.textContent = 'Поле не может быть пустым';
		}
		if(inputName.value.trim() != '' && reqEmail.test(inputEmail.value) == true && textEmail.value.trim() != '' && checkbox.checked === true){
			submitButton.disabled = false;
		}
	});
	inputEmail.addEventListener('input', () =>{
		if(reqEmail.test(inputEmail.value) == true){
			letter.email = inputEmail.value;
			inputEmail.style.borderColor = 'green';
			emailError.textContent = ''; 
		} else {
			inputEmail.style.borderColor = 'red';
			emailError.textContent = 'Введите корректный e-mail';
		}
		if(inputName.value.trim() != '' && reqEmail.test(inputEmail.value) == true && textEmail.value.trim() != '' && checkbox.checked === true){
			submitButton.disabled = false;
		}
	});
	textEmail.addEventListener('input', () =>{
		if(textEmail.value.trim() != ''){
			letter.text = textEmail.value;
			textEmail.style.borderColor = 'green';
			textError.textContent = ''; 
		} else {
			textEmail.style.borderColor = 'red';
			textError.textContent = 'Поле не может быть пустым';
		}
		if(inputName.value.trim() != '' && reqEmail.test(inputEmail.value) == true && textEmail.value.trim() != '' && checkbox.checked === true){
			submitButton.disabled = false;
		}
		checkbox.addEventListener('click', () =>{
			if(inputName.value.trim() != '' && reqEmail.test(inputEmail.value) == true && textEmail.value.trim() != '' && checkbox.checked === true){
				submitButton.disabled = false;
			};
		});
	});
	//modal windows
	const modalWindowFetchError = document.querySelector('.modal-window-fetch-error'),
		  modalWindowFetchOk = document.querySelector('.modal-window-fetch-ok');
	function showModalWindowFetchMassage(el){
		el.classList.remove('invisible__mobile');
		el.classList.add('modal-animation__open');
		setTimeout(() =>{
			el.classList.remove('modal-animation__open');
			el.classList.add('modal-animation__close');
			setTimeout(() =>{
				el.classList.add('invisible__mobile');
				el.classList.remove('modal-animation__close');
			}, 1000);
		}, 3000);
	}
	
	submitButton.addEventListener('click', () =>{
		console.log(letter);
		let respons = fetch('sendmail.php', {
			method: 'POST',
			body: letter
		});
		if(respons.ok){
			let result = respons.json();
			showModalWindowFetchMassage(modalWindowFetchOk);
			inputName.style.borderColor = '#FFFFFF';
			inputEmail.style.borderColor = '#FFFFFF';
			textEmail.style.borderColor = '#FFFFFF';
			inputName.value = '';
			inputEmail.value = '';
			textEmail.value = '';
			checkbox.checked = false;
			submitButton.disabled = true;
		} else {
			showModalWindowFetchMassage(modalWindowFetchError);
			
		}



	});
}
app();