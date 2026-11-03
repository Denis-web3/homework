export const coachSchedule = () => {
	const coachLinks = document.querySelectorAll(".coach__schedule");
	const sessions = document.querySelectorAll(".timetable__session");

	coachLinks.forEach(link => {
		link.addEventListener("click", () => {
			const selectedTrainer = link.dataset.trainer;

			sessions.forEach(session => {
				const trainer = session.querySelector(".timetable__trainer");

				session.classList.remove("timetable__session--selected");
				trainer.classList.remove("timetable__trainer--selected");

				if (session.dataset.trainer === selectedTrainer) {
					session.classList.add("timetable__session--selected");
					trainer.classList.add("timetable__trainer--selected");
				}
			});
		});
	});
};
