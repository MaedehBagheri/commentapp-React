import { useState } from 'react';
import '../../App.css';
import axios from 'axios';
const NewComment =()=>{

const [comment ,setComment]=useState({
    name:"",
    email:"",
    content:"",
})



const changeHandler=(e)=>{
    setComment({...comment,[e.target.name]:e.target.value})
}

const postHandler=()=>{
axios.post("https://jsonplaceholder.typicode.com/comments",comment)
.then((res)=>console.log(res.data))
.catch()
}
    return(
        <div className="card">
            <label>name</label>
          <input type="text" onChange={changeHandler}/>
          <label>email</label>
          <input type="text" onChange={changeHandler}/>
          <label>body</label>
          <input type="text" onChange={changeHandler}/>
          <button onClick={postHandler}>add new comment</button>
        </div>
    )
}

export default NewComment;