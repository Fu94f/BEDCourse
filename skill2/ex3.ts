// COMIBINED TRANSFORMATION

let scores:number[] = [3, 75, 67, 82, 91, 12, 55, 34];
const grades : string[] = scores
.filter((s)=> s >= 50)
.map((s) =>{
    switch (true){
        case s >= 90:
            return "A";
        case s >= 80:
            return "B";
        case s >= 70:
            return "C";
        case s >= 60:
            return "D";
        case s >= 50:
            return "E";    
        default:
            return "F";
    }
});

const passedStudents: number = scores.filter((s)=> s >= 50).length;
const failedStudents: number = scores.filter((s)=> s < 50).length;

console.log(grades);
console.log(`Amount of studends passed: ${passedStudents}`);
console.log(`Amount of studends failed: ${failedStudents}`);