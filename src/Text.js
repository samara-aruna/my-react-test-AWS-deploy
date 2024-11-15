import React from 'react';

// const name="Aruna Samarasinghe";
// const Age = 25;
// const position  =  "Frontend Developer";

// const myobj = {
//     name:"Aruna",
//     Age: 25,
//     position: "Frontend Developer",
//     sex: "Female"
// }

// const {sex} = myobj;
function Text({props,name, Age, position})
{
    return(
        <>
        <div>
            <p> Pakaya</p>
        </div>
        <p> Fuck</p>
        {/* {props.children} */}
        <ul>
            <li>{name}</li>
            <li>{Age}</li>
            <li> {position}</li>
        </ul>
        <br/>
        {/* <ol>
            <li> {myobj.name}</li>
            <li> {myobj.Age}</li>
            <li> {myobj.position}</li>
        </ol> */}



        {/* {sex} */}
        </>

    );
}

export default Text;