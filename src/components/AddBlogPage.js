import React from 'react';
import {addBlog} from './../actions/blogs';
import BlogForm from './BlogForm';
import { connect } from 'react-redux';

const AddBlogPage=(props)=>(
    <div>
        <h3>Add Blog</h3>
        <BlogForm
            onSubmit={(blog)=>{
                props.dispatch(addBlog(blog));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddBlogPage);