import { TurnedInNot } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemIcon, Grid, ListItemText, } from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({note}) => {

    const dispatch = useDispatch()

    const onClickNote = (note) => {
        dispatch(setActiveNote(note))
    }


    const newTitle = useMemo(()=>{
        return note.title.length > 15
            ? note.title.substring(0, 15) + '...'
            : note.title
    }, [note.title])


    return (
        <ListItem disablePadding>
            <ListItemButton onClick={() => onClickNote(note)}>

                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>

                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={note.body} />
                </Grid>

            </ListItemButton>
        </ListItem>
    );
}