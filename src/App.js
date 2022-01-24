
import { Route, Routes } from 'react-router-dom';
import ShowStudents from './Components/ShowStudents';
import './App.css';
import { Nav } from './NavComponent/Nav';
import DeleteStudents from './Components/DeleteStudents';
import AddStudents from './Components/AddStudents';
import Footer from './FooterComponent/Footer';
import UpdateStudent from './Components/UpdateStudent';
import { Search } from './Components/Search';
import Home from './Components/Home';
/* import {StudentOperations} from "./StudentData/StudentOperations" */

/* let studImpl= new StudentOperations(); */
function App() {

  /* let deleteStud=()=>{
    studImpl.deleteStudent(101);
  }

  let showStud=()=>{
    studImpl.getAllStudents();
    
  } */
  return (

    <>

    <div className="App">
    <Nav></Nav>
    
    <Routes>
      <Route path="/"  element={<Home></Home>}></Route>
      <Route path="/students/showall" element={<ShowStudents></ShowStudents>}></Route>
      <Route path="/students/delete/:id" element={<DeleteStudents></DeleteStudents>}></Route>
      <Route path="/students/addstudent" element={<AddStudents></AddStudents>}></Route>
      <Route path="/students/update/:id" element={<UpdateStudent></UpdateStudent>}></Route>
      <Route path="/students/search/:id" element={<Search></Search>}></Route>
    </Routes>
    
      {/* <button onClick={deleteStud}>delete</button>
      <button onClick={showStud}>getAllStudents</button> */}
      <footer>
      <Footer></Footer>
    </footer>
    </div>
    
    </>
  );
}

export default App;
