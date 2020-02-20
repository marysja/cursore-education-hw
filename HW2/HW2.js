let numberN = +(prompt("Введіть перше число: "));
let numberM = +(prompt("Введіть друге число: "));



while (numberN == NaN || (numberN - Math.floor(numberN) != 0) || numberN == "") {
    alert ("Спробуйте ще раз");
  numberM = +(prompt("Введіть перше число: "));
} 
while (numberM == NaN || (numberM - Math.floor(numberM) != 0) || numberM == "") {
    alert ("Спробуйте ще раз");
  numberN = +(prompt("Введіть друге число: "));
} 

const SKIP_EVEN_NUMBERS = confirm("Пропустити парні числа?", false);
let sum = 0;

for (let i = numberN; i <= numberM; i++ ) {
  if (SKIP_EVEN_NUMBERS) {
    if (i % 2 !== 0) {
      sum += i;
    }
  } else {
    sum += i;
  }
 
}
for (let i = numberM; i <= numberN; i++) {
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
