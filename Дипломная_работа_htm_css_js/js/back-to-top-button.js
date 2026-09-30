export const backToTop = () => {
	const backToTopButt = document.querySelector(".back-to-top");

	const updateVisibility = () => {
		if (window.scrollY > 300) {
			backToTopButt.classList.add("back-to-top--visible");
		} else {
			backToTopButt.classList.remove("back-to-top--visible");
		}
	};
	window.addEventListener("scroll", updateVisibility);
	updateVisibility();

	backToTopButt.addEventListener("click", () => {
		window.scroll({ top: 0, behavior: "smooth" });
	});
};
