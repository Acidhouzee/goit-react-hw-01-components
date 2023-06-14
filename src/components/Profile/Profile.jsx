import React from 'react';
import 'components/Profile/Profile.css'

export const Profile = (porps) => (
    <div className="profile">
        <div className="description center">
            <img src={porps.avatar} alt="User avatar" className="avatar" />
            <p className="name">{porps.username}</p>
            <p className="tag">@{porps.tag}</p>
            <p className="location">{porps.location}</p>
        </div>
        <ul className="stats center">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{porps.stats.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{porps.stats.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{porps.stats.likes}</span>
            </li>
        </ul>
    </div>
);