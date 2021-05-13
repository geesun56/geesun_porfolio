import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Emoji from '../../../components/Emoji';
import Glowing from '../../../components/Animation/Glowing'
import ProjectPreview from '../../../components/ProjectPreview';
import FlexBox from '../../../components/FlexBox';
import Bounce from 'react-reveal/Bounce';
import FadeUp from '../../../components/Animation/FadeUp';


const useStyles = makeStyles({
    'projectContainer':{
        marginTop: '27px',
        padding: '20px',
        textAlign: 'left',
        marginTop: '40px'
    },
    'projectHeader':{
        fontFamily: "'Raleway', serif",
        fontSize: '45px',
        fontWeight: 'bold',
        
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

const sampleProjects = [{'title': 'Spiderman', 'description': 'Great power comes with great responsibility', 'srcPreview':'https://images-na.ssl-images-amazon.com/images/I/91bBsCoK0rL._SL1500_.jpg'}, 
                        {'title': 'Unsplash', 'description': 'Loren Ipsum test project', 'srcPreview':'https://images.unsplash.com/photo-1620709450523-786e53f0a073?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
                        {'title': 'Ironman', 'description': 'The truth is, I am ironman', 'srcPreview':'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg'}, 
                        {'title': 'Captain America', 'description': 'I can do this all day', 'srcPreview':'https://cdn.shopify.com/s/files/1/0747/3829/products/mL1192_1024x1024.jpg?v=1571445343'},
                        {'title':'Dummy Project', 'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 'srcPreview': 'https://images.unsplash.com/photo-1620688904168-f044f3119daa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'},
                        {'title':'Dummy Project', 'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 'srcPreview': 'https://images.unsplash.com/photo-1620680334350-eb7ba9afd018?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
                        {'title':'Dummy Project', 'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 'srcPreview': 'https://images.unsplash.com/photo-1620747899017-b2229e9d9c9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80'},
                        {'title':'Dummy Project', 'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 'srcPreview': 'https://images.unsplash.com/photo-1620694882401-c1aded43fa02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80'},
                        {'title':'Dummy Project', 'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 'srcPreview': 'https://images.unsplash.com/photo-1620736214173-0544d50a8c86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'},
                        {'title':'Dummy Project', 'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 'srcPreview': 'https://images.unsplash.com/photo-1612392062798-4117917fcc50?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}]

const cols = 3;
const projects = new Array(cols).fill(null).map(()=>new Array(1));

sampleProjects.forEach((pr, index) => {
    console.log(projects)
    projects[index%cols].push(<FadeUp><ProjectPreview project = {pr}/></FadeUp>   )
})


export default function Projects(){

    const classes = useStyles();
    
    
    return (
        <div className={classes.projectContainer}> 
        <Glowing><p className={classes.projectHeader}>Featured works <Emoji label="star"/></p></Glowing>

        <FlexBox projects = {projects} />
    </div>
    );
}