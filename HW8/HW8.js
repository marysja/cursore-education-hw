class Student {
  constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }
  getInfo() {
  return `Студент: ` + this.fullName + ` ` + this.university + ` `+ this.course;
}
 getMarks() {
        return this.marks = [5, 4, 4, 5];
    }
 setMarks(val) {
        this.marks.push(val);
        return this.marks;
    }
getAverageMark(){
return (this.marks.reduce((a, b) => (a + b), 0) / this.marks.length);
}
dismiss() {
        return this.marks = null;
    }
    recover() {
        return this.getMarks();
    }
}
let student = new Student(`Остап Родоманський Бендер`, `Высшей Школы Мошенничества г.Одесса`, 1, [5, 4, 3, 2]);
console.log(`1. student`, student);
console.log(`2. student.getInfo()`, student.getInfo());
console.log('3. student.getMarks()', student.getMarks());
console.log('4. student.setMark()', student.setMarks());
console.log('4. student.getAverageMark()', student.getAverageMark());
console.log('4. student.dismiss()', student.dismiss());
console.log('4. student.recover()', student.recover());

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
            }
        getScholarship() {
        this.getMarks();
        if(this.marks === null || this.getAverageMark() < 4) {
            return 'У Вас нет степендии'
        } else {
            return 'Вы получили 1400 грн. стипендии'
        };
    }
}
setInterval(()=> this.getScholarship(), 30000);
let newStudent = new BudgetStudent('Волошина Марія', 2, 'ЛНУ');

console.log(newStudent);
console.log(newStudent.getScholarship());
