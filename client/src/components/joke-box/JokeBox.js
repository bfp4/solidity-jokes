import React from 'react';
import "./styles.css"

const fontFamilies = ["Playfair Display", "Rubik Beastly", "Mochiy Pop P One", "Luxurious Roman"]

export default function JokeBox() {
    const font = `'${fontFamilies[Math.floor(Math.random() * 4)]}', sans-serif`

    return (
        <div className="joke-box" >
            <div className="line-container">
                <h2 className="line" style={{fontFamily: font}}>Why is booty?Lorem Ipsum is simply dummy text of the printing </h2>
            </div>
            <div className="punchline-container">
                <p className="punchiline" style={{fontFamily: font}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    );
}
