import React from 'react';
import {Link} from 'react-router-dom';


export const BlogListItem=({id,title,description})=>(
    <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{title}</h3>
      <span className="list-item__sub-title">{description}</span>
    </div>
  </Link>
)