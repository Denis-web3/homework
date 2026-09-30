import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
import { modal } from "./modal.js";
import { discription } from "./discription.js";
import { timetable } from "./timetable.js";
import { backToTop } from "./back-to-top-button.js";
import { search } from "./search.js";

import { productSlider } from "./product-slider.js";
import { product } from "./product.js";

try {
	const headerFixed = new HeaderFixed({
		HEADER: "header",
		HEADER_FIXED: "header--fixed",
	});

	new BurgerMenu(
		{
			BURGER: "burger",
			BURGER_OPEN: "burger--open",
			HEADER_MENU: "header__menu",
			HEADER_MENU_OPEN: "header__menu--open",
			lABEL: {
				OPEN: "Открыть меню",
				CLOSE: "Закрыть меню",
			},
			PAGE_BODY: "page__body",
			PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
			MENU_LINK: "menu__link",
			BREAKPOINT: 1115,
			MAIN: "main",
		},
		headerFixed,
	);

	// new Modal({
	// 	PAGE_BODY: "page__body",
	// 	PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
	// });

	//productSlider();
	//product();
	modal();
	discription();
	timetable();
	backToTop();
	search();
} catch (error) {
	console.error(error);
}
