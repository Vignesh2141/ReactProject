import { useEffect, useState } from "react";
import Student from "../StudentData/Student";
import { updateStud } from "../actions/StudAction";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './AddStudent.css';
import { Button } from "@material-ui/core";
import { StudentOperations } from "../StudentData/StudentOperations";
export default function UpdateStudent(){
    let [flag, setFlag]=useState(false);
    let {id}=useParams();
    /* useEffect(()=>{
        arr
    },{}); */

let arr = useSelector((state)=>state.StudReducer);
console.log(arr);
let s= arr.find((ele)=>ele.studId==id);
console.log(typeof(s));
console.log(s);
const [student,setStudent] = useState(new Student(parseInt(s.studId),s.studName,s.studDepart,s.studYear));
const setDetails = (e) =>{
    setStudent({...student,[e.target.name]:e.target.value});
}
    let dispatch=useDispatch();
    const test=(e)=>{
        e.preventDefault();
        console.log(student);
        dispatch(updateStud(student));
        setFlag(true);
    }
    return(
        <div className="formDiv">
            {flag===false?
            <form onSubmit={test}>
                <div>
                <label>Enter ID : <br/>
                <input type="number" name="studId" value={student.studId} onChange={setDetails} disabled></input>
                </label></div>
                <div><label>Enter Name : <br/>
                <input type="text" name="studName" value={student.studName} onChange={setDetails}></input>
                </label></div>
                <div><label>Enter Department : <br/>
                <input type="text" name="studDepart" value={student.studDepart} onChange={setDetails}></input>
                </label></div>
                <div><label>Enter Year : <br/>
                <input type="text" name="studYear" value={student.studYear} onChange={setDetails}></input>
                </label></div><br/>
                <button style={{'margin':'10px'}} class="btn btn-success" type="submit">Update Student</button>
                <button class="btn btn-primary" type="reset">Clear</button>
            </form>:<Navigate to="/students/showall"></Navigate>}
        </div>
    );
}