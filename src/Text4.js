import React from 'react';
import { useState } from 'react';

function Text4()
{
    const[myvar,setMyVar]=React.useState("Aruna");
    const clickHandler=()=>
    {
        setMyVar("Samarasinghe");
    };

    
    return(

        <div>
            <p> {myvar}</p>
            <button onClick={clickHandler}>Click 1</button>
        </div>
    )
}
export default Text4
