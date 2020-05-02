import database from './../firebase/firebase';

export const addBlog=(blog)=>(
    {
    type:'ADD_BLOG',
    blog
});

export const startAddBlog=(blogData={})=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        const{
            title="",
            description=""
        }=blogData;
        const blog={title,description};
        return database.ref(`users/${uid}/blogs`).push(blog).then((ref)=>{
            dispatch(addBlog({
                id:ref.key,
                ...blog
            }));
        });
    };
};


export const removeBlog=({id}={})=>({
        type:'REMOVE_BLOG',
        id
});

export const startRemoveBlog=({id})=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        return database.ref(`users/${uid}/blogs/${id}`).remove().then(()=>{
            dispatch(removeBlog({id}));
        });
    };
};



export const editBlog=(id,updates)=>({
    type:'EDIT_BLOG',
    id,
    updates
})

export const startEditBlog=(id,update)=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        return database.ref(`users/${uid}/blogs/${id}`).update(update).then(()=>{
            dispatch(editBlog(id,update));
        });
    };
};

export const setBlog=(blogs)=>({
    type:'SET_BLOGS',
    blogs
})

export const startSetBlogs=()=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        return database.ref(`users/${uid}/blogs`).once('value').then((snapshot)=>{
            const blogs=[];
            snapshot.forEach((childsnapshot)=>{
                blogs.push({
                    id:childsnapshot.key,
                    ...childsnapshot.val()
                });  
            });
            dispatch(setBlog(blogs));
        });
    };
};
