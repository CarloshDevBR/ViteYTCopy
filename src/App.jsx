import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material'

import Home from './home.jsx'

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  background: {
    default: '#232323',
    dark: '#f4f6f8',
    paper: '#232323',
  },
  }
);

function App() {

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme} >
        <Home />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
