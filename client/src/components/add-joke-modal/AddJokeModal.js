import React from 'react';
import "./styles.css"

export default function AddJokeModal(props) {
    function parentClick(){
        props.setModal(false)
    }

    function childClick(e){
        e.stopPropagation();
    }

    function handleSubmit(e){
        e.preventDefault()
        props.setModal(false)
    }

    return (
        <div className="backdrop" onClick={parentClick}>
            <form onSubmit={handleSubmit} onClick={childClick} className="modal-container">
                <input 
                    className="modal-line"
                    placeholder="Why did the chicken..."
                    name="line"
                />
                <textarea 
                    className="modal-punchline"
                    placeholder="Punchline..."
                    name="punchline"
                    rows="8"
                />
                <button type="submit" className="modal-button">Add Joke</button>
            </form>
        </div>
    );
}
