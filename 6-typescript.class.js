var Student = /** @class */ (function () {
    function Student(rollNo, name) {
        this.studentRollNo = rollNo;
        this.studentName = name;
    }
    return Student;
}());
var stud_object = new Student(100, 'Promod');
console.log(' Roll No : ' + stud_object.studentRollNo);
console.log(' Name  : ' + stud_object.studentName);
