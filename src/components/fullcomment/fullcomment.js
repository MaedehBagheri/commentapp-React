import '../../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
const FullComment =({commentId})=>{
    const [comments,setComments]=useState(null)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then((response)=>{
           setComments(response.data)
        })
        .catch((error)=>{
           console.log(error)
        })
        })


let commentDetail =<p>please select a comment</p>


if(commentId) commentDetail=<p>loading...</p>
  
if(comments){
    commentDetail= (
        <div className="card">
           <p>name:{comments.name}</p>
           <p>email:{comments.email}</p>
           <p>body:{comments.body}</p>
        </div>
    )
}
return commentDetail;
}

export default FullComment;