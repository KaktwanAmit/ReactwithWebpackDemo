import React,{Component} from 'react';
import PostForm from './PostForm';
class Posts extends Component{
    constructor(props){
        super(props);
        
    }
    state={
        posts:[],
    }
    componentDidMount(){
        console.log('componenet mounted');
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json()) // fetch returns a promise that we need to map to json
        .then(data=>this.setState({posts:data}));
    }
    render(){
        const postItems =this.state.posts.map((post,item)=>(
           <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
           </div> 
        ));
        return(
            <div>
                <PostForm/>
                <hr/>
                <h1 style={{backgroundColor:'#000',color:'#fff'}}>Posts</h1>
                {postItems}
            </div>
        )
    }
}
export default Posts;