import React from 'react';
import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";


const CustomLink = ({to, children, ...props}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ color: match ? '#ffff' : 'black' }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && ""}
        </div>
    );
};

export default CustomLink;