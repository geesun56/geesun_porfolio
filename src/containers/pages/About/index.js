import React from 'react';
import {makeStyles} from '@material-ui/styles';
import aboutResource from '../../../resources/introduction.json';
import SkillBox from '../../../components/SkillBox';
import SkillTable from '../../../components/SkillTable';

const useStyles = makeStyles({
    'aboutContainer':{
        marginTop: '27px',
        padding: '20px',
        textAlign: 'left'

    },
    'aboutText': {
    fontSize: '20px',
    textAlign: 'left',
    lineHeight: '2'
    },
    'titles':{
        textAlign: 'left',
        marginBottom: '50px',
        color: '#0180FF'
    },
    'aboutDiv':{
        marginBottom: '100px'
    },
    'skillTable':{
        '& th': {
            fontSize: '18px',
            padding:'0 50px 20px 0',
            textAlign: 'left'
        },
        '& td':{

            padding:'10px 50px 0 0',
            textAlign: 'left'
        },

    }
})

export default function About() {
    const classes = useStyles();

    return(<div className={classes.aboutContainer}>
        <div className={classes.aboutDiv}> 
            <h2 className={classes.titles}>About Me</h2>
            <p className={classes.aboutText}>
                {aboutResource.about}
            </p>
        </div>
       <div>
        <h2 className={classes.titles}>Skills</h2>
           <SkillTable/>
        
        <h2 className={classes.titles}>Experience</h2>
            <p> Deloitte</p>
            <p> Penn State</p>
            <p> View Resume</p>
       </div>
    </div>)
}