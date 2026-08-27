// Задача 1:

// function calculateFinalPrice(basePrice, discountPercent, taxRate) {
// 	const priceAfterDiscount = basePrice * (1 - discountPercent / 100);
// 	const finalPrice = priceAfterDiscount * (1 + taxRate);
// 	return finalPrice;
// }
// console.log(calculateFinalPrice(100, 10, 0.2));

// Задача 2:

// function checkAccess(userName, passWord) {
// 	if (userName === "admin" && passWord === "123456") {
// 		return `Доступ разрешён`;
// 	} else {
// 		return `Доступ запрещён`;
// 	}
// }

// console.log(checkAccess("admin", "123456"));

// Задача 3:

// function getTimeOfDya(hour) {
// 	if (hour >= 0 && hour <= 5) {
// 		return `Ночь`;
// 	} else if (hour >= 6 && hour <= 11) {
// 		return `Утро`;
// 	} else if (hour >= 12 && hour <= 17) {
// 		return `День`;
// 	} else if (hour >= 18 && hour <= 23) {
// 		return `Вечер`;
// 	} else {
// 		return `Некорректное время`;
// 	}
// }
// console.log(getTimeOfDya(15));

// Задача 4:

function findFirstEven(start, end) {
	for (let i = start; i <= end; i++) {
		if (i % 2 === 0) {
			return i;
		}
	}
	return `Чётных чисел нет`;
}

console.log(findFirstEven(1, 3));
