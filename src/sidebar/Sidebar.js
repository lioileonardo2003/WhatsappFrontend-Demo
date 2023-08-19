import React from 'react'
import './Sidebar.css'

//Importo le icone che usero
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton, formGroupClasses } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SideBarChat from './SideBarChat';




//Dobbiamo dividere l'header in 2 parti quindi lo duplichiamo
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_header_left">
                    <IconButton>
                        <Avatar src='data:image/png;base64,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'></Avatar>
                    </IconButton>
                </div>
                <div className="sidebar_header_right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_search_container">
                    <SearchIcon />
                    <input type="text" placeholder='Cerca o inizia una nuova chat' />
                </div>
            </div>
            <div className='sidebar_chat'>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
            </div>

        </div>

    )
}

export default Sidebar