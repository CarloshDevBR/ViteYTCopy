import { ThemeProvider, createTheme } from '@mui/material'

import Home from './home.jsx'

const theme = createTheme({
    secondary: {
      main: "#e41b1b"
    },
  }
);

function App() {

  return (
    <ThemeProvider theme={theme} >
      <Home />
    </ThemeProvider>
  )
}

export default App
