import { TurnedInNot } from "@mui/icons-material";
import { Grid, Drawer, Typography, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";

export const SideBar = ({ drawerWidth }) => {
    return (
        <Box
            component="nav"
            sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
        >

            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
                }}
            >
                <Toolbar>
                    <Typography varient='h6' noWrap component='div'>Joaquin Varela</Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
                            <ListItem key={ text } disablePadding>
                                <ListItemButton>

                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>

                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'loremksmkldsamfkldsmafkdsfidskmksdlmcskdnms'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>

        </Box>
    );
}