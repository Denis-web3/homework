export const search = () => {
	const searchButton = document.querySelector(".header__action-button-search");

	const searchStroke = document.querySelector(".header__action-search-stroke");

	const searchInput = searchStroke.querySelector("input");

	const sections = document.querySelectorAll("main section[id]");

	const searchResult = document.querySelector(".header__action-search-results");

	searchButton.addEventListener("click", () => {
		const isOpen = searchStroke.classList.toggle(
			"header__action-search-stroke--open",
		);

		searchButton.setAttribute("aria-expanded", isOpen);

		if (isOpen) {
			searchInput.focus();
		}
	});

	const closeSearch = () => {
		searchStroke.classList.remove("header__action-search-stroke--open");
		searchButton.setAttribute("aria-expanded", "false");
		searchButton.focus();
	};

	document.addEventListener("keydown", event => {
		if (
			event.key === "Escape" &&
			searchStroke.classList.contains("header__action-search-stroke--open")
		) {
			closeSearch();
		}
	});

	searchInput.addEventListener("input", () => {
		const query = searchInput.value.trim().toLowerCase();
		searchResult.replaceChildren();
		if (query === "") {
			console.log([]);
			return;
		}

		const matches = [];

		sections.forEach(section => {
			const lowerCase = section.textContent.toLowerCase();

			if (lowerCase.includes(query)) {
				matches.push(section);
			}
		});
		console.log(matches);

		if (matches.length === 0) {
			searchResult.textContent = "Nothing found";
			return;
		}

		matches.forEach(section => {
			const link = document.createElement("a");
			const heading = section.querySelector("h1, h2, h3");

			link.href = "#" + section.id;

			if (heading) {
				link.textContent = heading.textContent.trim();
			} else {
				link.textContent = section.id;
			}
			searchResult.append(link);
		});
	});
};
