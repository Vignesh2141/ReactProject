import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { addStudent } from "../actions/StudAction";
import Student from "../StudentData/Student";

import "./AddStudent.css"


function AddStudents(){
    let [flag,setFlag]=useState(false);
    let dispatch=useDispatch();
    const [student,setStudent]=useState(new Student());
    
    const setDetails=(e)=>{
       setStudent({...student,[e.target.name]:e.target.value}) 
    }

    const test=(e)=>{
        e.preventDefault();
        console.log(student);
        
    
        dispatch(addStudent(student));
        setFlag(true);
       
       

    }
    
    

    

    return(
        <>
        
        <h4 className="h">Add Students</h4>
        
    <div>
       
       {
           flag? <Navigate to="/students/showall"></Navigate>:
       
        <form onSubmit={test} >
        <div className="div">
            <label>Enter Id:</label><br></br>
           
            <input type="number" name="studId" value={student.studId} onChange={setDetails}></input>
            </div>
            <div className="div">
            <label>Enter name:</label><br></br>
            <input type="text" name="studName" value={student.studName} onChange={setDetails}></input>
            </div>
            <div className="div">
            <label>Enter Department:</label><br></br>
            <input type="text" name="studDepart" value={student.studDepart} onChange={setDetails}></input>
            </div>
            <div className="div">
            <label>Enter Year:</label><br></br>
            <input type="text" name="studYear" value={student.studYear} onChange={setDetails}></input>
            </div>
           
           
            <div className="div">
                <input className="butn" type="submit" value="submit"></input>
                <input className="butn" type="reset" value="reset"></input>
            </div>
        </form>
       }
    </div>  
    
    </>
    );
}

export default AddStudents;
