import React from 'react';
import {makeStyles} from '@material-ui/styles';
import aboutData from '../../../resources/aboutData.json';
import Skills from './Skills';
import FadeIn from '../../../components/Animation/FadeIn';
import AboutContact from './About_Contact';

const useStyles = makeStyles({
    'aboutContainer':{
        marginTop: '27px',
        padding: '20px',
        textAlign: 'center',
        

    },
    'aboutText': {
    fontSize: '18px',
    textAlign: 'left',
    lineHeight: '1.5',
    fontFamily: "'Space Grotesk', serif",
    fontWeight: '500',
    color: '#666'
    },
    'titles':{
        textAlign: 'left',
        padding: '0',
        margin: '0',
        fontFamily: "'Space Grotesk', serif",
        fontWeight: '600'
    },
    'aboutDiv':{
        marginTop: '100px',
        display:'flex',
        justifyContent: 'space-between',
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            flexDirection: 'column',
            alignItems: 'center',
            marginTop:'40px'
          }
    },
    'aboutImg':{
        flexBasis: '40%',
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            
          }
    },
    'aboutContent':{
        flexBasis: '53%'
    }
})

export default function About() {
    const classes = useStyles();

    return(<FadeIn>

    <div className={classes.aboutContainer}>
        <div className={classes.aboutDiv}> 
            <div className={classes.aboutImg}><img style={{width:'100%', height:'auto'}} src="https://i.imgur.com/4SdB78W.gif" /></div>
            
            <div className={classes.aboutContent}>
                <h2 style={{marginTop: '30px'}} className={classes.titles}>About Me</h2>
                <p className={classes.aboutText}>{aboutData.about}</p>
                <h2 style={{marginTop: '40px'}} className={classes.titles}>Experience</h2>
                <p className={classes.aboutText}>{aboutData.experience}</p>
            </div>
           
        </div>
       
        <Skills />
        <AboutContact/>
    </div>
    </FadeIn>)
}