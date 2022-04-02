import React from 'react';
import { Link } from 'react-router-dom';

const USAddress = () => {
    return (
        <div>
            <Link to={'/contact/US'}>
                <h1 className="bg-orange-500 p-5 text-white rounded">
                    (918) 333-6211 <br />
                    227 SE Queenstown Ave <br />
                    Bartlesville, Oklahoma(OK), 74006
            </h1>
            </Link>
        </div>
    );
};

export default USAddress;