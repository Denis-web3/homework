export const timetable = () => {
	const timeTableButton = document.querySelectorAll(".timetable__item");
	const sessions = document.querySelectorAll(".timetable__session");
	const trainingCategories = [
		{
			category: "ALL TRAINING",
			activities: [
				"FITNESS CLASS",
				"BOXING",
				"OPEN GYM",
				"BODYBUILDING",
				"POWERLIFTING",
			],
		},
		{
			category: "BODYBUILDING",
			activities: ["BODYBUILDING"],
		},
		{
			category: "CARDIO",
			activities: ["BOXING", "FITNESS CLASS"],
		},

		{
			category: "GYM",
			activities: ["OPEN GYM"],
		},
		{
			category: "POWERLIFTING",
			activities: ["POWERLIFTING"],
		},
	];

	timeTableButton[0].classList.add("timetable__item--active");

	timeTableButton.forEach((button, index) => {
		button.addEventListener("click", () => {
			const timeTableData = trainingCategories[index];

			timeTableButton.forEach(button => {
				button.classList.remove("timetable__item--active");
			});

			button.classList.add("timetable__item--active");

			sessions.forEach(session => {
				const trainer = session.querySelector(".timetable__trainer");

				session.classList.remove("timetable__session--selected");
				trainer.classList.remove("timetable__trainer--selected");

				if (timeTableData.activities.includes(session.dataset.training)) {
					session.classList.add("timetable__session--selected");
					trainer.classList.add("timetable__trainer--selected");
				}
			});
		});
	});
};
