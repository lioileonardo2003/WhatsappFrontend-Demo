import React, { useState } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@mui/material'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material'
import axios from '../axios'


function Chat({ messages }) {

  const [input, setInput] = useState("")
  const sendMessage = async (e) => {

    e.preventDefault();

    await axios.post('/api/v1/messages',{
      message: input,
      name: "Author Name",
      timestamp: "now",
      received: false
    }).then();

    setInput("");

  };

  return (
    <div className='chat'>

      <div className="chat_header">
        <Avatar />
        <div className="chat_header_info">
          <h3>Chat Name</h3>
          <p>Visto l'ultima volta....</p>
        </div>
        <div className="chat_header_right">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile></AttachFile>
          </IconButton>

          <IconButton>
            <MoreVert></MoreVert>
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        {messages.map((messages) => {//La struttura si ripete N volte quanti sono i messaggi
          <div className={`chat_message ${messages.received && "chat_receiver" }`} >
            <span className='chat_name'>{messages.name}</span>
            {messages.message}
            <span className='chat_timestamp'> {messages.timestamp}</span>
          </div>

        })}


      </div>

      <div className="chat_footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>

        <form>
          <input value={input} 
          onChange={(e)=>setInput(e.target.value)}
          type="text" placeholder='Scrivi un messaggio' />
          <button onClick={sendMessage} type='sumbit'>Invia il messaggio</button>
        </form>
      </div>

    </div>
  )
}

export default Chat