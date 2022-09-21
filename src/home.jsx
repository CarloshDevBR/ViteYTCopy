import { makeStyles } from '@mui/styles'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Apps from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
import Whatshot from '@mui/icons-material/Whatshot';
import Subscriptions from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

import logoDark from './assets/preto.png'

import { 
  Grid, AppBar, Toolbar, Button, Box, Drawer, IconButton,
  List, Divider, ListItem, ListItemText,
} from '@mui/material';

import { useState } from 'react';

const useStyles = makeStyles({
    root: {
      backgroundColor: '#f9f9f9',
    },
    icons: {
        marginRight: 15,
    },
    drawer: {
      width: 240,
      flexShrink: 0,
      zIndex: 0
    },
    listItemText: {
      fontSize:'0.7em',
    }
})

function Home() {
    const classes = useStyles()

    const [ state, setState ] = useState(false)

    return (
        <Box sx={{ height: '100vh' }} className={classes.root} >
            <AppBar color="inherit" sx={{ 
                boxShadow: 'none',
                zIndex: 1, 
              }} >
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

                <Box
                    component="img"
                    sx={{ height: 30, zIndex: 1 }}
                    alt="logoDark"
                    src={logoDark}
                />
                
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

            <Drawer
                className={classes.drawer}
                variant='permanent'  
                PaperProps={{
                  sx: {
                    width: 240,
                    borderRight: 'none',
                  }
                }}
                sx={{ 
                  position: 'absolute',
                }}
            >
              <Toolbar />

              <Box>
                <List>
                    <ListItem button sx={{ gap: 3, paddingTop: "4px", paddingBottom: "4px" }}>    
                      <HomeIcon />         

                      <ListItemText insert primary="Início" sx={{ fontSize: "14px" }} disableTypography />

                    </ListItem>

                    <ListItem button sx={{ gap: 3, paddingTop: "4px", paddingBottom: "4px" }} >
                      <Whatshot />

                      <ListItemText insert primary="Em alta" sx={{ fontSize: "14px" }} disableTypography />

                    </ListItem>

                    <ListItem button sx={{ gap: 3, paddingTop: "4px", paddingBottom: "4px" }} >
                      <Subscriptions />

                      <ListItemText insert primary="Inscrições" sx={{ fontSize: "14px" }} disableTypography />

                    </ListItem>
                </List>
                
                <Divider sx={{ width: '95%' }} />

                <List>
                    <ListItem button sx={{ gap: 3, paddingTop: "4px", paddingBottom: "4px" }}>    
                      <VideoLibraryIcon />         

                      <ListItemText insert primary="Biblioteca" sx={{ fontSize: "14px" }} disableTypography />

                    </ListItem>

                    <ListItem button sx={{ gap: 3, paddingTop: "4px", paddingBottom: "4px" }} >
                      <Whatshot />

                      <ListItemText insert primary="Em alta" sx={{ fontSize: "14px" }} disableTypography />

                    </ListItem>
                </List>
              </Box>
            </Drawer>
        </Box>
  )
}

export default Home