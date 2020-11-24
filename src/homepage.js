import React from 'react';
import { useHistory } from "react-router-dom";
import { Grid , Button, FormControl }  from '@material-ui/core';

function homepage() {

   let history = new useHistory();

    let studentClicked = () => {
    history.push('/student/dashboard-student');
    }

    let teacherClicked = () => {
    history.push('/teacher/dashboard-teacher');
    }
        
    return (

        
        <div>
            <Grid container style = {{ minheight: '100vh'}}>
       
     <Grid item xs={12} sm={6}>
     <div style={{height:10}} />
       <img 
         src="https://image.freepik.com/free-vector/online-courses-concept_23-2148514212.jpg"
         style ={{width: "100%",height: "100%",objectFit: "cover" }}
         alt="brand"
       />
     </Grid>

     <Grid container item xs={12} sm={6} justify="center" style={{padding:40}}>
     
     <div />

     <div> 
      
      
     <Grid container justify="center">
      <img
        src="https://image.freepik.com/free-vector/letter-l-logo-vector_23987-173.jpg"
        width={300}
        alt="logo"
      />  
       
    
     </Grid>
     <h1>Tutorville</h1> 
     <h6>Online Mentorship | Learn the skills and excel</h6>
      <div style={{height:20}} />
     <FormControl>
      <Button onClick={studentClicked} color ="primary" variant="contained">Login Student</Button>
      <div style={{height:20}} />
      <Button onClick={teacherClicked} color ="secondary" variant="contained">Login Teacher</Button>
    </FormControl>
     </div>

     </Grid>
     </Grid>
        </div>
    )
}

export default homepage
