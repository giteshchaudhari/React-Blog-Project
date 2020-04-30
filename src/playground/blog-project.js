import { createStore} from 'redux';
import uuid from 'uuid';

// ACTION GENERATORS
const addBlog=({title='',description=''}={})=>(
    {
    type:'ADD_BLOG',
    blog:{
        id:uuid(),
        title,
        description
    }
});
const removeBlog=({id}={})=>({
        type:'REMOVE_BLOG',
        id
});

const editBlog=(id,updates)=>({
    type:'EDIT_BLOG',
    id,
    updates
})

//REDUCERS
const blogsReducerDefaultState=[];
const blogsReducers=(state=blogsReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_BLOG':
            return [
                ...state,
                action.blog
            ];
        case 'REMOVE_BLOG':
            return state.filter(({id})=>id!==action.id);
        case 'EDIT_BLOG':
            return state.map((blog)=>{
                if (blog.id===action.id){
                    return {
                        ...blog,
                        ...action.updates
                    };
                }
                else{
                    return blog;
                };
            });
        default:
            return state;
    }
}

const store=createStore(blogsReducers);

store.subscribe(()=>{
    const state=store.getState();
    console.log(state);
})

const one=store.dispatch(addBlog({title:'first title',description:'first project'}));
const two=store.dispatch(addBlog({title:'second title',description:'first project'}));

store.dispatch(editBlog(one.blog.id,{title:"hellogitu"}))
//store.dispatch(removeBlog({id:one.blog.id}))
//store.dispatch(removeBlog({id:two.blog.id}))
const DemoState={
    blogs:[{
        id:'grf',
        title:'fv',
        description:'fddcv',
    }]
}