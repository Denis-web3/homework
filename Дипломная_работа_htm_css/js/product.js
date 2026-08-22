export const product = () => {
	const productList = document.querySelector('[data-product="list"]');
	const productButtons = document.querySelectorAll('[data-product="button"]');

	const handleSizeClick = (event) => {
		const target = event.target;

		if (!target?.classList.contains("product__product-button")) return;

		productButtons.forEach((button) =>
			button.classList.remove("product__product-button--active"),
		);
		target.classList.add("product__product-button--active");
	};

	productList.addEventListener("click", handleSizeClick);
};
