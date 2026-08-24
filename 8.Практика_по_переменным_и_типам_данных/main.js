let firstName = "Denis";
let lastName = "Grigorev";
let isStudent = true;

let age = 29;
let currentYear = 2026;
const birthYear = currentYear - age;

console.log(
	`Меня зову`,
	firstName,
	lastName,
	`, мне`,
	age,
	`лет. Я ученик курса:`,
	isStudent,
);

let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;
console.log(result);

//123456789falsetrue
