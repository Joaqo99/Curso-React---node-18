import { AddOutlined, MailOutline } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
    return (
        <JournalLayout>
        {/* <Typography>Lorem impsum ksdlfkdsanfjkdsancjkdsnchjdsnbchadsncjkedb hjerahcfndjs bchusdbckndsbcjdsbchjdschjsb hsdbckjdscbdskjcbdskjcdskjcnkjechjzxm,mcaksdcnejndhjdcbbveriub ecbvuisdcds</Typography> */}

            <NothingSelectedView />
            {/*<NoteView />*/}

            <IconButton
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.7},
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{fontSize: 30}}/>
            </IconButton>
        </JournalLayout>
    );
};