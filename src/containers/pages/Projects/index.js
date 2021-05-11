import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Emoji from '../../../components/Emoji';
import Glowing from '../../../components/Animation/Glowing'
import ProjectPreview from '../../../components/ProjectPreview';

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
        gridTemplateColumns: 'auto auto auto',
    }
});

const sampleProjects = [{'title': 'Spiderman', 'description': 'Great power comes with great responsibility', 'srcPreview':'https://images-na.ssl-images-amazon.com/images/I/91bBsCoK0rL._SL1500_.jpg'}, 
                        {'title': 'Ironman', 'description': 'The truth is, I am ironman', 'srcPreview':'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg'}, 
                        {'title': 'Captain America', 'description': 'I can do this all day', 'srcPreview':'https://cdn.shopify.com/s/files/1/0747/3829/products/mL1192_1024x1024.jpg?v=1571445343'}]

export default function Projects(){

    const classes = useStyles();

    return (
        <div className={classes.projectContainer}> 
        <Glowing><p className={classes.projectHeader}>Featured works <Emoji label="star"/></p></Glowing>
       

        <div className={classes.projectPreviews}>
            <ProjectPreview project = {sampleProjects[0]}/>
        </div>
        

    </div>
    );
}