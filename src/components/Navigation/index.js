import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { ImLinkedin, ImGithub, ImMail } from "react-icons/im";

const useStyles = makeStyles({
    'MenuTabs': {
        display:'inline-block',
        listStyle: 'none',
        margin: '0 0%',
        paddingLeft: '10%',
        width: '40%',
        '& li':{
            display: 'inline-block',
            minHeight: '30px',
            fontSize: '20px',
            padding: '20px 30px'
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
    }
    
    
})

export default function Navigation(props){
    const classes  = useStyles();
    const{menu, setMenu} = props;

    return (<div style={{paddingTop: "20px"}}>
        
        <img style={{width: 'auto',height: '70px', display: "inline-block", float: 'left'}} alt = "logo" src= "https://www.redhat.com/cms/managed-files/styles/xlarge/s3/red-hat-logo-a-sample.png?itok=PJP_urGJ"/>
        
        <ul className={classes.MenuTabs}>
            <li onClick={() => setMenu('About')}>About</li>
            <li onClick={() => setMenu('Projects')}>Projects</li>
            <li onClick={() => setMenu('Contact')}>Contact</li>
        </ul>

        <ul className={classes.SnsTabs}>
            <li><ImLinkedin/></li>
            <li><ImGithub/></li>
            <li><ImMail/></li>
        </ul>
    </div>)
}