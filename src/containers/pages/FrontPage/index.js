import React from 'react';
import {makeStyles} from '@material-ui/styles';
import FrontResource from '../../../resources/introduction.json';
import Button from '../../../components/Button/';
import {AiFillDownCircle} from 'react-icons/ai';

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
        float: 'right',
        width: '65%',
        textAlign: 'left',
        paddingTop: '20px'
    },
    'frontContainer': {
        marginTop: "130px",
        padding: '20px',
        width: 'calc(100%-40px)',
        height: 'auto'
    },
    'scroll':{
        margin: '310px 0 0 0',
        display: 'inline-block',
        width: '100%'
    }
})


export default function FrontPage(){
    const classes = useStyles();

    return (
        <div className={classes.frontContainer}>
            <img className={classes.portrait} src={FrontResource.image}/>
            <div className={classes.textWrapper}>
                <h1>{FrontResource.title}</h1>
                <div className={classes.textBlock}>{FrontResource.content}</div>
                <Button fontSize='18px' float='right' marginTop="20px" marginRight="50px">Get in touch</Button>
            </div>

            <p className={classes.scroll}>Scroll down <AiFillDownCircle/></p>
        </div>
    );
}