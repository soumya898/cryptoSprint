import React,{useContext} from 'react'
import cryptoContext from './ContextApi'
  import CryptoProvider from './CryptoProvider'

const Cryptostate = () => {

    return useContext(cryptoContext)

}

export default Cryptostate