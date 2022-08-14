import { makeStyles } from '@mui/styles'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles({
    root: {
      height: '100vh',
    }
  })

function Home() {
    const classes = useStyles()

    return (
        <div className={classes.root} >
            <Box sx={{ flexGrow: 1 }}>
                <AppBar color="inherit">
                    <Toolbar>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6">News</Typography>

                    <Button color="inherit">LOGIN</Button>

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
  )
}

export default Home