import React, { useState } from "react";
import { TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import "../styles/Profile.css"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'


const Profile = () => {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
    const [cartId, setCartId ] = useState('')
    const [dataCart, setDataCart ] = useState('')

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const theme = createTheme({
        palette: {
          neutral: {
            main: '#FDBF5A',
            contrastText: '#fff',
          },
        },
      });

    return(
        <div className="cart">
            <div className="form">
                <h1>Профиль</h1>
                <p>Введите платежные данные</p>
                <div className="login_data">
                    <TextField 
                        sx={{ marginTop: '50px'}}
                        fullWidth
                        id="name" 
                        label="Имя владельца"
                        variant="standard"
                        color="grey"
                        
                    />
                    <TextField 
                        type='number'
                        sx={{ marginTop: '30px'}}
                        fullWidth
                        id="cart_id" 
                        label="Номер карты"
                        variant="standard"
                        color="grey"
                        value={cartId}
                        onChange={event => setCartId(event.target.value)}
                    />
                    <TextField
                        type='number'
                        sx={{ marginTop: '30px', width: '160px'}}
                        id="data" 
                        label="MM/YY"
                        value={dataCart}
                        onChange={event => setDataCart(event.target.value)}
                        variant="standard"
                        color="grey"
                    />
                        <FormControl sx={{width: '160px', marginTop: '30px', marginLeft: '35px' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password" color="grey">CVV</InputLabel>
                                <Input
                                    color="grey"
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'number' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                                }
                                />
                        </FormControl>          
                </div>
                <div className="btn_save">
                    <ThemeProvider theme={theme}>
                        <Button
                            sx={{ width: '353px', height: '61px', borderRadius: '70px'}}
                            color='neutral'
                            variant="contained"
                        >Contained</Button>
                    </ThemeProvider>
                </div>
                <div className="cart-info">
                    <img src="/images/logo_2.png" alt="" id="logo_2"/>
                    <div className="cart_id">
                        <h1>{cartId ? cartId : '0000 0000 0000 0000'}</h1>
                    </div>
                    <div className="data_cart">
                        <h1>{dataCart ? dataCart : '00/00'}</h1>
                    </div>
                    <img src="/images/Vector.png" alt="" id="vector"/>
                    <div className="cart_icon">
                        <FontAwesomeIcon icon={faCreditCard} color="grey" size="2x"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;