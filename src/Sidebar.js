import React from 'react';
import './Sidebar.css';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NoteIcon from '@mui/icons-material/Note';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
function Sidebar() {
    const dispatch= useDispatch();
    
  return (
    <div className="sidebar">
        <Button 
            startIcon={<AddIcon fontSize='large'  />}
            className="sidebar_compose"
            onClick={()=> dispatch(openSendMessage())}
        >

            Compose
        </Button>

        <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}  />
        <SidebarOption Icon={StarIcon} title="Starred" number={54}  />
        <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54}  />
        <SidebarOption Icon={LabelImportantIcon} title="Important" number={54}  />
        <SidebarOption Icon={NearMeIcon} title="Sent" number={54}  />
        <SidebarOption Icon={NoteIcon} title="Drafts" number={54}  />
        <SidebarOption Icon={ExpandMoreIcon} title="More" number={54}  />

        <div className= "sidebar__footer">
            <div className="sidebar__footerIcons">
                <IconButton>
                    <PersonIcon />
                </IconButton>

                <IconButton>
                    <DuoIcon />
                </IconButton>
                <IconButton>
                    <PhoneIcon />
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
