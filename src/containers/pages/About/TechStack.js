import React from 'react';
import {makeStyles} from '@material-ui/styles';
import frontEnd from '../../../resources/frontEnd.svg';
import backEnd from '../../../resources/backend.svg';
import embedded from '../../../resources/embedded.svg';
import deepLearning from '../../../resources/deeplearning.svg';


const useStyles = makeStyles({
    techContainer:{
        flexBasis: '45%', 
        ['@media (max-width:800px)']: { // eslint-disable-line no-useless-computed-key
            margin: '50px 0px'
          }
    },
    icons: {
        width:'25%',
    },
    iconContainer:{
        textAlign: 'center'
    },
    techStack: {
        marginTop: '20px',
        fontStyle: 'italic'
    }
});




export default function TechStack(props){

    const {icon, skill, desc, stacks} = props
    const classes = useStyles();

    function logo(name){
        switch(name){
            case "Frontend":
                return <img className = {classes.icons} src={frontEnd} alt={name}/>
            case "Backend":
                return <img className = {classes.icons} src={backEnd} alt={name}/>
            case "ML":
                return <img className = {classes.icons} src={deepLearning} alt={name}/>
            case "Embedded":
                return <img className = {classes.icons} src={embedded} alt={name}/>
            default:
                return null;
        }
    }

    return(
        <div className={classes.techContainer}>
            <div className={classes.iconContainer}>{logo(icon)}</div>
            <h2 style={{textAlign:'center'}}>{skill}</h2>
            <div style={{color: '#666', fontSize: '18px'}}>{desc}</div>
            <div className={classes.techStack}>Tech Stacks: {stacks.map((m,idx) => {if(idx != stacks.length-1) return m+', ' 
                                                                                    else return m })}</div>
        </div>
    )
}