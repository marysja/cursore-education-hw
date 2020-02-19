//№1. Создайте функцию, которая возвращает массив случайных целых чисел.
function getRandomArray(length, min, max) {
 let arr = [];
for(let i = 0; i < length; i++) {
arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
    return arr;
}
console.log(getRandomArray(5, 3, 100));

// №3 Создайте функцию, которая считает среднее арифметическое всех переданных в неё аргументов.
function getAverage(...numbers) {
  const IGNOR_FRACTIONAL_NUMBER = numbers.filter(item => item === parseInt(item));
    return IGNOR_FRACTIONAL_NUMBER.reduce((a, b) => (a + b), 0) / IGNOR_FRACTIONAL_NUMBER.length;
}
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//№4 Создайте функцию, которая считает медиану всех переданных в неё аргументов.
function getMedian(...numbers) {
  const IGNOR_FRACTIONAL_NUMBER = numbers.filter(item => item === parseInt(item));
  let sortNumbers = numbers.sort((a, b) => a - b);
    let getMedian = [];
  if (numbers.length % 2 === 0) {
    getMedian = (numbers[numbers.length/2 - 1] + numbers[numbers.length/2]);
}  else { 
        getMedian = numbers([Math.floor(numbers.length/ 2)]/2);
} 
  return getMedian;
}

console.log(getMedian(6, 2, 55, 11, 78, 2, 77, 57, 87, 23, 2, 56, 3, 2));

// №5 Создайте функцию, которая фильтрует четные числа переданные как аргументы функции
function filterEvenNumbers(...numbers) {
     return numbers.filter(item => item === parseInt(item) && item % 2);
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

//№ 6 Создайте функцию, которая посчитает количество чисел больших 0
const countPositiveNumbers = (...numbers) => numbers.filter(item => item >= 0);
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

// № 7 Создайте функцию, которая отфильтрует все элементы в массиве и оставит только те, которые делятся нацело на 5
function getDividedByFive(...numbers) {
  return numbers.filter(item => item === parseInt(item) && item % 5 === 0);
  }
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 85, 57, 87, 23, 2, 56, 3, 2));
