import  React from 'react';

export default class BlogForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			title:props.blog? props.blog.title:'',
			description:props.blog? props.blog.description:'',
			error:''
		};
	}
	onTitleChange=(e)=>{
		const title=e.target.value;
		this.setState(()=>({title}));
	}
	onDescriptionChange=(e)=>{
		const description=e.target.value;
		this.setState(()=>({description}));
	}
	onSubmit=(e)=>{
		e.preventDefault();
		if(!this.state.title || !this.state.description){
			this.setState(()=>({error:'Please provide Desciption and Title'}))
		}
		else{
			this.setState(()=>({error:''}));
			this.props.onSubmit({
				description:this.state.description,
				title:this.state.title
			});
		}
	};
  render (){
      return (
        <div>
				{this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
            <input
              type ="text"
              placeholder="Title"
              autoFocus
							value={this.state.title}
							onChange={this.onTitleChange}
            />
            <textarea
              placeholder="Add details about your Blog"
							value={this.state.description}
							onChange={this.onDescriptionChange}
            >
          	</textarea>
						<button>Add Blog</button>
          </form>
				</div>
       )
   }
}
