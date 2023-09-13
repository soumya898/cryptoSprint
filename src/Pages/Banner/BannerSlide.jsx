import { Container, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import Banner from "../Banner/banner2.jpg"
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
    bannerSlide: {
        backgroundImage: `url(${Banner})`,
        // Add other styles as needed
    },
    bannerContent:{

        height:400,
        display:'flex',
        flexDirection:'column',
        paddingTop:20,
        justifyContent:'space-around'
    },
    titleLine:{
        display:'flex',
        height:"40%",
        flexDirection:'column',
        justifyContent:'center',
        textAlign:'center'
        

    }
}));



const BannerSlide = () => {
    const classes = useStyles(); // Invoke the useStyles function to get classes



    return <div className={classes.bannerSlide}>  
          <Container className={classes.bannerContent}>
             <div className={classes.titleLine}>

                   <Typography  variant='h2' style={{ fontWeight:'bold', marginBottom:15,fontFamily:"Montserrat", textAlign:"center"}}>
                     Cryptó Sprint
                     <Typography style={{color:'darkgray',fontFamily:'montserrat'}}>
                     Provide comprehensive information about your cryptography
                     </Typography>
                    </Typography>  

             </div>
             <Carousel/>

          </Container>

    </div>;
};

export default BannerSlide;
