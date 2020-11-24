import './App.css';

import student from './Student/student';
import teacher from './Teacher/teacher';
import {Route} from 'react-router-dom'
import homepage from './homepage';


function App() {
  return (
    <div className="App">
     
     <Route exact path='/tutorville' component={homepage}></Route> 
     <Route exact path='/student/dashboard-student' component={student}></Route>
     <Route exact path='/teacher/dashboard-teacher' component={teacher}></Route> 
     
     
    </div>
  );
};

export default App;
