import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Button from '../../../components/Button/';

const useStyles = makeStyles({
    'Contact_container' : {
        width: 'calc(100%-40px)',
        padding:'50px 20px',
        height: '600px',
        margin: '130px 0'
    },

    'Contact_desc':{
        display: 'inline-block',
        width: 'calc(60% - 100px)',
        textAlign: 'left',
        paddingRight: '100px',
        verticalAlign: 'Top',
        paddingTop: '180px'
        
    },
    'Contact_form':{
        marginTop: '90px',
        display: 'inline-block',
        width: '40%',
        '& textarea': {
            width: '100%',
            padding: '12px 20px',
            margin: '10px 0 30px 0',
            display: 'inline-block',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box'
        },
        textAlign:'left',
        
    },
    
});

export default function Contact(){
    const classes = useStyles();

    return (<div className={classes.Contact_container}>
        <div className={classes.Contact_desc}>
            <h3 style={{fontSize:'24px'}}>Wanna know more?</h3>
            <div style={{fontSize: '19px', lineHeight: '30px'}}>What to know more about my design process? Have an exciting project that could use my help? Drop me a line and let's chat!</div>
        </div>
        <div className = {classes.Contact_form}>
                <form>
                    <label for="Name">Name</label>
                    <textarea id="Name" name="name" rows="1" placeholder="Your name"/>

                    <label for="Email">Email</label>
                    <textarea id="Email" name="email" rows="1" placeholder="Your Email"/>

                    <label for="Message">Message</label>
                    <textarea cols='20' rows='10' id="Message" name="message" placeholder="Your Message"/>
                </form>
        </div>
        <Button fontSize='17px' float='right' marginTop="20px">Send Me!</Button>
    </div>)
}