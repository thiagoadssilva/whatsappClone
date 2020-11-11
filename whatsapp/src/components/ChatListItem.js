import React from 'react';
import './ChatListItem.css';


export default () => {
    return(
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://img.favpng.com/20/11/10/computer-icons-icon-design-png-favpng-8Hk26AsZVcQbfXKf83GxDkCZS.jpg" alt=""></img>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Thiago Jose da Silva</div>
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

