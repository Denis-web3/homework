// export позволяет экспортировать функцию из discription.js, чтобы импортировать и вызвать её в index.js.
export const discription = () => {
	// Переменная "const discriptionData"  массив, внутри которого вложены объекты, в которых содержатся 2 свойства, к каждому из которых присвоены 3 значения.
	const discriptionData = [
		{
			titles: ["BEST GYM ", "OUR PLAN", "TECHNIQUE"],
			texts: [
				"Pulse began with a simple idea: training should help people feel stronger, healthier, and more confident every day.",
				"We bring together people with different goals and experience levels. Everyone can find motivation, support, and a place to grow.",
				"We believe in consistency, honest effort, and progress that lasts. Our goal is to make every workout meaningful.",
			],
		},

		{
			titles: ["WHERE IT STARTED", "OUR COMMUNITY", "OUR VALUES"],
			texts: [
				"Every effective workout starts with a clear goal and a plan that fits your body, experience, and lifestyle.",
				"We pay attention to your needs and help you choose exercises that make training comfortable, productive, and enjoyable.",
				"With the right technique and regular effort, small improvements turn into noticeable results over time.",
			],
		},

		{
			titles: ["YOUR GOAL", "YOUR ROUTINE", "YOUR PROGRESS"],
			texts: [
				"Start by choosing a goal that inspires you, whether it is building strength, improving endurance, or feeling more energetic.",
				"A simple and consistent routine makes it easier to stay motivated and turn training into a natural part of your lifestyle.",
				"We track your progress and help you adjust your workouts so that you can continue moving forward with confidence.",
			],
		},

		{
			titles: ["SMART TRAINING", "PERSONAL APPROACH", "BETTER RESULTS"],
			texts: [
				"Every effective workout starts with a clear goal and a plan that fits your body, experience, and lifestyle.",
				"We pay attention to your needs and help you choose exercises that make training comfortable, productive, and enjoyable.",
				"With the right technique and regular effort, small improvements turn into noticeable results over time.",
			],
		},
	];

	// Переменные "discriptionButtons", "discriptionInfoTitle ", "discriptionInfoText". ищет классы из html разметки моего макета, и возвращает их для добавления изменений.
	// const discriptionButtons = document.querySelector(
	// 	".discription__item::before",
	// );
	const discriptionButtons = document.querySelectorAll(".discription__item");
	const discriptionInfo = document.querySelector(".discription__info");
	const discriptionInfoTitle = document.querySelectorAll(
		".discription__info-title",
	);
	const discriptionInfoText = document.querySelectorAll(
		".discription__info-text",
	);

	discriptionButtons[0].classList.add("discription__item--active");
	discriptionInfo.classList.add("visible");
	// discriptionButtons.forEach((button, index) проходится по всем кнопкам  с индексом (индекс - это порядковый номер кнопки)
	discriptionButtons.forEach((button, index) => {
		// навешивает на них слушатель событий в виде "клика".
		button.addEventListener("click", () => {
			//  Слушатель принимает колбэк функцию, которая по индексу нажатой кнопки выбирается соответствующий объект из discriptionData.
			const currentData = discriptionData[index];

			//  класс "active" удаляем, чтоб они не были подсвечены
			discriptionButtons.forEach(button => {
				button.classList.remove("discription__item--active");
			});

			// Дальше проходимся по всем копкам и если кликнули, то добавляется класс "active"
			button.classList.add("discription__item--active");

			discriptionInfo.classList.remove("visible");

			setTimeout(() => {
				discriptionInfoTitle.forEach((title, index) => {
					title.textContent = currentData.titles[index];
				});
				discriptionInfoText.forEach((text, index) => {
					text.textContent = currentData.texts[index];
				});
				discriptionInfo.classList.add("visible");
			}, 200);
		});
	});
};
