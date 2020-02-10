//Создать функцию getMaxDigit(number) – которая получает любое число и выводит самую большую цифру в этом числе.
function getMaxDigit(number)
{
  number = number.toString();  
  let max = 0;
    let a = number.length;
    for (let i = 0; i < number.length; i++)
    {
        if (number[i] > max)
        {
            max = number[i];
        }
    }
   return max;
}

//Создать функцию, которая вычисляет степень числа. 
function myPow(a, n) {
    let b = a;
    for (let i = 1; i < n; i++) {
        b *= a;
    }

   return b;
}

//Создать функцию, которая форматирует имя, делая первую букву заглавной.
function firstUpperCase(text)
{
    return text[0].toUpperCase()+text.substr(1).toLowerCase();
}


//Создать функцию, которая вычисляет сумму оставшуюся после оплаты налога от заработной платы.
function salaryTax(money){
  const TALLAGE = 19.5;  
  return money -(money / 100 * TALLAGE);
}

//Создать функцию, которая возвращает случайное целое число в диапазоне от N до M
function randomNumber(min, max) {
    let rand = min - 1 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

//Создать функцию, которая считает сколько раз определенная буква повторяется в слове
function countLetter( symbol, str) {
    let count = 0;
    symbol = symbol.toLowerCase();
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === symbol) {
            count++;
        }
    }
    return count;
}

//Создайте функцию, которая удаляет все буквы из предложения
function deleteLetters(char,str) {
    let newStr = '';
    char = char.toLowerCase();
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(str [i] !=char){
            newStr += str[i];
        }
    }
    return newStr;
}
//Создайте функцию, которая проверяет является ли слово палиндромом. 
function checkPalindrom (str) {
  str = str.replace(/[.,?:;\/() _-]/g, '').toLowerCase();
  return str == str.split('').reverse().join('');
}


//Создайте функцию, которая удалит из предложения буквы, которые встречаются более 1 раза
function deleteLetter(str) {
    let newStr = " ";
   str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
        newStr += str[i];
      }
    }
    return newStr;
}
document.writeln(`
Найбільша цифра з числа: ${getMaxDigit(987)}<br>
Ступінь числа: ${myPow(9, 7)}<br>
Форматування імені: ${firstUpperCase("мАрУсЯ")}<br>
Залишок після сплати податку: ${salaryTax(10000)}<br>
Випадкове ціле число: ${randomNumber(1, 20)}<br>
Кількість певних символів в слові: ${countLetter("а", "Абракадабра")}<br>
Видалені букви зі слова: ${deleteLetters('a', "blablabla")}<br>
Паліндром: ${checkPalindrom('І що сало? Ласощі')}<br>
Видалені букви з речення: ${deleteLetter("The cookie was very tasty")}<br>
`);
