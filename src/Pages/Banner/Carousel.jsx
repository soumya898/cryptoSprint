import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { TrendingCoins } from '../../config/Api';
import Cryptostate from '../../Context/Cryptostate';
// import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
   carousel: {
      height: '50%',
      display: 'flex',
      alignItems: 'center',
   },
   carouselItem: {
      // Define styles for carousel items if needed


      textDecoration: 'none',
      display: 'flex',
     flexDirection:'column'
     ,alignItems:'center',cursor:"pointer",
     color:'white',
     



   },
   coinName: {
      marginLeft: '10px',
      // color: "yellow",
      fontSize: '22px', fontWeight: 500
   }

}));

const Carousel = () => {
   const classes = useStyles();

   const { currency, symbol } = Cryptostate();
   const [trendingcoins, setTrendingCoins] = React.useState([]);

   const fetchTrandingCoins = async () => {
      try {
         const response = await fetch(TrendingCoins(currency));
         const data = await response.json();
         setTrendingCoins(data);
      } catch (error) {
         console.error('Error fetching trending coins:', error.message);
      }
   };

   useEffect(() => {
      fetchTrandingCoins();
   }, [currency]);
   console.log(trendingcoins)
   const responsive = {
      0: {
         items: 2,
      },
      512: {
         items: 4,
      },
   };



   const numberWithCommas = (no) => {
      return no.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   };




   // Map over trendingcoins only when it contains data
   // Map over trendingcoins only when it contains data

   const items = trendingcoins.map((coin, index) => {
      // Calculate profit
      const percentageChange = coin.price_change_percentage_24h;

      return (
         <Link to={`/coins/${coin.id}`} key={index} className={classes.carouselItem}>
            <img src={coin.image} alt={coin.name} style={{ marginBottom: 10, height: 80 }} />

            <span className={classes.coinName} style={{marginLeft:'20px'}}>
               {coin.symbol.toUpperCase()}
               {/* <br></br> <br></br> */}
               {/* {symbol}    {coin.current_price.toFixed(2)} */}

              



               <span className={classes.coinName} style={{color:percentageChange>0 ?'rgb(14,203,129':'red'}} >
               
                  {percentageChange >= 0 ? `+${Math.floor(percentageChange)}%` : `${Math.floor(percentageChange)}%`}
                    
               </span>
                  <br></br>
               {symbol} {numberWithCommas(coin.current_price.toFixed(2))}

            </span>
         </Link>
      );
   });


   return (
      <div className={classes.carousel}>
         <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableButtonsControls
            responsive={responsive}
            items={items}
            autoPlay
         />
      </div>
   );
};

export default Carousel;
