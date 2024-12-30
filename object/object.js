let student={
    name:"Siddhartha",
    age:25,
    city:"Bhopal"
}
console.log(student); 
console.log(student.age); 

// Spread operator

const student1=
{
    name:"John", 
    age:25, 
}
const student2=
{
    city:"New York",
    Grade:'A'
}
const combinedstudent={...student1, ...student2}
console.log(combinedstudent);

