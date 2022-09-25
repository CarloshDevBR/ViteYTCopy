import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Apps from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
import Whatshot from '@mui/icons-material/Whatshot';
import Subscriptions from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import AddCircle from '@mui/icons-material/AddCircle';

import { makeStyles } from "@mui/styles";

import logoDark from './assets/preto.png'

import { 
  Grid, AppBar, Toolbar, Button, Box, Drawer, IconButton,
  List, Divider, ListItem, ListItemText, Typography, ListSubheader
} from '@mui/material';

import { useState } from "react"

const useStyles = makeStyles({
  root: {
    height: "100vh",
    backgroundColor: "#f9f9f9"
  },
  icons: {
    marginRight: "15px"
  },
  listItemText: {
    fontSize: "14px"
  },
  listItem: {
    gap: 2, 
    paddingTop: "4px", 
    paddingBottom: "4px"
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    zIndex: 0,
    position: "absolute"
  }
});

function Home() {
    const [ openDrawer, setOpenDrawer ] = useState(false)

    const classes = useStyles()

    return (
        <Box className={classes.root} >
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
                    onClick={() => setOpenDrawer(!openDrawer)}
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
                temporary
                open={openDrawer}
                PaperProps={{
                  sx: {
                    width: 240,
                    borderRight: 'none',
                  }
                }}
                className={classes.drawer}
            > 
              <Box display="flex" mt="5px" pl="24px" justifyContent="center" sx={{ justifyContent: "flex-start" }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => setOpenDrawer(!openDrawer)}
                >
                    <MenuIcon />
                </IconButton>

                <Box
                    component="img"
                    style={{ alignSelf: "center"}}
                    sx={{ height: 30, zIndex: 1 }}
                    alt="logoDark"
                    src={logoDark}
                />
              </Box>

              <Box>
                <List>
                    <ListItem button className={classes.listItem}>    
                      <HomeIcon />         

                      <ListItemText insert primary="Início" className={classes.listItemText} disableTypography />

                    </ListItem>

                    <ListItem button className={classes.listItem} >
                      <Whatshot />

                      <ListItemText insert primary="Em alta" className={classes.listItemText} disableTypography />

                    </ListItem>

                    <ListItem button className={classes.listItem} >
                      <Subscriptions />

                      <ListItemText insert primary="Inscrições" className={classes.listItemText} disableTypography />

                    </ListItem>
                </List>
                
                <Divider sx={{ width: '95%' }} />

                <List>
                    <ListItem button className={classes.listItem}>    
                      <VideoLibraryIcon />         

                      <ListItemText insert primary="Biblioteca" className={classes.listItemText} disableTypography />

                    </ListItem>

                    <ListItem button className={classes.listItem}>
                      <HistoryIcon />

                      <ListItemText insert primary="Histórico" className={classes.listItemText} disableTypography />

                    </ListItem>
                </List>
                
                <Divider sx={{ width: '95%' }} />

                <Box p={3}>
                  <Typography
                    variant="body2"
                  >
                    Faça login para curtir vídeos, comentar e se inscrever.
                  </Typography>
                  <Box mt={2}>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      startIcon={<AccountCircleIcon />}
                    >Fazer Login</Button>
                  </Box>
                </Box>

                <Divider sx={{ width: '95%' }} />

                <List
                  component='nav'
                  aria-labelledby='nested-list-subheader'
                  subheader={
                    <ListSubheader
                      component='div'
                      id='nested-list-subheader'
                    >
                      O Melhor do youtube
                    </ListSubheader>
                  }
                >
                <ListItem button className={classes.listItem}>
                  <AddCircle />
                  <ListItemText className={classes.listItemText} primary={'Música'} disableTypography />
                </ListItem>

                <ListItem button className={classes.listItem}>
                  <AddCircle />
                  <ListItemText className={classes.listItemText} primary={'Esportes'} disableTypography />
                </ListItem>

                <ListItem button className={classes.listItem}>
                  <AddCircle />
                  <ListItemText className={classes.listItemText} primary={'Jogos'} disableTypography />
                </ListItem>

                <ListItem button className={classes.listItem}>
                  <AddCircle />
                  <ListItemText className={classes.listItemText} primary={'Filmes'} disableTypography />
                </ListItem>

                <ListItem button className={classes.listItem}>
                  <AddCircle />
                  <ListItemText className={classes.listItemText} primary={'Notícias'} disableTypography />
                </ListItem>

                <ListItem button className={classes.listItem}>
                  <AddCircle />
                  <ListItemText className={classes.listItemText} primary={'Ao vivo'} disableTypography />
                </ListItem>

                <ListItem button className={classes.listItem}>
                  <AddCircle />
                  <ListItemText className={classes.listItemText} primary={'Destaques'} disableTypography />
                </ListItem>

                <ListItem button className={classes.listItem}>
                  <AddCircle />
                  <ListItemText className={classes.listItemText} primary={'Videos 360'} disableTypography />
                </ListItem>
              </List>

              <Divider />

              <ListItem button className={classes.listItem}>
                  <AddCircle />
                  <ListItemText className={classes.listItemText} primary={'Procurar mais'} disableTypography />
              </ListItem>

              </Box>
            </Drawer>
        </Box>
  )
}

export default Home