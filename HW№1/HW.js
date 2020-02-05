const COST_SOCKS = 15.678;
const COST_PAPAYA = 123.965;
const COST_SHIRT = 90.2345;

console.log(Math.max(COST_SOCKS, COST_PAPAYA, COST_SHIRT));

console.log(Math.min(COST_SOCKS, COST_PAPAYA, COST_SHIRT));

sumOfThings = COST_SOCKS + COST_PAPAYA + COST_SHIRT;

console.log(sumOfThings);

console.log(Math.floor(COST_SOCKS) + Math.floor(COST_PAPAYA) + Math.floor(COST_SHIRT));

function MyRound100(sumOfThings) {
  return Math.ceil(sumOfThings / 100) * 100;
}

console.log(MyRound100(sumOfThings));

roundSum = Math.floor(sumOfThings);

console.log(Math.floor(sumOfThings)%2===0);


change = 500 - sumOfThings;
console.log(change);

let sum = [COST_SOCKS, COST_PAPAYA, COST_SHIRT].reduce((a, b) => a + b, 0);
let result = sum / [COST_SOCKS, COST_PAPAYA, COST_SHIRT].length;
console.log(result.toFixed(2));



let someDiscount = Math.floor(Math.random() * 10 + 1);
sumToPay = sumOfThings - (sumOfThings * someDiscount) / 100;
num = sumToPay.toFixed(0)/2;
lostProfit = num - (sumOfThings - sumToPay.toFixed(0));
console.log(lostProfit.toFixed(0));

console.log  (`Максимальна ціна: ${Math.max(COST_SOCKS, COST_PAPAYA, COST_SHIRT)}`);
console.log  (`Мінімальна ціна: ${Math.min(COST_SOCKS, COST_PAPAYA, COST_SHIRT)}`);
console.log  (`Вартість всіх товарів: ${sumOfThings = COST_SOCKS + COST_PAPAYA + COST_SHIRT}`);
console.log  (`Вартість всіх товарів: ${Math.floor(sumOfThings)}`);
console.log  (`Вартість всіх товарів: ${MyRound100(sumOfThings)}`);
console.log  (`Чи є ціла сума всіх вартостей парною: ${Math.floor(sumOfThings)%2===0}`);
console.log  (`Решта: ${change = 500 - sumOfThings}`);
console.log (`Середня вартість: ${result.toFixed(2)}`);
console.log (`Втрачена вигода: ${lostProfit.toFixed(0)}`);

