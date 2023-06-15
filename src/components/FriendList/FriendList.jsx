import React from 'react';
import 'components/FriendList/FriendList.css'

const Friend = ( {isOnline, avatar, name} ) => (   
    <li className="item">
        <span className={isOnline ? 'is-online' : 'is-offline'}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
);

export const FriendList = ({friends}) => (   
    <ul className="friend-list">
        {friends.map(({avatar, name, isOnline}) => (
            <Friend key={name} avatar={avatar} name={name} isOnline={isOnline} />
        ))}
    </ul>
);


