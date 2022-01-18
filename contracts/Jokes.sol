// SPDX-License-Identifier: UNLISENCED
pragma solidity >=0.4.22 <0.9.0;

contract Jokes {
    uint public jokesCount = 0;

    struct Joke {
        uint id;
        string joke;
        string punchline;
    }

    mapping(uint => Joke) public jokes;

    constructor() public {
        setJoke("cool", "beans");
    }

    function setJoke(string memory joke, string memory punchline) public {
        jokesCount++;
        jokes[jokesCount] = Joke(jokesCount, joke, punchline);
    }
}