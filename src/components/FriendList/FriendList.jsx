import React from 'react';
import 'components/FriendList/FriendList.css'

const RenderFriendList = ( {props} ) => (   
    <ul className="friend-list">
        {props.map((prop, index) => (
            <li key={index} className="item">
                <span className={prop.isOnline ? 'is-online' : 'is-offline'}></span>
                <img className="avatar" src={prop.avatar} alt="User avatar" width="48" />
                <p className="name">{prop.name}</p>
            </li>
        ))}
    </ul>
);

export const FriendList = ( {friends} ) => (   
    <ul className="friend-list">
        <RenderFriendList props={friends} />
    </ul>
);


