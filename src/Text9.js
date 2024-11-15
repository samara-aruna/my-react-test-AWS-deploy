import React ,{useState} from 'react';

function Text9()
{
    const[marks,setMarks] = useState("");
    const[result,setResult] = useState("");

    function HandleMarks()
    {
        if(marks >= 75)
        {
            setResult("A");
        }
        else if(marks => 65)
        {
            setResult("B");
        }
        else if(marks => 55)
        {
            setResult("C");
        } 
        else if(marks =>35)
        {
            setResult("D");
        }
        else
        {
            setResult("Fail");
        }

        setMarks("");
       

    
    }
    return(

        <div className="Grade">
            <h1> Grade Calculator</h1>
        <input type="number" value={marks} onChange={(ele)=> setMarks(ele.target.value)}/><br/><br/>
        <button onClick={HandleMarks}> Get Marks</button>

        <h2> Result: {result} </h2>
        </div>

    );
}
export default Text9