import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import Button from '../../../components/Button/';
import {AiFillDownCircle} from 'react-icons/ai';
import Emoji from '../../../components/Emoji';
import Shaker from '../../../components/Animation/Shaker';
import FadeIn from '../../../components/Animation/FadeIn';
import Projects from '../Projects';

const useStyles = makeStyles({
    
   
    'textWrapper':{
        width: '100%',
        textAlign: 'left',
        paddingTop: '20px',
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            textAlign: 'center',
            paddingTop: '0',
            
          }
    },
    'frontContainer': {
        marginTop: "110px",
        padding: '20px',
        width: 'calc(100%-40px)',
        height: 'auto',
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'50px',
          }
    },
    
    'title1':{
        fontSize: '60px', 
        margin: '0',
        fontFamily: "'Bungee Shade', serif",
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '3em',
          },
          ['@media (max-width:763px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '2.1em',
          },
        ['@media (max-width:540px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '1.8em',
            
          },
          ['@media (max-width:470px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '1.5em',
            
          },
          ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '1.2em',
            
          }
    },
    
})

const axios = require('axios').default;
const url = 'https://geesun-portfolio-7c275-default-rtdb.firebaseio.com/Projects.json';

export default function FrontPage(props){
    const classes = useStyles();
    const [projects, setProjects] = useState(null);

    const getData = async () => {
        axios.get(url)
        .then((res) => {
          setProjects(Object.values(res.data))
        })
        .catch((err) => console.error(err));
      }
    
      useEffect(() => {
        getData();
      }, [])

    return (
        <FadeIn>
            <div className={classes.frontContainer}>
            <div className={classes.textWrapper}>
                <div className={classes.title1}>HELLO THERE, <Shaker><Emoji label="shaka"/></Shaker></div>
                <p className={classes.title1} style={{margin:'30px 0'}}>I'M AN ENTHUSIASTIC</p>
                <p className={classes.title1}> SOFTWARE ENGINEER <Emoji label="laptopboy"/></p>
            </div>

        </div>
        <Projects projectlist = {projects? projects: []}/>
        </FadeIn>
        
    );
}