import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Button from '../../../components/Button/';
import {AiFillDownCircle} from 'react-icons/ai';
import Emoji from '../../../components/Emoji';
import Shaker from '../../../components/Animation/Shaker';
import FadeIn from '../../../components/Animation/FadeIn';
import Projects from '../Projects';

const useStyles = makeStyles({
    'portrait': {
        width: '352px',
        height: '352px',
        objectFit: 'cover',
        objectPosition: '100% 0',
        borderRadius: '50%',
        float: 'left'
    },
    'textBlock': {
        fontSize: '22px',
        padding: '15px 0',
        paddingRight: '50px',
        lineHeight:'1.6'
    } ,
    'textWrapper':{
        width: '100%',
        textAlign: 'left',
        paddingTop: '20px',
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            textAlign: 'center',
            paddingTop: '0',
            
          }
    },
    'frontContainer': {
        marginTop: "110px",
        padding: '20px',
        width: 'calc(100%-40px)',
        height: 'auto',
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'50px',
          }
    },
    'scroll':{
        margin: '310px 0 0 0',
        display: 'inline-block',
        width: '100%'
    },
    'title1':{
        fontSize: '60px', 
        margin: '0',
        fontFamily: "'Bungee Shade', serif",
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '3em',
          },
          ['@media (max-width:763px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '2.1em',
          },
        ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '1.4em',
            
          }
    },
    
})


export default function FrontPage(){
    const classes = useStyles();

    return (
        <FadeIn>
            <div className={classes.frontContainer}>
            <div className={classes.textWrapper}>
                <p className={classes.title1}>HELLO THERE, <Shaker><Emoji label="shaka"/></Shaker></p>
                <p className={classes.title1} style={{margin:'30px 0'}}>I'M AN ENTHUSIASTIC</p>
                <p className={classes.title1}>SOFTWARE ENGINEER <Emoji label="laptopboy"/></p>
            </div>

        </div>
        <Projects/>
        </FadeIn>
        
    );
}