import React, { useState } from "react";
import "../styles/Profile.css"
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faTimes } from '@fortawesome/free-solid-svg-icons';
import store from "../store";
import { reduxForm , Field } from "redux-form";
import {renderTextField, validate, maxValue, minValue, dateValuee, validName, dateTest, valueCVV } from "../components/forForm/validations"
import  {useNavigate}  from 'react-router-dom'

const Profile = (props) => {
 
    const [active, setActive] = useState('true')

      const handleChangeClick = () => {
        navigate('/map')
      }

      const handleChangeClick2 = (event) => {
        setActive(false)
      }

      let navigate = useNavigate();

      const theme = createTheme({
        palette: {
          neutral: {
            main: '#FDBF5A',
            contrastText: '#00000',
          },
        },
      });

      const { handleSubmit, pristine, submitting, invalid } = props 

      

    return(
        <div className={active ? 'cart' : 'unactive'}>
            <div className="form">
            <FontAwesomeIcon icon={faTimes} color="grey" size="2x" className="btn_close" onClick={handleChangeClick}/>
                <h1>Профиль</h1>
                <p>Введите платежные данные</p>
                <form onSubmit={handleSubmit}>
                <div className="login_data">
                        <div className="login_id">
                            <Field
                                name="firstName"
                                component={renderTextField}
                                label="Имя владельца"
                                validate={validName}
                            />
                        </div>
                    <div className="login_id">
                        <Field
                            name="cardId"
                            component={renderTextField}
                            label="Номер карты"
                            validate={[maxValue,minValue]}
                        />
                    </div>
                    <div className="login_data_2">
                        <Field
                            name="cardDate"
                            component={renderTextField}
                            validate={[dateValuee, dateTest]}
                            label="MM/YY"
                        />
                    </div>
                    <div className="login_data_2_2">
                        <Field
                            name="CVV"
                            component={renderTextField}
                            label="CVV"
                            type="number"
                            validate={valueCVV}
                         />
                    </div>
                </div>
                <div className="btn_save">
                    <ThemeProvider theme={theme}>
                        <Button
                            onClick={handleChangeClick2}
                            disabled={invalid || submitting || pristine}
                            type="submit"
                            sx={{ width: '353px', height: '61px', borderRadius: '70px'}}
                            color='neutral'
                            variant="contained"
                        >сохранить</Button>
                    </ThemeProvider>
                </div>
                </form>
                <div className="cart-info">
                    <img src="/images/logo_2.png" alt="" id="logo_2"/>
                    <div className="cart_id">
                        <h1>{'0000 0000 0000 0000'}</h1>
                    </div>
                    <div className="data_cart">
                        <h1>{'00/00'}</h1>
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

export default reduxForm({
    form: 'card',
    validate,
})(Profile);