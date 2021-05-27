import React, { useEffect } from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    'projectCard':{
        width: '100%',
        fontFamily: "'Space Grotesk', serif",
        marginBottom:'64px'
    },
    'thumbnail': {
        width: '100%', 
        margin: '0',
        padding:'0',
        transition: 'transform .2s',
        display: 'block',
        overflow: 'hidden',
        lineHeight: 0,
        '&:hover': {
            transform: 'scale(1.1) rotate(-3deg)',
            boxShadow: '5px 5px 15px rgba(180,183,188,0.6)',
            
         }
    },
    'title':{
        fontSize: '22px',
        fontWeight: '600',
        margin: '16px 0 8px 0'
    },
    'desc':{
        fontSize: '16px',
        fontWeight: '500',
        lineWeight: '160%',
        margin: '0',
        color: '#666'
        
    }
});

export default function ProjectPreview(props) {
    const classes = useStyles();
    const {project} = props;

    return(<div className={classes.projectCard}>
        <div className={classes.thumbnail}>
            <img style={{width: '100%', height: '100%'}} src={project.Thumbnail} alt={project.Title}/>
        </div>
        
            <p className={classes.title}>{project.Title}</p>
            <p className={classes.desc}> {project.Description}</p>
        
    </div>)
}