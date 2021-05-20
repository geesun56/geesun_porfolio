import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Aux from '../Auxiliary';

const useStyles = makeStyles({
    
    'btnStyle':{
    textDecoration:'none',
    padding:'20px 60px', 
    width: 'auto', 
    minHeight: '50px', 
    border: 'none',
    backgroundColor: '#66E3C0',
    color: '#fff',
    fontWeight:'600',
    fontFamily:"'Chau Philomene One','serif'",
    
    position: "relative",
    top: 0,
    left: 0,
    transition: "all 200ms ease",
    
    "&:hover": {
        top: "10px",
        left: "-10px"
      },
    
},
"btnShade":{
    top: "0px",
    left: "38%",
    right: "0px",
    width: "229px",
    bottom: "0px",
    height: "72px",
    position: "absolute",
    backgroundColor: "#002e4d",
    ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
        display:'none',
      }
},
btnWrapper:{
    position: 'relative',
}
})

export default function Button(props){
    const {fontSize, float, marginRight, marginTop} = props
    const classes = useStyles();

    return(
        <div className={classes.btnWrapper}>
            <div className={classes.btnShade}></div>
            <a href="mailto:geesun.apply@gmail.com" className = {classes.btnStyle} style={{fontSize: fontSize, float: float, marginRight: marginRight, marginTop: marginTop}}>{props.children}</a>
        </div>
        
    )
}