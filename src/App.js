import './App.css';
import Sidebar from './sidebar/Sidebar';
import Chat from './Chat/Chat';
import Pusher from 'pusher-js'
import { useEffect, useState } from 'react';
import axios from "./axios"

function App() {
  const[messages, setMessages] = useState([]);


  useEffect(() => {
    axios.get("/api/v1/messages/sync").then((response) => {
      setMessages(response.data);
    }).catch((error) => {
      console.error("Errore durante la richiesta dei messaggi:", error);
    });
  }, []);


  //Agganciare il Backend con il Frontend
  useEffect(()=>{

    var pusher = new Pusher('06b9d9867801cea07e20', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      //alert(JSON.stringify(data));
      setMessages([...messages, newMessage]); //Se faccio una request dal sito del tipo, questo valore cambierà
    });
    return () => {
          channel.unbind();
          channel.unsubscribe();
        }

  }, [messages]);

  return (
    <div className="App">
      <div className='app_body'>
      <Sidebar/>
      <Chat messages={messages}/>
       </div>
    </div>
  );
}

export default App;
