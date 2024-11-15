import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Text10()
{
    const[num1,setNum1] = useState(0);
    const[result,setResult] = useState(0);
    
    function getanswer()
    {
        if(num1 > 10)
        {
            setResult("Greater than 10");
        }
        else
        {
            setResult("Less than 10");
        }
    }

    return(
        <div>
            <h1><Link to="home">This is my second Link testing</Link></h1>

            <input type="number" value={num1} onChange={(ele)=> setNum1(ele.target.value)}/><br/><br/>

            <button onClick={getanswer}>Get Result</button><br/><br/>
            <h1>{result}</h1>
        </div>



    );


}
export default Text10