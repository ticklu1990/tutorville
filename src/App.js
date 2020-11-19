import './App.css';
import { Grid , Button, FormControl }  from '@material-ui/core';

function App() {
  return (
    <div className="App">
     
     <Grid container style = {{ minheight: '100vh'}}>
       
    

     <Grid item xs={12} sm={6}>
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
     <h1>Dream up</h1> 
     <h6>Anytime, anywhere | Learn the skills and excel</h6>
     <FormControl>
      <Button color ="primary" variant="contained">Login as Student</Button>
      <div style={{height:20}} />
      <Button color ="secondary" variant="contained">Login as Teacher</Button>
    </FormControl>
     </div>

     </Grid>
     </Grid>
    </div>
  );
};

export default App;
