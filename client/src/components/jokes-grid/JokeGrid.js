import React from 'react';
import "./styles.css"

import JokeBox from '../joke-box/JokeBox';

export default function JokeGrid() {
  return (
    <div className="body-container">
        <div className="jokes-grid">
            <JokeBox />
            <JokeBox />
        </div>
    </div>
  );
}
