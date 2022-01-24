import Student from "./Student";




export class StudentOperations{
   stuArray=new Set();
       
     constructor(){
           this.stuArray.add(new Student(101,"hari","CSE","SE"));
           this.stuArray.add(new Student(102,"om","IT","SE"));
    }
    getAllStudents(){
        console.log(this.stuArray);
        return [...this.stuArray];
    }

    addStudent(stud){
       console.log("in add student");
       let newStud=new Student(parseInt(stud.studId),stud.studName,stud.studDepart,stud.studYear);
       console.log(typeof(newStud));
        this.stuArray.add(newStud);
      return  [...this.stuArray];
    }

    updateStudent(stu){
      let studId= parseInt(stu.studId);
      let newStu = new Student(parseInt(stu.studId),stu.studName,stu.studDepart,stu.studYear);
      let student=this.searchStudent(studId);
      console.log(student);
      this.stuArray.delete(student);
      this.stuArray.add(newStu);
      
      return [...this.stuArray];
  }

    searchStudent(stdId){
       return [...this.stuArray].find((student)=>student.studId===stdId);
    }



    deleteStudent(stdId){
         let student=this.searchStudent(stdId);
         console.log(student);
         this.stuArray.delete(student);
         console.log(this.stuArray);
         return [...this.stuArray];
    }
}