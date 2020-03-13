
const ukraine = { 
  tax: 0.195, 
  middleSalary: 1789, 
  vacancies: 11476 
};
const latvia = { 
  tax: 0.25, 
  middleSalary: 1586, 
  vacancies: 3921 
};
const litva = { 
  tax: 0.15, 
  middleSalary: 1509, 
  vacancies: 1114 };

//Создайте функцию, которая считает сколько налогов вы заплатите как IT-специалист в какой-либо стране. Функция должна вызываться через call и работать с данными через this
function getMyTaxes(salary){
 return salary * this.tax;
}
console.log(getMyTaxes.call(ukraine, 5000));
//Создайте функцию, которая считает сколько в среднем налогов платят IT-специалистсы в каждой стране. (tax * middleSalary). Функция должна вызываться через call и работать с данными через this
 function getMiddleTaxes(country) {
   return this.tax * this.middleSalary;
 }
console.log(getMiddleTaxes.call(latvia));
//Создайте функцию, которая считает сколько всего налогов платят IT-специалистсы в каждой стране. (tax * middleSalary * vacancies). Функция должна вызываться через call и работать с данными через this
function getTotalTaxes (country) {
  return this.tax * this.middleSalary * this.vacancies;
}
console.log(getTotalTaxes.call(litva));
//Создайте функцию, которая будет писать в консоль объект вида: { salary: number, taxes: number, profit: number } каждые 10 секунд. Значения salary – генерируйте случайным образом в диапазоне 1500-2000. taxes – расчитывается в зависимости от выбранной страны и значения salary.
function getMySalary(country) {
  let obj ={};
  let someSalary = Math.round(Math.random(2000 - 1500 + 1) + 1500);
  obj.salary = someSalary;
  obj.taxes = Math.floor(country.tax * someSalary);
  obj.profit = obj.salary - obj.taxes;
  return obj;
 }
setInterval(() => console.log(getMySalary(ukraine)), 10000);

