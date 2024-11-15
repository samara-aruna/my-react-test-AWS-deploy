import React from 'react';
import {Link} from 'react-router-dom';

function Aboutcomponent()
{
    return(
        <div className="container-fluid">
            <div className='row'>
                <div className="col-12">
                    <p> This is the About page in this web site</p>
                    <p><Link to="home">Home</Link></p>
                </div>
            </div>
        </div>

    );
}
export default Aboutcomponent;