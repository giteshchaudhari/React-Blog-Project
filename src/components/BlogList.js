import React from 'react';
import {connect} from 'react-redux';
import  {BlogListItem} from './BlogListItem';
import { Link } from 'react-router-dom';

const BlogList=(props)=>(
    <div className="content-container">
    <div className="list-header">
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Blog</Link>
        </div>
      </div>
    </div>
    </div>
    <div className="list-body">
        {
            props.blogs.length===0?(
            <div className="list-item list-item--message">
                <span>No Blogs</span>
            </div>
            ):(
                props.blogs.map((blog)=>{
                    return <BlogListItem key={blog.id} {...blog}/>
                })
            )
        }
    </div>
    </div>
);
const mapStateToProps=(state)=>{
    return{
        blogs:state.blogs
    } 
}

export default connect(mapStateToProps)(BlogList);
