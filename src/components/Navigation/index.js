import React from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import Jello from 'react-reveal/Jello';

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
            cursor:'pointer',
            fontSize: '18px',
            padding: '20px 15px',
            fontFamily: "'Quicksand', serif",
            color: 'rgba(0,0,0,0.5)',
            '&:hover':{
                color: 'rgba(0,0,0,1) !important',
            },
        },
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            '& li':{
                display: 'inline-block',
                minHeight: '30px',
                cursor:'pointer',
                fontSize: '18px',
                padding: '20px 20px',
                fontFamily: "'Quicksand', serif",
                color: 'rgba(0,0,0,0.5)',
                '&:hover':{
                    color: 'rgba(0,0,0,1) !important',
                },
            },
            width: '100%',
          }
    },
    'active' :{
        fontWeight: 'bold',
        color: 'rgba(0,0,0,1) !important'
    },
    'normal':{
        
    },
    'Banner':{
        marginTop: '11px', width: '230px',height: 'auto', display: "inline-block", float: 'left', marginLeft: '20px',
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            width: '230px',
            margin: '0',
          }
    },
    'Homelink':{
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            display: 'flex',
            margin: '20px 0',
            justifyContent: 'center'
          }
    }
    
    
})
const NavItems = ['Projects', 'About', 'Articles'];

export default function Navigation(props){
    const classes  = useStyles();
    const{menu, setMenu} = props;

    return (<div style={{paddingTop: "20px", overflow:'hidden'}}>
        
        <a className={classes.Homelink}href=""><img className={classes.Banner} src="https://fontmeme.com/permalink/210510/4540dabd95c65ea91fb9375e82f61074.png" alt="graffiti-geesun" border="0"/></a>
        <ul className={classes.MenuTabs}>
            {NavItems.map((m)=><li className={clsx({[classes.active] : menu == m })} onClick={() => setMenu(m)} ><Jello when={menu==m}>{m}</Jello></li>)}
            
        </ul>
    </div>)
}