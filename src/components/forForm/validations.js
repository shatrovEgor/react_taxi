import React from 'react'
import { TextField } from "@mui/material";

export const validate = values => {
    const errors = {}
    const requiredFields = [
      'firstName',
      'cardId',
      'cardDate',
      'CVV',
      'email',
      'password',
    ]
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Не заполнено'
      }
    })
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Некорректный формат Email'
    }
    
    return errors
  }
  const maxLength = max => value =>
      value && value.length < max ? `Числовой номер из 16 цифр` : undefined

  export const maxValue = maxLength(16)

  const minnValue = min => value =>
    value && value.length > min ? `Числовой номер из 16 цифр` : undefined

  export const minValue = minnValue(16)

  const dateValue = min => value =>
  value && value.length !== min ? `Дата в формате MM/YY` : undefined

  const cvvValue = min => value =>
  value && value.length !== min ? `Ваш CVV код` : undefined

  export const dateValuee = dateValue(5)
  export const valueCVV = cvvValue(3)

  export const dateTest = value => 
  value && !/[0-9]{2}[/][0-9]{2}/i.test(value)
    ? 'Дата в формате MM/YY'
    : undefined

    export const validName = value =>
    value && !/^[a-z ,.'-]+$/i.test(value)
      ? 'Некорректно введено имя'
      : undefined


  export const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      sx={{ marginTop: '20px'}}
      fullWidth
      variant="standard"
      color="grey"
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )
  

  