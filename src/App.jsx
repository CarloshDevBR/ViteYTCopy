import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material'
import { useState } from 'react';

import Home from './home.jsx'

function App() {
  const [ darkMode, setDarkMode ] = useState(true)

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
    background: {
      default: darkMode ? '#232323' : '#FFF',
      dark: darkMode ? '#181818' : '#f4f6f8',
      paper: darkMode ? '#232323' : '#FFF',
    },
    }
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme} >
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
