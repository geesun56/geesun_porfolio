import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    'flexContainer':{
        display: 'flex',
        justifyContent: 'space-between',
        
    },

    'flexCols':{
        flexBasis: '30.1%'
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