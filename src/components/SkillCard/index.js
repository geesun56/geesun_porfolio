import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { SiCsharp, SiCss3, SiDotNet, SiHtml5, SiJavascript, SiPython, SiPytorch, SiRaspberrypi, SiReact, SiVisualstudiocode } from 'react-icons/si';
import { AiFillChrome, AiOutlineGithub } from 'react-icons/ai';

const useStyles = makeStyles({
    skillCard:{
        textAlign: 'center',
        width: '10vw',
        padding:'10px',
        margin:'20px 0 20px 2vw',
        textAlign: 'center',
        backgroundColor:'white',
        '& svg':{
            width: '10vw',
            height: '10vw'
        }
    }
})
function iconBuilder(name){
    switch(name){
        case "JavaScript" :
            return <SiJavascript/>
        case "HTML" :
            return <SiHtml5/>
        case "CSS" :
            return <SiCss3/>
        case "Python" :
            return <SiPython/>
        case "C#" :
            return <SiCsharp/>
        case "React" :
            return <SiReact/>
        case ".NET Core" :
            return <SiDotNet/>
        case "Pytorch":
            return <SiPytorch/>
        case "Git/Github":
            return <AiOutlineGithub/>
        case "Chrome Dev Tool" :
            return <AiFillChrome/>
        case "Visual Studio Code" :
            return <SiVisualstudiocode/>
        case "RaspberryPi" :
            return <SiRaspberrypi/>
        default:
            return <p>Not found</p>
    }
}

export default function SkillCard(props){
    const {skill} = props;
    const classes = useStyles();


    return(<div className={classes.skillCard}>
        {iconBuilder(skill)}
        <p style={{margin: '10px 0 0 0'}}>{skill}</p>
    </div>);
}