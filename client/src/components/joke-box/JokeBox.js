import React from 'react';
import "./styles.css"

const fontFamilies = ["Playfair Display", "Rubik Beastly", "Mochiy Pop P One", "Luxurious Roman"]

export default function JokeBox(props) {
    const { line, punchline } = props
    const font = `'${fontFamilies[Math.floor(Math.random() * 4)]}', sans-serif`

    return (
        <div className="joke-box" >
            <div className="line-container">
                <h2 className="line" style={{fontFamily: font}}>
                    {line}
                </h2>
            </div>
            <div className="punchline-container">
                <p className="punchiline" style={{fontFamily: font}}>
                    {punchline}
                </p>
            </div>
        </div>
    );
}
