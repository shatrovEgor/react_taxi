import React, {useState} from "react";
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
import Modal from "../components/ModalWindow/Modal"

const Login = () => {
    const [modalActive, setModalActive] = useState(false)

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
            contrastText: '#000000',
          },
        },
      })

  

    return(
        <div>
          <h1>Sing in</h1>
            <div className="cont-form">
                <TextField 
                    sx={{ marginTop: '50px'}}
                    fullWidth
                    id="name" 
                    label="Email"
                    variant="standard"
                    color="grey"  
                />
                <FormControl sx={{width: '100%', marginTop: '50px' }} variant="standard">
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
                        <h2 id='password'>Забыли пароль?</h2>
                        <ThemeProvider theme={theme}>
                        <Button
                            component={Link}
                            to="/map"
                            sx={{ width: '100%', height: '61px', borderRadius: '70px', marginTop: '100px'}}
                            color='neutral'
                            variant="contained"
                        >go</Button>
                    </ThemeProvider>
                    <div className="new-user">
                        <p>Новый пользователь?</p>
                        <button className="btn-user" onClick={() => setModalActive(true)}><p id="user">Регистрация</p></button>
                        <Modal active={modalActive} setActive={setModalActive}/>
                    </div>
            </div>
        </div>
    )
}

export default Login;