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
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDateFns';
import store from "../store";
import { setNameProfile, setCardIdProfile, setPasswordProfile, setDateProfile, returnName } from '../actions'

const Profile = () => {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
    const [cartId, setCartId ] = useState('')
    const [dataCart, setDataCart ] = useState('')
    const [date, setDate] = useState('')
    const [active, setActive] = useState('true')
    const [name , setName] = useState('')


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

      const handleIdChange = (event) => {
          let a = event.target.value
          if(a.length === 4 || a.length === 9 || a.length === 14) {
              a = a + ' '
          };
          if(a.length === 19){
              
          }
        setCartId(a)
      };

      const handleChangeDataCard = (event) => {
          let a = event.target.value
          if(a.length === 2){
              a = a + '/'
          }
          setDataCart(a)
      }
      const handleChangeDate = (newValue) => {
          setDate(newValue)
      }

      const theme = createTheme({
        palette: {
          neutral: {
            main: '#FDBF5A',
            contrastText: '#00000',
          },
        },
      });

      const authenticate = (event) => {
        event.preventDefault();
        setActive(false)
        store.dispatch(setNameProfile(name))
        store.dispatch(setCardIdProfile(cartId))
        store.dispatch(setPasswordProfile(values.password))
        store.dispatch(setDateProfile(dataCart))
        setName(store.getState().name)
        console.log(store.getState());
        console.log(name);
      }

    return(
        <div className={active ? 'cart' : 'unactive'}>
            <div className="form">
                <h1>Профиль</h1>
                <p>Введите платежные данные</p>
                <div className="login_data">
                    <form onSubmit={authenticate}>
                    <TextField 
                        sx={{ marginTop: '50px'}}
                        fullWidth
                        id="name"
                        value={name} 
                        onInput={ e=>setName(e.target.value)}
                        label="Имя владельца"
                        variant="standard"
                        color="grey"
                        
                    />
                    <TextField 
                        type='text'
                        sx={{ marginTop: '30px'}}
                        fullWidth
                        id="cart_id" 
                        label="Номер карты"
                        variant="standard"
                        color="grey"
                        value={cartId}
                        onChange={handleIdChange}
                        onInput={ e=>setCartId(e.target.value)}
                    />
                    <TextField
                        type='text'
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        sx={{ marginTop: '30px', width: '160px'}}
                        id="data" 
                        label="MM/YY"
                        value={dataCart}
                        onChange={handleChangeDataCard}
                        onInput={ e=>setDataCart(e.target.value)}
                        variant="standard"
                        color="grey"
                    />
                    <div className="date-picker">
                        <LocalizationProvider dateAdapter={DateAdapter}>
                            <DatePicker
                                views={['year', 'month']}
                                sx={{marginTop: '20px'}}
                                label="MM/YY"
                                inputFormat="MM/yy"
                                value={date}
                                onChange={handleChangeDate}
                                renderInput={(params) => <TextField {...params} helperText={null} />}
                            />
                        </LocalizationProvider>
                    </div>
                    
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
                        </form>          
                </div>
                <div className="btn_save">
                    <ThemeProvider theme={theme}>
                        <Button
                            type="submit"
                            sx={{ width: '353px', height: '61px', borderRadius: '70px'}}
                            color='neutral'
                            variant="contained"
                            onClick={authenticate}
                        >сохранить</Button>
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