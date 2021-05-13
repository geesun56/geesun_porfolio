import React from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
    'MenuTabs': {
        display:'inline-block',
        listStyle: 'none',
        margin: '0 0%',
        width: 'auto',
        '& li':{
            display: 'inline-block',
            minHeight: '30px',
            fontSize: '20px',
            cursor:'pointer',
            padding: '20px 15px',
            fontFamily: "'Quicksand', serif",
            color: 'rgba(0,0,0,0.5)',
            '&:hover':{
                color: 'rgba(0,0,0,1) !important',
            },
        }
    },
    'active' :{
        fontWeight: '600',
        color: 'rgba(0,0,0,1) !important'
    },
    'normal':{
        
    },
    
})
const NavItems = ['Email', 'Linkedin', 'Github','Resume'];

export default function Navigation(props){
    const classes  = useStyles();
    const{menu, setMenu} = props;

    return (<div style={{margin: "20px 0", overflow:'hidden'}}>
        <ul className={classes.MenuTabs}>
            {NavItems.map((m)=><li className={clsx({[classes.active] : menu == m })} >{m}</li>)}
        </ul>
    </div>)
}