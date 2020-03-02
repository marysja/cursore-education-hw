const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
  //Создайте функцию, которая выводит список предметов для конкретного студента. Обратите внимание – название предмета необходимо выводить с большой буквы, а _ – заменить на пробел
  function getSubjects(students){
    return Object.keys(students.subjects).map(val => val[0].toUpperCase().concat(val.replace("_", " ").slice(1)))
 }
 console.log(getSubjects(students[1]));
 //Создайте функцию, которая выведет среднюю оценку по всем предметам для переданного студента НЕ МАССИВА СТУДЕНТОВ. Оценку округлите до 2ого знака. Можно использовать функции написанные в предыдущих домашних заданиях :)
 function getAverageMark(student) {
  let studentsMarks = Object.values(student.subjects).flat();
  return (studentsMarks.reduce((a,b) => (a + b), 0)/studentsMarks.length).toFixed(2);
}
console.log(getAverageMark(students[1]));
//Создайте функцию, которая выводит информацию общего вида по переданному студенту (вам пригодится функция из предыдущего задания). Должна быть выведена информация: курс, имя, средняя оценка.
function getStudentInfo(students) {
  return aboutStudent = [`"name": ${students.name}`, `"course": ${students.course}`,  `"averageMark": ${getAverageMark(students)}`].join(", ");
     }
console.log(getStudentInfo(students[0]));
//Создайте функцию, которая выводит имена студентов в алфавитном порядке.
function getStudentsNames(students){
  return students.map(val => val.name).sort();
}
console.log(getStudentsNames(students));
//Создайте функцию, которая выводит лучшего студента из списка по показателю средней оценки.
function getBestStudent(students) {
  let bestAvarageMark = 0;
  bestStudent = " ";
    for (let i = 0; i < students.length; i++) { 
      if (bestAvarageMark < getAverageMark(students[i])) {
        bestAvarageMark = getAverageMark(students[i]);
        bestStudent = students[i].name;
      }
    }
    return bestStudent;
  }
console.log(getBestStudent(students));
  //Создайте функцию, которая считает какое количество раз буква повторяется в слове.
  function calculateWordLetters(str){
    sums = {};
    str.split('').map(function(e){
    sums[e] = !sums[e] ? 1 : sums[e] + 1;
    });
      return sums;
    }
    console.log(calculateWordLetters("word"));
