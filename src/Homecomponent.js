import React from 'react';
import{Link} from 'react-router-dom';

function Homecomponent()
{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <p> This is the Home page in this web site</p>
                    <p><Link to="/about">About</Link></p>
                    <p><Link to="/second">Homeeeee</Link></p>
                </div>
            </div>
        </div>


    );

    

}
export default Homecomponent;