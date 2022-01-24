import {StudentOperations} from "../StudentData/StudentOperations";
let studImpl=new StudentOperations();
export const StudReducer=(state=[...studImpl.stuArray],action)=>{
        switch(action.type){
               
                case 'DELETESTUDENTS': {
                        state= studImpl.deleteStudent(action.payload);                
                        return state;
                }
                case "ADDSTUDENTS":{
                    state=studImpl.addStudent(action.payload);
                    return state;
                }
                case "UPDATESTUDENTS":{
                        state=studImpl.updateStudent(action.payload);
                        return state;
                }
                case "SearchStudent":{
                        state=studImpl.searchStudent(action.payload);
                        return state;
                }
                default: return state;
        }
}