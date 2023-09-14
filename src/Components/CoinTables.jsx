import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Container, TextField, ThemeProvider, Typography,
    createTheme, makeStyles, InputAdornment, Select, MenuItem,
    TableContainer, LinearProgress, TableHead, Table, TableRow, TableCell
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Cryptostate from '../Context/Cryptostate';
import { CoinList } from '../config/Api';
import { FaSearch } from 'react-icons/fa';
const CoinTables = () => {
    const { currency } = Cryptostate();

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);

    const [Search, setSearch] = useState()
    const [sortitems, setSortItems] = useState()

    const useStyles = makeStyles(() => ({
        TableList: {},
        textFields: {
            '& .MuiOutlinedInput-root': {
                borderRadius: '30px', // Apply border-radius to the input field
            },
            backgroundColor: 'transparent',
            fontFamily: 'Arial, sans-serif',
            fontSize: '22px',
            width: '500px',
        },
    }));

    const classes = useStyles();

    const getCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));

        try {
            setCoins(data);
            setLoading(false);
        } catch (error) {
            console.log("Error:", error.message);
        }
    };

    useEffect(() => {
        getCoins();
    }, [currency]);


    console.log("Coins:", coins)
    const darkTheme = createTheme({
        palette: {
            primary: { main: "#fff" },
            type: 'dark',
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Container>
                <Typography variant="h4" style={{ marginBottom: '25px', fontFamily: "Times New Roman", fontWeight: 500, fontSize: '32px', textAlign: 'center' }}>
                    Crypto Market Update
                </Typography>
                <div style={{ marginLeft: '40px', display: 'flex', justifyContent: 'space-between', marginRight: 15 }}>

                    <TextField
                        label='Search coins..'
                        variant='outlined' className={classes.textFields}

                        onChange={(e) => { setSearch(e.target.value) }}

                    ></TextField>

                    <Select variant='outlined' style={{ width: 100, height: 45 }}>

                        onChange={(e) => setSortItems(e.target.value)}

                        <MenuItem disabled>Sort Items</MenuItem>
                        <MenuItem value="Price">Price</MenuItem>
                        <MenuItem value="name">A-Z</MenuItem>
                    </Select>

                </div>
                const tableHeaders = [
                'Coin',
                'Price',
                'Current Price',
                'Total Volume',
                'Market Cap',
                'Last 7 Days',
                ];

                {/*   Adding A table where all coins details display*/}

                <TableContainer>
                    {loading ? (<LinearProgress style={{ backgroundColor: 'gold' }} />) : (

                        <Table>
                            <TableHead style={{ backgroundColor: '#EEBC1D' }}>

                                <TableRow>
                                 {tableHeaders.map((head)=>(
                                       <TableCell style={{color:'black',fontWeight:'700',fontFamily:'Montserrat'}}
                                        key={head}

                                        > 
                                        {head}</TableCell>



                                 ))}



                                </TableRow>

                            </TableHead>
                        </Table>
                    )}
                </TableContainer>




            </Container>
        </ThemeProvider>
    );
};

export default CoinTables;
