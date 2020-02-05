let numberN = parseInt(prompt("Введіть число: "), 10);
while (isNaN(numberN)) {
  numberN = Math.round(parseInt(prompt("Введіть число: "), 10));
}
let numberM = parseInt(prompt("Введіть число: "), 10);
while (isNaN(numberM)) {
  numberM = Math.round(parseInt(prompt("Введіть число: "), 10));
}
const skipEvenNumbers = confirm("Пропустити парні числа?", false);
let sum = 0;

for (let i = numberN; i <= numberM; i++) {
  if (skipEvenNumbers) {
    if (i % 2 !== 0) {
      sum += i;
    }
  } else {
    sum += i;
  }
}

console.log(sum);