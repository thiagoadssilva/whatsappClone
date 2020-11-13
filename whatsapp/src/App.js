import React, {useState, useEffect} from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import ChatLisItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import './App.css';

export default () =>{

    const [chatlist, setChatList] = useState([
        {chatId: 1, title:"thiago jose da silva", image: "https://img.favpng.com/20/11/10/computer-icons-icon-design-png-favpng-8Hk26AsZVcQbfXKf83GxDkCZS.jpg"},
        {chatId: 2, title:"Bento jose da silva", image: "https://img.favpng.com/20/11/10/computer-icons-icon-design-png-favpng-8Hk26AsZVcQbfXKf83GxDkCZS.jpg"},
        {chatId: 3, title:"thiago jose da silva", image: "https://img.favpng.com/20/11/10/computer-icons-icon-design-png-favpng-8Hk26AsZVcQbfXKf83GxDkCZS.jpg"},
        {chatId: 4, title:"thiago jose da silva", image: "https://img.favpng.com/20/11/10/computer-icons-icon-design-png-favpng-8Hk26AsZVcQbfXKf83GxDkCZS.jpg"},
        {chatId: 5, title:"thiago jose da silva", image: "https://img.favpng.com/20/11/10/computer-icons-icon-design-png-favpng-8Hk26AsZVcQbfXKf83GxDkCZS.jpg"}
        
    ]);
    const [activeChat, setActiveChat] = useState({});
    const [user, setUser] = useState({
        id: 1234,
        avatar: 'https://img.favpng.com/20/11/10/computer-icons-icon-design-png-favpng-8Hk26AsZVcQbfXKf83GxDkCZS.jpg',
        name: 'Bento Jose da Silva'        
    });

    const [showNewChat, setShowNewChat] = useState(false);


    const handleOpen = () =>{
        setShowNewChat(true);
    }

    return(
        <div className="app-window">

            <div className="sidebar">
                <NewChat 
                    chatlist={chatlist}
                    user={user}
                    show={showNewChat}
                    setShow={setShowNewChat}
                />
                <header>
                    <img className="header--avatar" src={user.avatar} alt=""></img>
                    <div className="header--buttons">
                        <div className="header--btn">
                            <DonutLargeIcon style={{color: '#919191'}}/>
                        </div>
                        <div onClick={handleOpen} className="header--btn">
                            <ChatIcon style={{color: '#919191'}}/>
                        </div>
                        <div className="header--btn">
                            <MoreVertIcon style={{color: '#919191'}}/>
                        </div>
                    </div>
                </header>
                <div className="search">
                    <div className="search--input">
                        <SearchIcon fontSize="small" style={{color: '#919191'}}/>
                        <input type="search" placeholder="Procurar ou começar uma nova conversa"></input>
                    </div>
                </div>
                <div className="chatlist">
                    {chatlist.map((item, key) =>(
                        <ChatLisItem
                            key={key}
                            data={item}
                            active={activeChat.chatId === chatlist[key].chatId}
                            onClick={()=>setActiveChat(chatlist[key])}
                        />
                    ))}
                </div>
            </div>

            <div className="contentarea">
                {activeChat.chatId !== undefined &&
                    <ChatWindow 
                        user={user}
                    />
                }
                {activeChat.chatId === undefined &&
                    <ChatIntro />
                }
            </div>

        </div>
    );
}