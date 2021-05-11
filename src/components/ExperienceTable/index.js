import React from 'react';
import {makeStyles} from '@material-ui/styles';
import ex from '../../resources/experience.json';

const useStyles = makeStyles({

});

const exp = ex.experience;

export default function ExperinceTable(){

    const classes = useStyles();
    

        return(<div>
            <table >
               <tbody>

                {exp.map((row) => 
                <tr> <td>{row.jobtitle}</td>
                     <td>{row.company}</td>
                     <td>{row.description}</td>
                     <td>{row.duration}</td>
                      </tr>)}
                
               </tbody>
                
            </table>

        </div>);
}
