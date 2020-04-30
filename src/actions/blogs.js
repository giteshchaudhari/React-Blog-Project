import uuid from 'uuid';

export const addBlog=({title='',description=''}={})=>(
    {
    type:'ADD_BLOG',
    blog:{
        id:uuid(),
        title,
        description
    }
});
export const removeBlog=({id}={})=>({
        type:'REMOVE_BLOG',
        id
});

export const editBlog=(id,updates)=>({
    type:'EDIT_BLOG',
    id,
    updates
})