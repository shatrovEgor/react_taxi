import React from "react";
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

const Profile = () => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

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

    return(
        <div className="cart">
            <div className="form">
                <h1>Профиль</h1>
                <p>Введите платежные данные</p>
                <div className="login_data">
                    <TextField 
                        sx={{ marginTop: '50px'}}
                        fullWidth
                        id="standard-basic" 
                        label="Имя владельца"
                        variant="standard"
                        color="grey"
                    />
                    <TextField 
                        sx={{ marginTop: '30px'}}
                        fullWidth
                        id="standard-basic" 
                        label="Номер карты"
                        variant="standard"
                        color="grey"
                    />
                    <TextField 
                        sx={{ marginTop: '30px', width: '160px'}}
                        id="standard-basic" 
                        label="MM/YY"
                        variant="standard"
                        color="grey"
                    />
                        <FormControl sx={{width: '160px', marginTop: '30px', marginLeft: '35px' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">CVV</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
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
                    <Button 
                        sx={{ width: '353px', backgroundColor:'#FDBF5A',color: 'black', height: '61px', borderRadius: '70px'}}
                    >Contained</Button>
                </div>
            </div>
            
        </div>
    )
}

export default Profile;