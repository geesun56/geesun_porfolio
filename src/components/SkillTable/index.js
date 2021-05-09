import React from 'react';

export default function SkillTable(){

    return(
        <table >
               <thead>
                    <tr>
                    <th>Language</th> 
                        <th>Framework</th> 
                        <th>Tools</th> 
                        <th>Etc</th> 
                        
                    </tr>
               </thead>
               <tbody>
               <tr>
                    <td>JavaScript</td> 
                   <td>React</td> 
                   <td>Git/Github</td> 
                   <td>RaspberryPi</td>
                </tr>
                <tr>
                    <td>HTML</td> 
                   <td>.NET Core</td> 
                   <td>Chrome DevTools</td> 
                </tr>
                <tr>
                    <td>CSS</td> 
                   <td>NodeJs</td> 
                   <td>Visual Studio Code</td> 
                </tr>
                <tr>
                    <td>Python</td>
                    <td>Pytorch</td>
                </tr>
                <tr>
                    <td>C</td>
                    
                </tr>
                <tr>
                    <td>
                        C#
                    </td>
                </tr>
               </tbody>
                
            </table>
    )
}