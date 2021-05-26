import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    'flexContainer':{
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        
        
    },

    'flexCols':{
        flexBasis: '30.1%',
        ['@media (max-width:1200px)']: { 
            flexBasis: '47%'
          },
          ['@media (max-width:764px)']: {
            flexBasis: '100%'
          }
    },

})

export default function FlexBox(props){
    const {cols, projects} = props;
    const classes = useStyles();
    const [thumbnail, setThumbnail] = useState([]);

    useEffect(() => {
        console.log(projects);
    }, [])

    return (
        <div className={classes.flexContainer}>
            {projects.map((m) => <div className={classes.flexCols}>{m}</div>)}
        </div>
        
    );
}