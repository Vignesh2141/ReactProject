export const delStudents=(stdId)=>{
    return{
        type:'DELETESTUDENTS',
        payload:stdId
    }
}

export const addStudent=(student)=>{
    return{
        type:"ADDSTUDENTS",
        payload:student
    }
}

export const updateStud=(student)=>{
    return{
        type:"UPDATESTUDENTS",
        payload:student
        
    }
}

export const search=(stdId)=>{
    return{
        type:"SearchStudent",
        payload:stdId
    }
}