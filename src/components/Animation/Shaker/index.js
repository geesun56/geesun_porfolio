import React from 'react';
import {useSpring, animated, useRef} from 'react-spring';

export default function Shaker(props){
    const styles = useSpring({
        loop: {reverse: true},
        from: { rotateZ: -30 },
        to: { rotateZ: 30 },
        config: { duration: 500 },
        
      })
    
      return <animated.div
          style={{
            width: '50px',
            marginLeft: '10px',
            display: 'inline-block',
            ...styles,
          }}
        > {props.children} </animated.div>
      

}