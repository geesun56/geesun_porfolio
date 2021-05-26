import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import Emoji from '../../../components/Emoji';
import Glowing from '../../../components/Animation/Glowing'
import ProjectPreview from '../../../components/ProjectPreview';
import FlexBox from '../../../components/FlexBox';
import Bounce from 'react-reveal/Bounce';
import FadeUp from '../../../components/Animation/FadeUp';


const useStyles = makeStyles({
    'projectContainer':{
        
        padding: '20px',
        textAlign: 'left',
        marginTop: '40px',
        ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
            
            marginTop:'0px'
          }
    },
    'projectHeader':{
        fontFamily: "'Raleway', serif",
        fontSize: '45px',
        fontWeight: 'bold',
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '40px',
            marginLeft: '20px'
          },
          ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '30px',
            marginLeft: '0'
          }
    },
    'projectPreviews': {
        display: 'grid',
        gridColumnGap: '40px',
        gridAutoRows: 'fit-content',
        gridTemplateColumns: '1fr 1fr 1fr'
        
    },
    'projectCard':{
        
    }
});



    let cols = window.innerWidth > 1200? 3 : (window.innerWidth > 763? 2 : 1 );
    


export default function Projects(props){

    const classes = useStyles();
    const [projectArray, setProjectArray] = useState([]);
    

    const initProjects = (proj) => {
        proj.sort((a,b) => a.Order - b.Order)
        const projects = new Array(cols).fill(null).map(()=>new Array(1));
        proj.forEach((pr, index) => {
            
            console.log(pr)
            projects[index%cols].push(<FadeUp><ProjectPreview project = {pr}/></FadeUp>   )
        })

        setProjectArray(projects)
    }

    useEffect(() => {
        initProjects(props.projectlist);
        

    },[props])
    
    return (
        <div className={classes.projectContainer}> 
        <Glowing><p className={classes.projectHeader}>Featured works <Emoji label="star"/></p></Glowing>

        <FlexBox projects = {projectArray} />
    </div>
    );
}