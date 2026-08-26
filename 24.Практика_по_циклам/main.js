// Задача 1:

// for (let i = 1; i <= 20; i++) {
// 	if (i % 4 === 0) {
// 		continue;
// 	}
// 	console.log(i);
// }

// // Задача 2:

// const number = +prompt("Выберите число");
// let factorial = 1;

// for (let i = 1; i <= number; i++) {
// 	factorial = factorial * i;
// }
// console.log(factorial);

// Задача 3:

let line = "";

for (let i = 1; i <= 8; i++) {
	let row = "";
	for (let j = 1; j <= 8; j++) {
		row += (i + j) % 2 === 0 ? "# " : "  ";
	}
	line += row + "\n";
}
console.log(line);
