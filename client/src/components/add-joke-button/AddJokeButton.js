import React from 'react';
import "./styles.css";

export default function AddJokeButton(props) {
    return (
        <button className="add-button-container" onClick={() => props.setModal(true)}>
            <i className="fas fa-plus"></i>
        </button>
    );
}
