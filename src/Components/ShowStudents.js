
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { StudentOperations } from "../StudentData/StudentOperations";
import "./showStudents.css";
import { Button } from "@material-ui/core";
function TableBody(){
    let studAr=useSelector((store)=>store.StudReducer)

    return(
        <>
            {
                studAr.map((student)=>{
                    return(
                        <tr key={student.studId}>
                            <td>{student.studId}</td>
                            <td>{student.studName}</td>
                            <td>{student.studDepart}</td>
                            <td>{student.studYear}</td>
                            <td><Button color="secondary" variant="contained"> <NavLink style={{'color':'white'}} to={`/students/delete/${student.studId}`}> delete</NavLink></Button>
                            <Button color="primary" variant="contained"><NavLink style={{'color':'white'}} to={`/students/update/${student.studId}`}>update</NavLink> </Button></td>
                            
                        </tr>
                    );
                })
            }
        </>
    )
}

function ShowStudents(){
    let [stuId,setStuId]=useState();
    let setId=(e)=>{
        setStuId(e.target.value);
    }
    return(
        
        <div className="newdiv">
        <h2>Student Details </h2>
            <table className="table table-striped table-dark"> 
               <tr>
                   <th>Student Id</th>
                   <th>Student Name</th>
                   <th>Student Department</th>
                   <th>Student Year</th>
                   <th>Action</th>
               </tr>
                <tbody>
                    <TableBody></TableBody>
                </tbody>
            </table>
            <hr/>
            <div>
                <label>Enter id:</label>
                <input type="text" onChange={setId}></input>
            </div>
           <Button variant="contained" color="secondary"> <NavLink style={{'color':"white"}} to={`/students/search/${stuId}`}>search</NavLink></Button>
            
        </div>
        
    )
}

export default ShowStudents;