import React , {useState} from 'react'; 

function Text7()
{
    const[num1,setNum1] = useState(0);
    const[num2,setNum2] = useState(0);
    const[result,setResult] = useState(0);
    const[result2,setResult2] = useState(0);

    function HandleDivides()
    {
        setResult(parseFloat(num1)/parseFloat(num2));
        
            if (parseFloat(num1) == 1)
            {
                setResult(0);
            }
            else
            {
                setResult2(2);
            }
    }

    

    return(

        <div>
            <input type="number" value={num1} onChange={(ele)=> setNum1(ele.target.value)}/> <br/><br/>
            <input type="number" value={num2} onChange={(ele)=> setNum2(ele.target.value)}/> <br/><br/>

            <button onClick={HandleDivides}> Get Divition </button>

            <br/>

            <h2> Result: {result} </h2>

            <h2> Result2: {result2} </h2>
        </div>

    );
}
export default Text7