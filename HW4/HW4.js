//Разбейте студентов на пары(парень + девушка) для работы над проектом. У вас должен получиться вложенный массив с парами студентов
const STUDENTS = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const THEMES = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const MARKS = [4, 5, 5, 3, 4, 5];

function studentsPairs (STUDENTS) {
  let studentsGirls = ["Лена", "Ира", "Светлана"];
  let studentsBoys = ["Саша", "Игорь", "Алексей"];
  let divideByPairs = [];
  for (let i = 0; i < 3; i++) {
    divideByPairs[i] = [studentsBoys[i], studentsGirls[i]];
  }
  return divideByPairs;
}
divideByPairs = studentsPairs (STUDENTS);
console.log(divideByPairs);

//Сопоставьте пары из предыдущего задания и темы проектов, над которым студенты будут работать. Должен получиться вложенный массив

function pairsThems (studentsPairs, THEMES) {
  let pairsProjectThemes = [];
  for (let i = 0; i< 3; i++) {
    pairsProjectThemes[i] = [divideByPairs[i].join(" и "), THEMES[i]]
  }
  return pairsProjectThemes;
}
pairsProjectThemes = pairsThems (studentsPairs, THEMES);
console.log(pairsProjectThemes);

//Сопоставьте оценки(marks) со студентом(students):
function studentsMarks (STUDENTS, MARKS) {
  let getMark = [];
  for (let i = 0; i < STUDENTS.length; i++) {
    getMark[i] = [STUDENTS[i], MARKS[i]];
  }
  return getMark;
}
getMark = studentsMarks (STUDENTS, MARKS);
console.log(getMark);

//Поставьте каждой паре случайную оценку(от 1 до 5) за проект
function marksForProject (pairsProjectThemes){
  let pairsProjectMarks = [];
  for (let i = 0; i < divideByPairs.length; i++) {
    pairsProjectMarks[i] = pairsProjectThemes[i].concat(Math.floor(Math.random() * 5) + 1);
  }
  return pairsProjectMarks;
}
pairsProjectMarks = marksForProject (pairsProjectThemes);
console.log(pairsProjectMarks);
