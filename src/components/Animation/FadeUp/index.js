import React from 'react';
import AOS from 'aos';



export default function FadeUp(props){
    AOS.init();
    return(
        <div data-aos="fade-up" data-aos-duration="1000">
            {props.children}
        </div>
    )
}