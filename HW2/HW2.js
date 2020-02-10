let numberN = +(prompt("Введіть число: "));
let numberM = +(prompt("Введіть число: "));
if (parseFloat(numberN) - parseInt(numberN) !== 0 || parseFloat(numberM) - parseInt(numberM) !== 0) {
    alert("Спробуйте ще раз");
}
while (isNaN(numberN)) {
 numberN = parseInt(prompt("Введіть число: "),10);
}

while (isNaN(numberM)) {
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
