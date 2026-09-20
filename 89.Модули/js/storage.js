export const getTodosFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("todos"));
};

export const setTodosToLocaLStorage = (todos) => {
	localStorage.setItem("todos", JSON.stringify(todos));
};
