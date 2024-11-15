import React, {useState} from 'react';

function Text8()
{
    const[num1,setNum1] = useState();
    const[num2,setNum2] = useState();
    const[result,setResult] = useState("");
    const[result2,setResult2] = useState("");

    function HandleStubstraction()
    {
        setResult(parseFloat(num1) - parseFloat(num2));

       if(parseFloat(num1) - parseFloat(num2) === 0)
       {
        setResult2("The two numbers are equal");
       }
       else
       {
        setResult2(" The two numbers are not equal");
       }

       setNum1("");
       setNum2("");
    }

    return(

        <div>
            <input type="number" value={num1} onChange={(ele)=> setNum1(ele.target.value)}/> <br/><br/>
            <input type="number" value={num2} onChange={(ele=> setNum2(ele.target.value))}/> <br/><br/>
        
            <button onClick={HandleStubstraction}>Get Substraction </button>


            <h2> Result:{result} </h2>
            <h2> Result2:{result2}</h2>
        </div>
   
    );
}

export default Text8