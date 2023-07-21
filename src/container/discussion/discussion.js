import Comment from "../../components/comment/comment";
import FullComment from "../../components/fullcomment/fullcomment";
import NewComment from "../../components/newcomment/newComment";
import "../../App.css"
import {useEffect, useState} from "react";
import axios from "axios"
function Discussion() {
const[comments,setComments]=useState(null)
const[commentId,setCommentId]=useState(null)

useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/comments")
.then((response)=>{
   setComments(response.data.slice(0,4))
})
.catch((error)=>{
   console.log(error)
})
})


const selectHandler=(id)=>{
  setCommentId(id)
}

    return (
     <main className="App" >
        <section className="comment">
         {comments ?comments.map((c)=>{
        return  <Comment name={c.name} onClick={()=>selectHandler(c.id)} email={c.email} key={c.id}/>

         }):<p>loading ...</p>}
        </section>
        <section><FullComment commentId={commentId}/></section>
        <section><NewComment/></section>
     </main>
    );
  }
  
  export default Discussion;