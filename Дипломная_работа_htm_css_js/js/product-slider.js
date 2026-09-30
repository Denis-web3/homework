export const productSlider = () => {
	new Swiper(".product__slider", {
		slidesPerView: "auto",
		centeredSlides: true,
		loop: true,

		mousewheel: {
			forceToAxis: true,
		},
	});
};

const swiper = new Swiper(".swiper", {
	direction: "vertical",
	loop: true,
	// mousewheel: {
	// 	forceToAxis: true,
	// },
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return `<span class="${className}">${index + 1}</span>`;
		},
	},
});
