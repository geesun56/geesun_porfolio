import React from 'react';

const emojiDict = (label) => {
    if(label == 'shaka') return '🤙';
    if(label == 'laptopboy') return '🧑🏻‍💻';
    if(label == 'star') return '🌟';
}

const Emoji = (props) => {

    
    return( <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {emojiDict(props.label)}
    </span>)
    
};
export default Emoji;