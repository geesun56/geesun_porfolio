import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Button from '../../../components/Button';
import FadeIn from '../../../components/Animation/FadeIn';
import resume from '../../../resources/resume.pdf';
import {Document} from 'react-pdf';

const useStyles = makeStyles({
    'container' : {
        width: 'calc(100%-40px)',
        padding:'20px 20px',
        height:'auto',
        margin: '80px 0',
        textAlign:'center'
    },
    'temp':{
        width: '70%',
        height: 'auto',
        ['@media (max-width:800px)']: { // eslint-disable-line no-useless-computed-key
            width:'90%',
          },
    }
});

export default function Articles(){
    const classes = useStyles();

    return (<FadeIn>
            <div className={classes.container}>
               <img className={classes.temp} src="https://images.unsplash.com/photo-1585166169032-551d4ea843fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/>
           
    </div>
        </FadeIn>)
}