let numberN = +(prompt("Введіть число: "));
let numberM = +(prompt("Введіть число: "));
if (parseFloat(numberN) - parseInt(numberN) !== 0 || parseFloat(numberM) - parseInt(numberM) !== 0) {
    alert("Спробуйте ще раз");
} 
const SKIP_EVEN_NUMBERS = confirm("Пропустити парні числа?", false);
let sum = 0;

for (let i = numberN; i <= numberM; i++) {
  if (SKIP_EVEN_NUMBERS) {
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
