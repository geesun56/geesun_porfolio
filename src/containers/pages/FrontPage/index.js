import React from 'react';
import {makeStyles} from '@material-ui/styles';
import FrontResource from '../../../resources/introduction.json';
import Button from '../../../components/Button/';
import {AiFillDownCircle} from 'react-icons/ai';
import Emoji from '../../../components/Emoji';
import Shaker from '../../../components/Animation/Shaker';

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
        paddingTop: '20px'
    },
    'frontContainer': {
        marginTop: "110px",
        padding: '20px',
        width: 'calc(100%-40px)',
        height: 'auto'
    },
    'scroll':{
        margin: '310px 0 0 0',
        display: 'inline-block',
        width: '100%'
    },
    'title1':{
        fontSize: '60px', 
        margin: '0',
        fontFamily: "'Bungee Shade', serif"
    },
    
})


export default function FrontPage(){
    const classes = useStyles();

    return (
        <div className={classes.frontContainer}>
            <div className={classes.textWrapper}>
                <p className={classes.title1}>HELLO THERE, <Shaker><Emoji label="shaka"/></Shaker></p>
                <p className={classes.title1} style={{margin:'30px 0'}}>I'M AN ENTHUSIASTIC</p>
                <p className={classes.title1}>SOFTWARE ENGINEER <Emoji label="laptopboy"/></p>
                {/* <Button fontSize='18px' float='right' marginTop="20px" marginRight="50px">Get in touch</Button> */}
            </div>

        </div>
    );
}