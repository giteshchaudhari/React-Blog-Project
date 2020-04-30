import React from 'react';
import {connect} from 'react-redux';
import {editBlog,removeBlog} from './../actions/blogs';
import BlogForm from './BlogForm';

const EditBlogPage=(props)=>(
    <div>
        <BlogForm 
            blog={props.blog}
            onSubmit={(blog)=>{
                        props.dispatch(editBlog(props.blog.id,blog))
                        props.history.push('/')
                    }}
        />
        <button onClick={()=>{
            props.dispatch(removeBlog({id:props.blog.id}));
            props.history.push('/');
        }}>Remove</button>
    </div>
)

const mapStateToProps=(state,props)=>({
    blog:state.blogs.find((blog)=>blog.id===props.match.params.id)
});

export default connect(mapStateToProps)(EditBlogPage)