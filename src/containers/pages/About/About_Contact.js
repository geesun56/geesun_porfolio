import React from 'react';
import {makeStyles} from '@material-ui/styles'
import Button from '../../../components/Button';

const useStyles = makeStyles({
    container: {
        margin:'200px 0',
        padding: '20px',
        fontFamily: "'Space Grotesk', serif",
        fontWeight: '500',
        textAlign: 'center',
        
    },
    title: {
        fontSize:'24px'
    },
    content:{
        padding: '0 calc(30%/2)',
        color:"#666",
        fontSize: '18px', lineHeight: '30px',
        marginBottom:'40px'
    },
    
})

export default function AboutContact(){
    
    const classes = useStyles();

    return(<div className={classes.container}>
            <h3 className={classes.title}>Do you Wanna know more?</h3>
            <div className={classes.content}>What to know more about my engineering process? Have an exciting project that could use my help? I’m always open to new projects and collaborations. Especially with you!</div>
            <Button fontSize="23px">Get in touch</Button>
    </div>)
}