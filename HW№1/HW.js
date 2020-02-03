let costSocks = 15.678;
let costPapaya = 123.965;
let costShirt = 90.2345;

console.log(Math.max(costSocks, costPapaya, costShirt));

console.log(Math.min(costSocks, costPapaya, costShirt));

sumOfThings = costSocks + costPapaya + costShirt;

console.log(sumOfThings);

console.log(Math.floor(sumOfThings));

function MyRound100(sumOfThings) {
  return Math.floor(sumOfThings / 100) * 100;
}

console.log(MyRound100(sumOfThings));

roundSum = Math.floor(sumOfThings);

if (roundSum % 2 == 0) {
    console.log( true );
  } else {
    console.log( false );
  }


change = 500 - sumOfThings;
console.log(change);

let sum = [costSocks, costPapaya, costShirt].reduce((a, b) => a + b, 0);
let result = sum / [costSocks, costPapaya, costShirt].length;
console.log(result.toFixed(2));



let someDiscount = Math.floor(Math.random() * 10 + 1);
sumToPay = sumOfThings - (sumOfThings * someDiscount) / 100;
num = sumToPay.toFixed(0)/2;
lostProfit = num - (sumOfThings - sumToPay.toFixed(0));
console.log(lostProfit.toFixed(0));

console.log  (`Максимальна ціна: ${Math.max(costSocks, costPapaya, costShirt)}`);
console.log  (`Мінімальна ціна: ${Math.min(costSocks, costPapaya, costShirt)}`);
console.log  (`Вартість всіх товарів: ${sumOfThings = costSocks + costPapaya + costShirt}`);
console.log  (`Вартість всіх товарів: ${Math.floor(sumOfThings)}`);
console.log  (`Вартість всіх товарів: ${MyRound100(sumOfThings)}`);
console.log  (`Я не знаю як це зробити: ${000}`);
console.log  (`Решта: ${change = 500 - sumOfThings}`);
console.log (`Середня вартість: ${result.toFixed(2)}`);
console.log (`Втрачена вигода: ${lostProfit.toFixed(0)}`);

