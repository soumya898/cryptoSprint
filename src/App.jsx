import React from "react";
import { Route,  Routes } from "react-router-dom";
import Header from  "./Components/Header";
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/CoinPage"
import { makeStyles } from "@material-ui/core";

const App = () => {



   const useStyles=makeStyles(()=>({
      // we are write classes
      '@global': {
         '*': {
           boxSizing: 'border-box', 
           margin:'0px',
           padding:'0px'
         },
       },

       App:{
       
             backgroundColor:"#14161a",
             minHeight:"100vh",
             color:'white'
       }

   }));


   const classes=useStyles();







  return (
     <div className={classes.App}>
   


     


        <Header/>
        <Routes>

        <Route  exact path="/" element={<Homepage />} />
        <Route path="/coinpage" element={<Coinpage />} />
   

        </Routes>
      

     </div>


  );
};

export default App;
