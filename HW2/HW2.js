let numberN = parseInt(prompt("Введіть число: "), 10);
while (Number.isInteger(numberN)) {
 numberN = parseInt(prompt("Введіть число: "), 10);
}

let numberM = parseInt(prompt("Введіть число: "), 10);
while (Number.isInteger(numberM)) {
 numberM = parseInt(prompt("Введіть число: "), 10);

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
document.write(`
Число N: ${numberN} </br>
Число M: ${numberM} </br>
Сума чисел: ${sum} </br>
`)
