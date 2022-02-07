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
        setJoke("What's the best thing about Switzerland?", "I don't know, but the flag is a big plus.");
        setJoke("I invented a new word!", "Plagiarism!");
        setJoke("", "In my neighborhood, there was a couple who had given their twin sons very weird names. One was named Trouble, while the other boy's name was Mind Your Own Business. So, one day they were playing hide and seek. Mind Your Business counted to a hundred and then started looking for his brother. But, somehow he couldn't find him anywhere. He saw a police car passing the neighborhood, so he stopped it to ask for help. When the police officer asked him for his name, he replied, 'Mind Your Own Business!' Feeling insulted, the police officer still asked politely who he was looking for. Mind Your Own Business replied, 'I am looking for Trouble!'");
        setJoke("Did you hear about the claustrophobic astronaut?", "He just needed a little space.");
        setJoke("Why did the yogurt go to the art exhibition?", "Because it was cultured.");
        setJoke("What do you call an apology written in dots and dashes?", "Re-Morse code.");
        setJoke("Why did the hipster burn his mouth?", "He drank the coffee before it was cool.");
        setJoke("", " I was in a barbershop when a man and his young son walked in to get a haircut. The man asked the barber to give his son a haircut while he shopped for groceries nearby. The barber finished giving the haircut but there was no sign of the father. An hour passed, two hours passed. We finally asked the son where his father was. The boy shocked us by saying, 'That man was not my father. He just told me that if I wanted to get a free haircut at the barbershop, I should come with him.'");
        setJoke("What do you get from a pampered cow?", "Spoiled milk.");
        setJoke("What breed of dog can jump higher than buildings?", "Any dog, because buildings can't jump.");
        setJoke("", "As a group of robbers entered the bank, their leader went to the manager and asked him to open the vault. He threatened the manager by saying, 'If you try to do anything smart, you're fiction.' The manager was confused and asked him, 'Don't you mean 'You are history'?' The robber angrily replied back, 'Do not change the subject, okay?'");
    }

    function setJoke(string memory joke, string memory punchline) public {
        jokesCount++;
        jokes[jokesCount] = Joke(jokesCount, joke, punchline);
    }
}