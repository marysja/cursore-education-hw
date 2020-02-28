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
  return this.marks;
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
const student = new Student(`Высшей Школы Мошенничества г.Одесса`, 1, `Остап Родоманський Бендер`);
console.log(`1. student`, student);
console.log(`2. student.getInfo()`, student.getInfo());
console.log('3. student.getMarks()', student.getMarks());
console.log('4. student.setMark()', student.setMark());
console.log('4. student.getAverageMark()', student.getAverageMark());
console.log('4. student.dismiss()', student.dismiss());
console.log('4. student.recover()', student.recover());

class Student extends BudgetStudent {
constructor(fullName, university, course, marks) {
  super(fullName, university, course, marks)
  setInterval(()=> this.getScholarship(), 30000);
  getScholarship(){
  if(this.getAverageMark >= 4){
    return console.log('Вы получили 1400 грн. стипендии')
}else{
    return console.log('Вы не получили стипендии')
}
}
}
}
let student2 = new BudjetStudent('Волошина Марія', 2, 'ЛНУ');
 
console.log(student2.getUserInfo);
console.log(student2.getScholarship());
