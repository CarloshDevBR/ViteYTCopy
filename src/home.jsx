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

import logoDark from './assets/preto.png';
import logoLight from './assets/branco.png'

import { 
  Grid, AppBar, Toolbar, Button, Box, Drawer, IconButton,
  List, Divider, ListItem, ListItemText, Typography, ListSubheader, Hidden, Switch
} from '@mui/material';

import { useState } from "react";

import { videos } from './data';

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    minHeight: "100vh"
  },
  icons: {
    marginRight: "15px"
  },
  listItemText: {
    fontSize: "14px"
  },
  listItem: {
    display: "flex",
    gap: "30px", 
    paddingTop: "4px", 
    paddingBottom: "4px"
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    position: "absolute",
  },
  subHeader: {
    textTransform: "uppercase",
  }
}));

function Home({ darkMode, setDarkMode }) {
    const [ openDrawer, setOpenDrawer ] = useState(false)

    const classes = useStyles()

    return (
        <Box className={classes.root} sx={{
          backgroundColor: darkMode ? "#181818" : "#f4f6f8",
        }} >
            <AppBar color="inherit" sx={{ 
                boxShadow: "none",
                zIndex: 0
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
                    src={darkMode ? logoLight : logoDark }
                />
                
                <Hidden mdDown>
                  <Grid
                      container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                  >
                      <Switch
                        color="default"
                        onChange={() => setDarkMode(!darkMode)}
                      />
                      
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
                </Hidden>

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
                    src={darkMode ? logoLight : logoDark }
                />
              </Box>

              <Box ml="8px">
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
                      className={classes.subHeader}
                      disableSticky={true}
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

            <Box p={4}>
              <Toolbar />

              <Typography
                variant="h5"
                color="textPrimary"
                sx={{ fontWeight: 600 }}
              >Recomendados</Typography>
            

              <Grid container spacing={3}>
                  {
                    videos.map(e => (
                      <Grid item lg={3} md={4} sm={6} sx={12}>
                        <Box key={e.id}>
                          <img
                            style={{ width: '100%' }}
                            alt={e.title}
                            src={e.thumb}
                          />
                          <Box>
                            <Typography
                              style={{ fontWeight: 600 }}
                              gutterBottom
                              variant='body1'
                              color='textPrimary'
                            >
                              {e.title}
                            </Typography>
                            <Typography
                              display='block'
                              variant='body2'
                              color='textSecondary'
                            >
                              {e.channel}
                            </Typography>
                            <Typography variant='body2' color='textSecondary'>
                              {`${e.views} • ${e.date}`}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))
                  }
              </Grid>
            </Box>
        </Box>
  )
}

export default Home