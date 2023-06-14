import React from 'react';
import 'components/Statistics/Statistics.css'

export const Statistics = ({ stats, title} ) => (
    <section className="statistics center">
        { title && (
            <h2 className="title">{title}</h2>
        )}
        
        <ul className="stat-list">
            {stats.map(stat => (
                <li key={stat.id} className="item" style={{ backgroundColor: getRandomColor() }}>
                    <span className="label">{stat.label}</span>
                    <span className="percentage">{stat.percentage}</span>
                </li>
            ))}
        </ul>
    </section>
);

function getRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, 0);
    return "#" + randomColor;
}