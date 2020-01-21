import React from "react";
import './index.css';

function Card(props) {
    return (
        <div className="card">
            <div className="content">
                <div className="left">{props.name}</div>
                <div className="right">{props.global_sea_diff}</div>
                <ul>
                    <li>
                        <strong>Price:</strong> {props.global.price}
                    </li>
                    <li>
                        {props.global.time}
                    </li>
                </ul>
            </div>
            <span onClick={() => props.removeFriend(props.id)} className="remove">𝘅</span>
        </div>
    );
}

export default Card;