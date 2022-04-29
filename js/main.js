
let popupBg = document.querySelectorAll('.popup__bg');
let popup = document.querySelector('.popup__content');
let openPopup = document.querySelectorAll('.procuct__item');
let closePopup = document.querySelectorAll('.x');

//open
// openPopup.forEach((button) => {
// 	button.addEventListener("click" ,(e) => {
// 		let tabId = button.getAttribute("data-tab")
// 		let currentTab = document.querySelector(tabId);
// 		currentTab.classList.add('active');
// 	});
// });

//x
closePopup.forEach((el) => {
	el.addEventListener("click" ,() => { 
		let parent = el.closest('.popup__bg')
		parent.classList.remove('active');
	});
});

//accordion
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

//counter
window.addEventListener("click", function(event){

	if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){

	}

	if(event.target.dataset.action === 'plus'){

		const counterWrapper = event.target.closest('.counter-wrapper');

		const counter = counterWrapper.querySelector('[data-counter]');

		counter.innerText = ++counter.innerText;
	}

	if(event.target.dataset.action === 'minus'){
		 
		const counterWrapper = event.target.closest('.counter-wrapper');

		const counter = counterWrapper.querySelector('[data-counter]');

		if ( parseInt(counter.innerText) > 1 ) {

 		counter.innerText = --counter.innerText;
		}
	}

});
//inner
const basket = document.querySelector('.basket');
const inner = document.querySelector('.basket__inner');

basket.addEventListener("click" ,() => { 
	inner.classList.toggle('active');
})

//basket
const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener("click", function(event){

	if(event.target.hasAttribute('data-cart')){
		
		const card = event.target.closest('.procuct__item');
		
		const productInfo = {
			id: card.getAttribute('data-tab'),
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.name__product').innerText,
			price: card.querySelector('.price').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		}
		console.log(productInfo)

		const cartItemHTML = `<div class="catr__inner" data-tab="${productInfo.id}">
								<img src="${productInfo.imgSrc}" alt="">
								<div class="cart-info">
									<div class="title-info">${productInfo.title}</div>
									<div class="items counter-wrapper">
										<div class="items__control" data-action ="minus">-</div>
										<div class="items__control" data-counter >${productInfo.counter}</div>
										<div class="items__control" data-action ="plus">+</div>
									</div>
									<div class="price">${productInfo.price}</div>
								</div>
							</div>`

		cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)			
	}
})