import React from 'react';
import {Link} from 'react-router-dom';


export const BlogListItem=({id,title,description})=>(
    <div>
    <Link to={`/edit/${id}`}>
        <h3>{title}</h3>
    </Link>
    <p>{description}</p>
    </div>
)