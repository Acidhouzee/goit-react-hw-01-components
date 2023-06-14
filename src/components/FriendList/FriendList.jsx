import React from 'react';
import 'components/FriendList/FriendList.css'

export const FriendList = ( {friends} ) => (   
    <ul className="friend-list">
        {friends.map((friend, index) => (
            <li key={index} className="item">
                <span className={friend.isOnline ? 'is-online' : 'is-offline'}></span>
                <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">{friend.name}</p>
            </li>
        ))}
    </ul>
);
