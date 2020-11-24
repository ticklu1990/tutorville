import React from 'react';
import { Grid } from '@material-ui/core';

import TaskList from '../redux/TaskList';
import {Button,Alert,Badge} from 'react-bootstrap'
import { useHistory } from "react-router-dom";

function student() {

    let history = new useHistory();

    let logout = () => {
    history.push('/tutorville');
    }
    return (
        <div>
             <Alert variant="info">Student Dashboard
             <Button onClick={logout}className="ml-2" variant="danger">Logout</Button></Alert>
            
            
             <div style={{height:60}} />
             <Grid container style = {{ minheight: '100vh'}}>
        
       
     <Grid item xs={12} sm={6}>
     
       <h6><Badge pill variant="warning">New Tasks</Badge></h6> 
       <div style={{height:10}} />
     
       <div style={{height:10}} />
      <TaskList />
     
     </Grid>
      
     <Grid container item xs={12} sm={6} justify="center" style={{padding:40}}>
     
     <div />
        
     <div> 
      
      
     <Grid container justify="center">
      
       
     <img
        src="https://image.freepik.com/free-vector/confirmation-completed-notices-message-notifications-list-computer-screen_212005-398.jpg"
        width={600}
        alt="logo"
      />   
      
     </Grid>
     
    
     </div>
     
     
     </Grid>
      
     </Grid>
      
    </div>
        
    )
}

export default student
