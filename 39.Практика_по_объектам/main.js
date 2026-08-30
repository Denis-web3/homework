// const CHARACTERISTICS = "CHARACTERISTICS";

// const product = {
// 	name: "Ноутбук",
// 	price: 60000,
// 	[CHARACTERISTICS]: {
// 		brand: "Apple",
// 		processor: "M1",
// 	},
// };

// const discount = {
// 	percent: 10,
// 	day: 25,
// };

// const product2 = { ...product, ...discount };
// product2.name = "Планшет";

// console.log(product);
// console.log(product2);

// const name = "Alex";

// const { name: productName, price } = product;
// console.log(productName, price);

// for (const productKey in product) {
// 	if (productKey === CHARACTERISTICS) {
// 		for (const charKey in product[productKey]) {
// 			console.log(`${charKey}:`, product[productKey][charKey]);
// 		}
// 	} else {
// 		console.log(`${productKey}:`, product[productKey]);
// 	}
// }

// Задача 1:

// const person = {
// 	name: "Denis",
// 	secondname: "Grigorev",
// 	age: 29,
// 	status: "Student",
// 	hobby: "Music",
// };
// console.log(person);

// // Задача 2:

// function isEmpty(person) {
// 	for (const personKey in person) {
// 		return false;
// 	}
// 	return true;
// }

// console.log(isEmpty(person));

// Задача 3:

// const task = {
// 	title: "Hello",
// 	description: "Planet Earth",
// 	isCompleted: false,
// };

// function cloneAndModify(object, modifications) {
// 	const result = { ...object, ...modifications };
// 	return result;
// }

// const modifiedTask = cloneAndModify(task, { isCompleted: true });

// for (key in modifiedTask) {
// 	console.log(key, modifiedTask[key]);
// }

// function callAllMethods(object) {
// 	for (const key in object) {
// 		if (typeof object[key] === "function") {
// 			object[key]();
// 		}
// 	}
// }

// const myObject = {
// 	method1() {
// 		console.log("Метод 1 вызван");
// 	},
// 	method2() {
// 		console.log("Метод 2 вызван");
// 	},
// 	property: "Это не метод",
// };
// callAllMethods(myObject);

// function countMethods(object) {
// 	let count = 0;
// 	for (const key in object) {
// 		if (typeof object[key] === "function") count++;
// 	}
// 	return count;
// }

// const obj = {
// 	a() {},
// 	b() {},
// 	c: 123,
// 	d: "text",
// };

// console.log(countMethods(obj));

function copyOnlyMethods(obj) {
	const result = {};
	for (const key in obj) {
		if (typeof obj[key] === "function") {
			result[key] = obj[key];
		}
	}
	return result;
}

const obj = {
	a() {},
	b() {},
	c: 123,
	d: "text",
};

const onlyMethods = copyOnlyMethods(obj);

console.log(onlyMethods);
