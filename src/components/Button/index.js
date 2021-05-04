import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    
    'btnStyle':{
    padding:'3px 80px', 
    width: 'auto', 
    minHeight: '50px', 
    border: 'none',
    backgroundColor: '#0180FF',
    color: 'white',
    borderRadius:'12px'
}
})

export default function Button(props){
    const {fontSize, float, marginRight, marginTop} = props
    const classes = useStyles();

    return(
        <button className = {classes.btnStyle} style={{fontSize: fontSize, float: float, marginRight: marginRight, marginTop: marginTop}}>{props.children}</button>
    )
}