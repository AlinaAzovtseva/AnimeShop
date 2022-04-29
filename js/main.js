
let popupBg = document.querySelectorAll('.popup__bg');
let popup = document.querySelector('.popup__content');
let openPopup = document.querySelectorAll('.procuct__item');
let closePopup = document.querySelectorAll('.x');

openPopup.forEach((button) => {
	button.addEventListener("click" ,(e) => {
		let tabId = button.getAttribute("data-tab")
		let currentTab = document.querySelector(tabId);
		currentTab.classList.add('active');
	});
});

closePopup.forEach((el) => {
	el.addEventListener("click" ,() => { 
		let parent = el.closest('.popup__bg')
		parent.classList.remove('active');
	});
});


let accordion = document.querySelectorAll('.accordion');
let content = document.querySelectorAll('accordion-content');

for(item of accordion) {
	item.addEventListener("click" ,function(){
		if(this.classList.contains('active')) {
			this.classList.remove('active');
		} else {
			for(el of accordion){
				el.classList.remove('active');
			}
			this.classList.add('active');
		}
	})
}

