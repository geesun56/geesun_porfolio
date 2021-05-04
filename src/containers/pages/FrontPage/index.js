import React from 'react';
import {makeStyles} from '@material-ui/styles';
import FrontResource from '../../../resources/greetings.json';
import Button from '../../../components/Button/';

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
        margin: "130px 0",
        padding: '20px',
        width: 'calc(100%-40px)',
        height: '352px'
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
        </div>
    );
}