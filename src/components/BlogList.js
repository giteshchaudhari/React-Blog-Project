import React from 'react';
import {connect} from 'react-redux';
import  {BlogListItem} from './BlogListItem';


const BlogList=(props)=>(
    <div>
        <h1>Blog List</h1>
        {props.blogs.map((blog)=>{
            return <BlogListItem  key={blog.id} {...blog}/>;
        })}
    </div>
);
const mapStateToProps=(state)=>{
    return{
        blogs:state.blogs
    } 
}

export default connect(mapStateToProps)(BlogList);
