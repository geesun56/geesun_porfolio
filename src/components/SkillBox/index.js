import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import skills from '../../resources/skills.json';
import SkillCard from '../SkillCard'
import clsx from 'clsx';

const useStyles = makeStyles({
    'skillBox':{
        width: '100%',
        height: '250px',
    },
    'skillMenus':{
        textAlign: 'left',
        height: '20%',
        display: 'block'
    },
    'skillMenu':{
        display: 'inline-block',
        textAlign:'center',
        height:'70%',
        paddingTop:'15px',
        backgroundColor: '#76D7FA',
        margin:'0',
        width: '15%'
    },
    'skillContent': {
        display: 'grid',
        gridTemplateColumns:'auto auto auto auto auto',
        backgroundColor:'#A4E4FF',
        textAlign: 'center'
    },
    'highlight':{
        backgroundColor: '#A4E4FF'
    }
    
});



export default function SkillBox(){
    const classes = useStyles();
    const menus = Object.keys(skills);
    const [menu, setMenu] = useState('Languages');

    useEffect(() => {
        console.log(menu, menus[menu]);
    }, [menu]);


    return(<div className={classes.skillBox}>
        <div className={classes.skillMenus}>
            {menus.map((m, index)=> <p onClick={()=> setMenu(menus[index])} className={clsx({[classes.skillMenu] : true, [classes.highlight] : menu == m })}>{m}</p>)}      
        </div>
        <div className={classes.skillContent}>
            {skills[menu].map((m) => <SkillCard skill={m}/>)}
        </div>
       
    </div>)
}