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
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            flexBasis: '47%'
          },
          ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            flexBasis: '100%'
          }
    },

})

export default function FlexBox(props){
    const {cols, projects} = props;
    const classes = useStyles();
    const [thumbnail, setThumbnail] = useState([]);

    useEffect(() => {
        console.log(props);
    }, [])

    return (
        <div className={classes.flexContainer}>
            {projects.map((m) => <div className={classes.flexCols}>{m}</div>)}
        </div>
        
    );
}