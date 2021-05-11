import React from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';

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
const NavItems = ['Projects', 'About', 'Contact'];

export default function Navigation(props){
    const classes  = useStyles();
    const{menu, setMenu} = props;

    return (<div style={{paddingTop: "20px", overflow:'hidden'}}>
        
        <a href=""><img style={{marginTop: '11px', width: '20%',height: 'auto', display: "inline-block", float: 'left'}} src="https://fontmeme.com/permalink/210510/4540dabd95c65ea91fb9375e82f61074.png" alt="graffiti-geesun" border="0"/></a>
        <ul className={classes.MenuTabs}>
            {NavItems.map((m)=><li className={clsx({[classes.normal] : true, [classes.highlighted] : menu == m })} onClick={() => setMenu(m)} >{m}</li>)}
            
        </ul>
    </div>)
}