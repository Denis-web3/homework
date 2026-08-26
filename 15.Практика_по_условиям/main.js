// // Задача 1:

// const number = 6;

// if (number % 2 === 0) {
// 	console.log("Чётное");
// } else {
// 	console.log("Не чётное");
// }

// Задача 2:

// let age = 66;
// let discount = age < 18 ? 10 : age <= 65 ? 20 : 30;
// {
// 	console.log(discount);
// }

// let age = 66;
// let discount;

// switch (true) {
// 	case age < 18:
// 		discount = 10;
// 		break;
// 	case age >= 18 && age <= 65:
// 		discount = 20;
// 		break;
// 	default:
// 		discount = 30;
// }
// {
// 	console.log(`Скидка ${discount}%`);
// }

// Задача 3:

// let userName = prompt("Введите имя пользователя");
// let password = prompt("Введите пароль");
// if ((userName === "admin" || userName === "user") && password === "123456") {
// 	alert("Доступ разрешён");
// } else {
// 	alert("Доступ запрещён");
// }

//Задача 1:

const number = 5;

if (number % 2 === 0) {
	console.log("Чётное число");
} else {
	console.log("Не чётное число");
}

//Задача 2:

let age = 66;
let discount = age < 18 ? 10 : age <= 65 ? 20 : 30;
{
	console.log(`Скидка ${discount} %`);
}

let age = 66;
let discount;

switch (true) {
	case age < 18:
		discount = 10;
		break;
	case age <= 65:
		discount = 20;
		break;
	case age > 65:
		discount = 30;
}
console.log(`Скидка ${discount} %`);

//Задача 3:

const userName = prompt("Введите имя пользователя");
const passWord = +prompt("Введите пароль");

if ((userName === "admin" || userName === "user") && passWord === "123456") {
	alert("Доступ разрешён");
} else {
	alert("Доступ запрещён");
}

// Задача 4:

let weightPackage = +prompt("Введите вес посылки");
let deliveryType = prompt("Выберите тип доставки(Стандарт, Экспресс, Премиум)");

if (weightPackage <= 0) {
	console.log("Некорректный вес посылки");
}

if (
	deliveryType !== "Стандарт" &&
	deliveryType !== "Экспресс" &&
	deliveryType !== "Премиум"
) {
	console.log("Неверный тип доставки");
}

let baseCost;

if (weightPackage < 1) {
	baseCost = 5;
}

if (weightPackage >= 1 && weightPackage <= 5) {
	baseCost = 10;
} else {
	baseCost = 15;
}

let coefficient;

switch (deliveryType) {
	case "Стандарт":
		coefficient = 1;
		break;
	case "Экспресс":
		coefficient = 1.5;
		break;
	case "Премиум":
		coefficient = 2;
		break;
}

let totalCost = baseCost * coefficient;

alert("Итоговая стоимость:" + totalCost + "$");
