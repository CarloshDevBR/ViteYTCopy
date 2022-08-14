import { makeStyles } from '@mui/styles'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Apps from '@mui/icons-material/Apps';

import { Grid, AppBar, Toolbar, Button, IconButton } from '@mui/material';

const useStyles = makeStyles({
    icons: {
        marginRight: 15,
    },
})

function Home() {
    const classes = useStyles()

    return (
        <div sx={{ height: '100vh' }} >
            <AppBar color="inherit" sx={{ boxShadow: 'none' }}>
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

                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                > 
                    <IconButton>
                        <VideoCallRoundedIcon className={classes.icons} />
                    </IconButton>

                    <IconButton>
                        <Apps className={classes.icons} />
                    </IconButton>

                    <IconButton>
                        <MoreVertRoundedIcon className={classes.icons} />
                    </IconButton>

                    <Button 
                        color="primary" 
                        variant="outlined" 
                        startIcon={<AccountCircleIcon />}
                    >FAZER LOGIN</Button>
                </Grid>

                </Toolbar>
            </AppBar>
        </div>
  )
}

export default Home