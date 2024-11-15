import React from 'react';

function Text3({props,name, Age, position,sex,image})
{
    return(
        <>
        <div className="text3">
            <h1> This is Tetxt 3 page in this web site.</h1>
        </div>

        <div className="container-md">
            <div className="row">
                <div className="col-12">
                    <img src={image}/>
                    <ul>
                        <li> {name}</li>
                        <li> {Age} </li>
                        <li> {position} </li>
                        <li> {sex} </li>
                    </ul>
                </div>
            </div>
        </div>
        </>

    );
}
export default Text3