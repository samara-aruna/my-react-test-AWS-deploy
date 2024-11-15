import React from 'react';
import myImage from './images/one.jpg';

function Text2({name, Age, position,sex,image})
{
    return(

        <div>
            <img src={image}></img>
            <ul>
                <li> {name}</li>
                <li> {Age}</li>
                <li> {position}</li>
                <li> {sex} </li>
            </ul>

        </div>
    );
}

export default Text2