import React, {useState} from 'react';

function Text6()
{
    const[num1,setNum1] = useState(0);
    const[num2,setNum2] = useState(0);
    const[result,setResult] = useState(0);

    function HandleAdd()
    {
        setResult(parseFloat(num1)*parseFloat(num2));
    }

    return(

        <div className="multy">
            <input type="number" value={num1} onChange={(ele)=> setNum1(ele.target.value)}/><br/><br/>
            <input type="number" value={num2} onChange={(ele)=> setNum2(ele.target.value)}/>
                <br/><br/>
            <button onClick={HandleAdd}>Get Multiplication </button>

            <h2> Result: {result} </h2>
        </div>

    );
}

export default Text6