export const timetable = () => {
	const timeTableButton = document.querySelectorAll(".timetable__item");
	const timeTableActivities = document.querySelectorAll(".timetable__activity");
	const timeTableTrainers = document.querySelectorAll(".timetable__trainer");

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

			timeTableButton.forEach((button) => {
				button.classList.remove("timetable__item--active");
			});

			button.classList.add("timetable__item--active");

			timeTableActivities.forEach((activity, index) => {
				const isAllowed = timeTableData.activities.includes(
					activity.textContent.trim(),
				);

				if (!isAllowed) {
					activity.classList.add("timetable__hidden");
					timeTableTrainers[index].classList.add("timetable__hidden");
				} else {
					activity.classList.remove("timetable__hidden");
					timeTableTrainers[index].classList.remove("timetable__hidden");
				}
			});
		});
	});
};
