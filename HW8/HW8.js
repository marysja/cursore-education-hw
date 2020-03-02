class Student {
  constructor(fullName, university, course, marks) {
  this.fullName = fullName;
  this.university = university;
  this.course = course;
  this.marks = marks;
    }
  

getInfo() {
  return `Студент:` + this.fullName + ` ` + this.university + ` `+ this.course;
}
getMarks() {
  return this.marks
}
setMark(mark){
this.marks.push(mark);
}
getAverageMark(){
return (this.marks.reduce((a, b) => (a + b), 0) / this.marks.length);
}
dismiss(){
this.marks = null;
return "Виключено";
}
recover(){
this.marks = [5, 4, 4, 5];
return "Поновлено";
}
}
const student = new Student(`Остап Родоманський Бендер`, `Высшей Школы Мошенничества г.Одесса`, 1, [5, 4, 3, 2]);
console.log(`1. student`, student);
console.log(`2. student.getInfo()`, student.getInfo());
console.log('3. student.getMarks()', student.getMarks());
console.log('4. student.setMark()', student.setMark());
console.log('4. student.getAverageMark()', student.getAverageMark());
console.log('4. student.dismiss()', student.dismiss());
console.log('4. student.recover()', student.recover());

/*class BudgetStudent extends Student {
constructor(fullName, university, course, marks) {
super(fullName, university, course, marks)
getScholarship() {
  if (this.marks === null || this.getAverageMark() < 4) {
    return "Вы не получили 1400 грн. стипендии";
  } else if (this.getAverageMark() > 4){
    return "Вы получили 1400 грн. стипендии";
  }
}
}
setInterval(()=> this.getScholarship(), 30000);
let BudgetStudent = new BudgetStudent('Волошина Марія', 2, 'ЛНУ');

console.log(BudgetStudent.getUserInfo);
console.log(BudgetStudent.getScholarship());
