class Student {
    studentRollNo : number;
    studentName :string;

    constructor(rollno){
        this.studentRollNo = rollno;
    }

    constructor(rollNo , name){
        this.studentRollNo = rollNo;
        this.studentName = name;

    }

}


let stud_object = new Student(100,'Promod');

console.log(' Roll No : '+ stud_object.studentRollNo );

console.log(' Name  : '+ stud_object.studentName);

