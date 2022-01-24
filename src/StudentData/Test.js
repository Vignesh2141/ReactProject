import { StudentOperations } from "./StudentOperations";
let studImpl= new StudentOperations();
let array=studImpl.getAllStudents();
console.log(array);
array=studImpl.deleteStudent(101);
console.log(array);