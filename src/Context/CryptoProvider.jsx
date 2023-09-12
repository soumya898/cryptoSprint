import React,{useState,useEffect} from 'react'

import cryptoContext from "./ContextApi"




const CryptoProvider = (props) => {

const[currency,setCurrency]=useState('USD');
const[symbol,setSymbol]=useState('$')
useEffect(()=>{

    if(currency=='USD') setSymbol('$')
    else if(currency==='INR') setSymbol('₹')
},[currency])





    return (

        <cryptoContext.Provider value={{currency,symbol,setCurrency}}>

            {props.children}
        </cryptoContext.Provider>

    )
}

export default CryptoProvider