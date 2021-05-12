import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    'MenuTabs': {
        display:'inline-block',
        float: 'right',
        listStyle: 'none',
        margin: '0 0%',
        paddingLeft: '10%',
        width: '30%',
        '& li':{
            display: 'inline-block',
            minHeight: '30px',
            fontSize: '18px',
            padding: '20px 15px'
        }
    },
    'SnsTabs' : {
        display:'inline-block',
        listStyle: 'none',
        float: 'right',
        margin: '0 0',
        padding: '0',
        width: '20%',
        '& li':{
            fontSize: '1.8rem',
            display: 'inline-block',
            minHeight: '30px',
            padding: '20px 10px'
        }
    },
    'highlighted' :{
        fontWeight: 'bold'
    },
    'normal':{
        fontFamily: "'Quicksand', serif"
    }
    
    
})
const NavItems = ['Email', 'Linkedin', 'Github', 'Resume'];

export default function BottomPane(props){
    const classes  = useStyles();

    return (<div style={{paddingTop: "20px", overflow:'hidden'}}>
        <ul className={classes.MenuTabs}>
            {NavItems.map((m)=><li className={classes.normal}>{m}</li>)}
            
        </ul>
    </div>)
}