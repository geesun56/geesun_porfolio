import React from 'react';
import Reveal from 'react-reveal/Reveal';

export default function FadeIn(props){
   
    return(
        <Reveal>{props.children}</Reveal>
    )
}