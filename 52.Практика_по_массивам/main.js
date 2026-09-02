"use strict";

// // Задача 1:

const users = [
	{ name: `Alex`, age: 24, isAdmin: false },
	{ name: `Bob`, age: 13, isAdmin: false },
	{ name: `John`, age: 31, isAdmin: true },
	{ name: `Jane`, age: 20, isAdmin: false },
];

users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

// // Задача 2:

function getUserAverageAge(users) {
	let sumAge = 0;
	for (let i = 0; i < users.length; i++) {
		sumAge += users[i].age;
	}
	return sumAge / users.length;
}
console.log(getUserAverageAge(users));

// Задача 3:

function getAllAdmins(users) {
	let admins = [];
	for (let i = 0; i < users.length; i++) {
		if (users[i].isAdmin === true) {
			admins.push(users[i]);
		}
	}
	return admins;
}

console.log(getAllAdmins(users));

// Задача 4:

function first(arr, n) {
	let result = [];
	if (n === undefined) {
		result.push(arr[0]);
		return result;
	}

	for (let i = 0; i < n; i++) {
		result.push(arr[i]);
	}
	return result;
}

console.log(first([10, 20, 30]));
console.log(first([10, 20, 30], 2));
console.log(first([10, 20, 30], 0));

// const students = [
// 	{ name: "Анна", grade: 5 },
// 	{ name: "Игорь", grade: 4 },
// 	{ name: "Мария", grade: 3 },
// 	{ name: "Сергей", grade: 5 },
// 	{ name: "Олег", grade: 4 },
// ];

// function getAverageGrade(students) {
// 	let sum = 0;

// 	for (let i = 0; i < students.length; i++) {
// 		sum += students[i].grade;
// 	}
// 	return sum / students.length;
// }
// console.log(getAverageGrade(students));

// const products = [
// 	{ name: "Книга", price: 850 },
// 	{ name: "Монитор", price: 28000 },
// 	{ name: "Ручка", price: 120 },
// 	{ name: "Наушники", price: 6500 },
// 	{ name: "Кресло", price: 15500 },
// ];

// function getMaxPrice(products) {
// 	let maxPrice = products[0].price;

// 	for (let i = 1; i < products.length; i++) {
// 		if (products[i].price > maxPrice) {
// 			maxPrice = products[i].price;
// 		}
// 	}
// 	return maxPrice;
// }

// console.log(getMaxPrice(products));

// const products = [
// 	{ name: "Флешка", price: 900 },
// 	{ name: "Ноутбук", price: 72000 },
// 	{ name: "Блокнот", price: 180 },
// 	{ name: "Колонки", price: 5400 },
// 	{ name: "Кресло", price: 15500 },
// ];

// function getMinPrice(products) {
// 	let minPrice = products[0].price;
// 	for (let i = 1; i < products.length; i++) {
// 		if (products[i].price < minPrice) {
// 			minPrice = products[i].price;
// 		}
// 	}
// 	return minPrice;
// }
// console.log(getMinPrice(products));

// const users = [
// 	{ name: "Алексей", age: 17 },
// 	{ name: "Марина", age: 25 },
// 	{ name: "Иван", age: 34 },
// 	{ name: "Ольга", age: 16 },
// 	{ name: "Денис", age: 21 },
// ];

// function getAdultCount(users) {
// 	let count = 0;
// 	for (let i = 0; i < users.length; i++) {
// 		if (users[i].age >= 18) {
// 			count++;
// 		}
// 	}
// 	return count;
// }

// console.log(getAdultCount(users));

// const products = [
// 	{ name: "Ручка", price: 120, inStock: true },
// 	{ name: "Принтер", price: 18000, inStock: false },
// 	{ name: "Тетрадь", price: 90, inStock: true },
// 	{ name: "Монитор", price: 25000, inStock: false },
// 	{ name: "Клавиатура", price: 3200, inStock: true },
// ];

// function getAvailableProducts(products) {
// 	let stock = [];
// 	for (let i = 0; i < products.length; i++) {
// 		if (products[i].inStock === true) {
// 			stock.push(products[i]);
// 		}
// 	}
// 	return stock;
// }
// console.log(getAvailableProducts(products));

// function last(arr, n) {
// 	let result = [];
// 	if (n === undefined) {
// 		result.push(arr[arr.length - 1]);
// 		return result;
// 	}

// 	for (let i = arr.length - n; i < arr.length; i++) {
// 		result.push(arr[i]);
// 	}
// 	return result;
// }

// console.log(last([10, 20, 30]));
// console.log(last([10, 20, 30], 2));
// console.log(last([10, 20, 30], 0));
