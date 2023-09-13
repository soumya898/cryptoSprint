import React,{useState,useEffect} from 'react'

import cryptoContext from "./ContextApi" // globl obj




const CryptoProvider = ({children}) => {

const[currency,setCurrency]=useState('USD');
const[symbol,setSymbol]=useState('$')

useEffect(()=>{

    if(currency=='USD') setSymbol('$')
    else if(currency==='INR') setSymbol('₹')
},[currency])





    return (

        <cryptoContext.Provider value={{currency,symbol,setCurrency,setSymbol}}>

            {children}
        </cryptoContext.Provider>

    )
}

export default CryptoProvider