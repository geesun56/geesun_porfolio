import React from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import { AiFillHeart } from 'react-icons/ai';
import {SiReact} from 'react-icons/si'


const useStyles = makeStyles({
    'MenuTabs': {
        display:'inline-block',
        listStyle: 'none',
        margin: '0 0%',
        width: 'auto',
        padding:'0',
        marginBottom:'30px',

        ['@media (max-width:850px)']: { // eslint-disable-line no-useless-computed-key
            marginBottom:'0px'
          },
        ['@media (max-width:763px)']: { // eslint-disable-line no-useless-computed-key
            paddingLeft: '0'
          },
        '& li':{
            ['@media (max-width:763px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: '18px',
                marginLeft: '0',
              },
              ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: '15px',
                marginLeft: '0',
              },
            display: 'inline-block',
            minHeight: '20px',
            fontSize: '20px',
            cursor:'pointer',
            padding: '15px 15px',
            
            fontFamily: "'Quicksand', serif",
            color: 'rgba(0,0,0,0.5)',
            '&:hover':{
                color: 'rgba(0,0,0,1) !important',
            },
        }
    },
    'active' :{
        '&  a':{
            fontWeight: '600',
            color: 'rgba(0,0,0,1) !important'   
        }
        
    },
    'normal':{
        
    },
    'footerMsg':{
        marginTop:'17px',
        color: 'rgba(0,0,0,0.5)'
    },
    'footerWrapper':{
        display:'flex',
        margin: "20px 0", 
        overflow:'hidden',
        justifyContent:'space-between',
        
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            padding:'0 50px',
          },
          ['@media (max-width:850px)']: { // eslint-disable-line no-useless-computed-key
            flexDirection:'column',
            padding:'0'
          },
          
    },
    'Navs':{
        fontWeight: '600',
        color: 'rgba(0,0,0,0.5) !important',
        textDecoration:'none',
        '&:hover':{
            color: 'rgba(0,0,0,1) !important',
        },
        '&:visited':{
            color: 'inherit'
        }  
    }
    
})
const NavItems = [{item: 'Email', link:'mailto:geesun.apply@gmail.com'}, {item: 'Linkedin', link:'https://www.linkedin.com/in/geesun-jang-84087416a/'}, {item: 'Github', link: "https://github.com/geesun56"},{item: 'Resume', link:"https://drive.google.com/file/d/1_OrO-s7DF7vAvowbE-xdBpZOXiAkl082/view?usp=sharing"}];

export default function Navigation(props){
    const classes  = useStyles();
    const{menu, setMenu} = props;

    return (<div className={classes.footerWrapper}>
        <ul className={classes.MenuTabs}>
            {NavItems.map((m)=><li><a className={classes.Navs} href={m.link}>{m.item}</a></li>)}
        </ul>
        <p className={classes.footerMsg}>Designed with Love <AiFillHeart fill='red'/>, built with React <SiReact fill='#63DFFC'/></p>
    </div>)
}