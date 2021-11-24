import React, {useState} from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Modal from "../components/ModalWindow/Modal"
import { reduxForm , Field } from "redux-form";
import {renderTextField, validate } from "../components/forForm/validations"

const Login = (props) => {
  const { handleSubmit, pristine, submitting, invalid } = props 

  const [modalActive, setModalActive] = useState(false)

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
      <h1
      data-testid="main-text">Sing in</h1>
        <div className="cont-form">
          <form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  component={renderTextField}
                  label="Email"
                />
                <Field
                  name="password"
                  component={renderTextField}
                  label="Пароль"
                />
            
                <h2 id='password-2'>Забыли пароль?</h2>
              <ThemeProvider theme={theme}>
                <Button
                  disabled={invalid || pristine || submitting}
                  type="submit"
                  sx={{ width: '100%', height: '61px', borderRadius: '70px', marginTop: '60px'}}
                  color='neutral'
                  variant="contained"
                >go</Button>
              </ThemeProvider>
              </form>
              <div className="new-user">
                  <p>Новый пользователь?</p>
                  <button className="btn-user" onClick={() => setModalActive(true)}><p id="user">Регистрация</p></button>
                  <Modal active={modalActive} setActive={setModalActive}/>
              </div>
          </div>
      </div>
    )
}

export default reduxForm({
  form: 'login',
  validate,
})(Login);