import React, { useEffect, useState } from 'react'
import './sidebarChat.css'
import { Avatar } from "@material-ui/core"
export default function SidebarChat({ addNewChat }) {
    const [seed, setSeed]= useState("");
    console.log(seed)
    useEffect(()=>{
       setSeed((Math.floor(Math.random()*5000)));
    }, [])

    const createChat = ()=>{
        const roomName = prompt("Please enter a name for chat");

        if(roomName){
            //do some clever database stuff
        }
    };

  return !addNewChat ? (
    <div className='sidebarChat'>
     <Avatar src={`https://avatars.dicebear.com/api/human/:${seed}.svg`} />
    <div className="sidebarChatInfo">
        <h2>Room name</h2>
        <p>Last Message...</p>
    </div>

    </div>
  ) : (<div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
  </div>)
}

