import React from 'react';
import './ChatListItem.css';


export default ({onClick, active, data}) => {
    return(
        <div className={`chatListItem ${active?'active':''}`} onClick={onClick}>
            <img className="chatListItem--avatar" src={data.image} alt=""></img>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
                    <div className="chatListItem--date">20:00</div>
                </div>

                <div className="chatLisItem--line">
                    <div className="chatLisItem--lastMsg">
                        <p>Ola tudo bom?Ola tudo bom?Ola tudo bom?Ola tudo bom?Ola tudo bom?Ola tudo bom?Ola tudo bom?Ola tudo bom?Ola tudo bom?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

