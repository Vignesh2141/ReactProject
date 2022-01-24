import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { delStudents } from "../actions/StudAction";
import { Navigate } from "react-router-dom";


function DeleteStudents(){

    let {id}=useParams();
    let dispatch=useDispatch();
    useEffect(()=>
   {
       dispatch(delStudents(parseInt(id)));
   },[] );
   return(
       <>
       <h2>Student deleted Successfully</h2>
   <Navigate to="/students/showall"></Navigate>
   </>
   );
}

export default DeleteStudents