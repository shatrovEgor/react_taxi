import React from "react";
import { TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'

const Login = () => {
    const [values, setValues] = React.useState({
        password: '',
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
      const theme = createTheme({
        palette: {
          neutral: {
            main: '#FDBF5A',
            contrastText: '#fff',
          },
        },
      })

  

    return(
        <div>
          <h1>Войти</h1>
            <div className="cont-form">
                <TextField 
                    sx={{ marginTop: '50px'}}
                    fullWidth
                    id="name" 
                    label="Email"
                    variant="standard"
                    color="grey"  
                />
                <FormControl sx={{width: '100%', marginTop: '30px' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password" color="grey">Пароль</InputLabel>
                                <Input
                                    color="grey"
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
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
                        <ThemeProvider theme={theme}>
                        <Button
                            component={Link}
                            to="/map"
                            sx={{ width: '100%', height: '61px', borderRadius: '70px', marginTop: '40px'}}
                            color='neutral'
                            variant="contained"
                        >Войти</Button>
                    </ThemeProvider>
            </div>
        </div>
    )
}

export default Login;