import React from 'react';
import {useSpring, animated} from 'react-spring';

export default function Glowing(props){

    const styles = useSpring({
        loop: true,
        to: [
            { opacity: 1, color: '#ffaaee' },
            { opacity: 0, color: 'black' },
          ],
        from: { opacity: 0, color: 'red' },
        config: { duration: 1200 },
        
      })
    
      return <animated.div
          style={{
            ...styles,
          }}
        > {props.children} </animated.div>
}