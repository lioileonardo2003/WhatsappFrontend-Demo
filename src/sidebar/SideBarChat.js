import React from 'react'
import './SideBarChat.css'
import { Avatar } from '@mui/material'

function SideBarChat() {
  return (
	<div className='sidebarChat'>
			<Avatar/>
			<div className="sidebarChat_info">
			<h2>Name</h2>
			<p>Message</p>

			</div>
	</div>
  )
}

export default SideBarChat