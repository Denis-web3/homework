export const modal = () => {
	const modalOpenButton = document.querySelector(".modal__open");

	const modal = document.querySelector(".modal");

	const modalWindow = document.querySelector(".modal__window");

	const modalCloseButton = document.querySelector(".modal__close");

	const focusableElements = modalWindow.querySelectorAll("button, input");

	const firstElement = focusableElements[0];

	const lastElement = focusableElements[focusableElements.length - 1];

	const closeModal = () => {
		modal.classList.remove("modal--open");
		modalWindow.classList.remove("modal__window--open");
		document.body.classList.remove("modal-open");
	};

	modalOpenButton.addEventListener("click", () => {
		modal.classList.add("modal--open");
		modalWindow.classList.add("modal__window--open");
		modalCloseButton.focus();
		document.body.classList.add("modal-open");
	});

	modalCloseButton.addEventListener("click", () => {
		closeModal();
	});

	modal.addEventListener("click", event => {
		if (event.target === modal) {
			closeModal();
		}
	});

	document.addEventListener("keydown", event => {
		if (event.key === "Escape") {
			closeModal();
		}

		if (
			event.key === "Tab" &&
			modal.classList.contains("modal--open") &&
			!event.shiftKey &&
			document.activeElement === lastElement
		) {
			event.preventDefault();
			firstElement.focus();
		}
	});
};
