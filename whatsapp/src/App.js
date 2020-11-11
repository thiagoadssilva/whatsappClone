import React, {useState, useEffect} from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import ChatLisItem from './components/ChatListItem';
import './App.css';

export default () =>{

    const [chatList, setChatList] = useState([{},{},{},{},{},{},{},{},{},{},{},{}]);

    return(
        <div className="app-window">

            <div className="sidebar">
                <header>
                    <img className="header--avatar" src="https://img.favpng.com/20/11/10/computer-icons-icon-design-png-favpng-8Hk26AsZVcQbfXKf83GxDkCZS.jpg" alt=""></img>
                    <div className="header--buttons">
                        <div className="header--btn">
                            <DonutLargeIcon style={{color: '#919191'}}/>
                            <ChatIcon style={{color: '#919191'}}/>
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
                    {chatList.map((item, key) =>(
                        <ChatLisItem
                            key={key}
                        />
                    ))}
                </div>
            </div>

            <div className="contentare">
                123
            </div>

        </div>
    );
}