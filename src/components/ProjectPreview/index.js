import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    'projectCard':{

    },
    'thumbnail': {
        width: '100%', height:'auto'
    }
});

export default function ProjectPreview(props) {
    const classes = useStyles();
    const {project} = props;

    return(<div className={classes.projectCard}>
        <div className={classes.thumbnail}>
            <img className={classes.thumbnail} src={project.srcPreview} alt={project.title}/>
        </div>
        <div className={classes.thumbnail}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    </div>)
}