
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


function myPow(a, n) {
    let b = a;
    for (let i = 1; i < n; i++) {
        b *= a;
    }

   return b;
}


function firstUpperCase(text)
{
    return text[0].toUpperCase()+text.substr(1).toLowerCase();
}



function salaryTax(money){
  const TALLAGE = 19.5;  
  return money -(money / 100 * TALLAGE);
}


function randomNumber(min, max) {
    let rand = min - 1 + Math.random() * (max - min + 1);
  return Math.round(rand);
}


str []i + 1
let count = 1;
function countLetter( char, someWord ) {
    for ( let i = 0; i < someWord.length; i++) {
        someWord.charAt( i ) == char ? count++ : false;
    }
    console.log( count ); 
    }
countLetter("а", "Абракадабра");


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


function deleteLetter(str) {
    let newStr = '';
    str.toLowerCase();
    for(let i = 0; i<str.length;i++){
        let k = 0;
        for (let j = 0; j < str.length; j++){
            if(str [i] === str [j]){
                k += 1;
            }
        }
        if ( k<2 ){
            newStr += str [i];
        }

    }
    return newStr;

}
document.writeln(`Найбільша цифра з числа: ${getMaxDigit(987)}`);
document.writeln(`Ступінь числа: ${myPow(9, 7)}`);
document.writeln(`Форматування імені: ${firstUpperCase("мАрУсЯ")}`);
document.writeln(`Залишок після сплати податку: ${salaryTax(10000)}`);
document.writeln(`Випадкове ціле число: ${randomNumber(1, 20)}`);
document.writeln(`Видалені букви зі слова: ${deleteLetters('a', "blablabla")}`);
document.writeln(`Видалені букви з речення: ${deleteLetter("The cookie was very tasty")}`);
