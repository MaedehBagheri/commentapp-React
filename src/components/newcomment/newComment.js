
import React, { useState } from "react";
import { addNewComment } from "../../services/postCommentServices";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NewComment() {
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  const changeHandler = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const history = useHistory();
  const postCommentHandler = async () => {
    await addNewComment(newComment).then();
    history.push("/");
  };

  return (
    <div className="container">
      <div className="new-comment">
        <div className="new-comment__info new-comment__name">
          <label>name</label>
          <input type="text" name="name" onChange={changeHandler} />
        </div>
        <div className="new-comment__info">
          <label>email</label>
          <input type="email" name="email" onChange={changeHandler} />
        </div>
        <div>
          <label>content</label>
          <textarea name="body" onChange={changeHandler} />
        </div>
        <div>
          <button onClick={postCommentHandler}>Add New Comment</button>
        </div>
      </div>
    </div>
  );
}

export default NewComment;