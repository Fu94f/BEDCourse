// COMBINING INTERFACES

interface Teacher {
    name: string;
    subject: string;
}

interface Employee {
    id:number;
    email:string;
}

type SchoolTeacher = Teacher & Employee;


const printTeacherInfo = (schoolTeacher: SchoolTeacher) =>{
    console.log(`Name: ${schoolTeacher.name}, Subject: ${schoolTeacher.subject}, ID: ${schoolTeacher.id}, Email: ${schoolTeacher.email} `)
}

printTeacherInfo({
    name :"Marina",
    subject: "English",
    id: 12345,
    email: "marina@school.se"
});