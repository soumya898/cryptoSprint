import { makeStyles } from '@material-ui/core'
import React, { useEffect ,useState} from 'react'
import { TrendingCoins } from '../../config/Api';
import Cryptostate from '../../Context/Cryptostate';
import axios from 'axios';

const useStyles=makeStyles(()=>({
carousel:{
          height:"50%",
          display:'flex',
         
         alignItems:'center'
}

}));

const Carousel = () => {
    const classes=useStyles()

      
const {currency}=Cryptostate()
 const [trendingcoins,setTrendingCoins]=React.useState([])

    const fetchTrandingCoins= async ()=>{
             const data=  await axios.get((TrendingCoins(currency)))
              setTrendingCoins(data)
        
    }
    console.log(trendingcoins)

 // when component 1st time render we call that function 
 useEffect(()=>{

    fetchTrandingCoins()
 },[currency])


  return (
    <div className={classes.carousel}>Carousel</div>
  )
}

export default Carousel