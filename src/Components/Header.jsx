import React from 'react';
import { AppBar, Container, MenuItem, Select, ThemeProvider, Typography, createTheme, makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
 import Cryptostate from '../Context/Cryptostate';
const Header = () => {
  const useStyles = makeStyles(() => ({
    appBar: {},
    title: {
      padding: '10px',
       fontSize:'28px',
      flex: 1,
      color: 'gold',
      fontFamily: "Montserrat",
      fontWeight: 'bold',
      cursor: 'pointer'
    },
  }));

  const classes = useStyles();
  const navigate = useNavigate();  // to naviage 
const { currency,setCurrency}=Cryptostate() // is  same kind of thing like consumer

 console.log(currency)
  // Create a dark theme
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
      type: 'dark'
    }
  });

  return (
    <div>
      {/* Apply the dark theme to whole page  */}
      <ThemeProvider theme={darkTheme}>
        {/* The AppBar */}
        <AppBar color='transparent' position='static' className={classes.title}>
          <Container>
            {/* Flex container to align elements */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* Left side Typography, clicking it navigates to home */}
              <Typography onClick={() => navigate('/')} className={classes.typography} style={{fontSize:'2rem'}}>
              CryptóSprint
              </Typography>


              {/* Right side Select for currency selection */}
              
              <Select variant='outlined' style={{ width: 100, height: 40,marginRight:15 }}
               value={currency}
              onChange={(e)=>setCurrency(e.target.value)}
              >
                {/* Disabled default option */}
                <MenuItem disabled>Select</MenuItem>
                {/* Currency options */}
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </div>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Header;
