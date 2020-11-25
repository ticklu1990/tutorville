import React from 'react'
import { Grid } from '@material-ui/core';
import TaskComponent from '../redux/TaskComponent';
import TaskList from '../redux/TaskList';
import { Button , Alert , Badge , Tabs , Tab } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import SearchPage  from '../SearchPage';

function teacher() {

    let history = new useHistory();

    let logout = () => {
    history.push('/tutorville');
    }
    return (
        <div>
             
             <Alert variant="info">
             
             Teacher Dashboard
             
             <Button onClick={logout}className="ml-2" variant="danger">Logout</Button></Alert>
             <SearchPage /> 
            
             <div style={{height:60}} />
             <Grid container style = {{ minheight: '100vh'}}>
        
       
     <Grid item xs={12} sm={6}>
     
       <h6>Add<Badge pill variant="warning">New Tasks</Badge> for Students</h6> 
       <div style={{height:10}} />
      <TaskComponent />
       <div style={{height:10}} />
      <TaskList />
     
     </Grid>
      
     <Grid container item xs={12} sm={6} justify="center" style={{padding:40}}>
     
     <div />
        
     <div> 
      
      
     <Grid container justify="center">
         

   <Tabs defaultActiveKey="new" id="uncontrolled-tab-example">
  <Tab eventKey="new" title="New">

  </Tab>
  <Tab eventKey="inprogress" title="Inprogress">
  
  </Tab>
  <Tab eventKey="rejected" title="Rejected">
    
  </Tab>

  <Tab eventKey="deleted" title="Deleted">
    
  </Tab>


</Tabs>


       
     {/* <img
        src="https://image.freepik.com/free-vector/checklist-businessman-person-holding-pencil-task-list-clipboard-complete-questionnaire-exam-inspection-concept_53562-10717.jpg"
        width={400}
        alt="logo"
      />    */}
      
     </Grid>
     
    
     </div>
     
     
     </Grid>
      
     </Grid>
      
    </div>
        
    )
}

export default teacher
