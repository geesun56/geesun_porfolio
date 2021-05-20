import React from 'react';
import skillData from '../../../resources/skillData.json';
import TechStack from './TechStack';
import {makeStyles} from '@material-ui/styles';


const useStyles = makeStyles({
    container:{
        margin:'160px 0 110px 0',
        fontFamily: "'Space Grotesk', serif",
        fontWeight: '500',
        padding:'20px'
        
    },
    skillList:{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5% 10%',
        ['@media (max-width:800px)']: { // eslint-disable-line no-useless-computed-key
            flexDirection: 'column',
          }
    },
    skillContainer:{
        width: '100%',
        marginRight: 0,
        display: 'flex',
        flexDirection: 'column',
        
    }
});

const skillItems = skillData.items;




export default function Skills(){
    const classes = useStyles();
    const itemCount = 2;
    const tempArr = Array(itemCount).fill();

    return(
        <div className={classes.container}>
            <h2 style={{marginBottom: '40px','textAlign':'left'}}>I can help you with</h2>
                <div className={classes.skillContainer}>
                {
                    tempArr.map((m, i) => <div className={classes.skillList}>{skillItems.map((item, index) => {if(index<itemCount*(i+1) && index>=itemCount*i) return <TechStack icon = {item.icon} skill={item.skill} desc = {item.desc} stacks={item.stack}/>})}</div> )
                }
                </div>
                
            
        </div>
    )

}