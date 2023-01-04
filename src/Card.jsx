import React, { useState } from "react";
import './Card.css';

export default function Card (props) {
    const { image, suit, value } = props;

    return (
        <div className="card">
            <img src={image} alt={`${value} of ${suit}`} />
        </div>
    )
}



