export const booking = () => {
	const bookingButtons = document.querySelectorAll(
		".timetable__booking-button",
	);
	const trainingElement = document.querySelector(".modal-signup__training");
	const trainerElement = document.querySelector(".modal-signup__trainer");
	const dayElement = document.querySelector(".modal-signup__day");
	const timeElement = document.querySelector(".modal-signup__time");
	const modalElement = document.querySelector(".modal");
	const modalWindow = document.querySelector(".modal-signup");
	const bookingForm = document.querySelector(".modal-signup__form");
	const bookingMessage = document.querySelector(".modal-signup__message");

	let selectedSession;

	bookingButtons.forEach(button => {
		button.addEventListener("click", () => {
			const session = button.closest(".timetable__session");
			selectedSession = {
				training: session.dataset.training,
				trainer: session.dataset.trainer,
				day: session.dataset.day,
				time: session.dataset.time,
			};
			trainingElement.textContent = selectedSession.training;
			trainerElement.textContent = selectedSession.trainer;
			dayElement.textContent = selectedSession.day;
			timeElement.textContent = selectedSession.time;
			modalElement.classList.add("modal--open");
			modalWindow.classList.add("modal__window--open");
		});
	});

	bookingForm.addEventListener("submit", event => {
		event.preventDefault();

		const form = event.currentTarget;

		const userName = form.elements.name.value;
		const userPhone = form.elements.phone.value;
		bookingMessage.textContent = `Спасибо, ${userName}! Вы записаны на тренировку ${selectedSession.training}.`;

		console.log("Имя:", userName);
		console.log("Телефон:", userPhone);
	});
};
