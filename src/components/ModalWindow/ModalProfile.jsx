import React from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'

const ModaProfile = () => {

  const theme = createTheme({
    palette: {
      neutral: {
        main: '#FDBF5A',
        contrastText: '#000000',
      },
    },
  })

  return(
    <div className='modal-profile'>
      <h1>Профиль</h1>
      <p>Платёжные данные обновлены. Теперь вы можете заказывать такси.</p>
      <ThemeProvider theme={theme}>
        <Button
          component={Link}
          to="/map"
          sx={{ width: '50%', height: '61px', borderRadius: '70px', marginTop: '40px'}}
          color='neutral'
          variant="contained"
        >Перейти на карту</Button>
      </ThemeProvider>
    </div>
  )
}

export default ModaProfile;