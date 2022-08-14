import { ThemeProvider, createTheme } from '@mui/material'

import CssBaseline from '@mui/material/CssBaseline';

import Home from './home.jsx'

const theme = createTheme({
  palette: {
    primary: {
      main: "#e41b1b"
    }
  }
});

function App() {

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App
