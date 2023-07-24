import React, { useEffect, useState } from "react";
import Comment from "./../components/comment/comment";
import { getAllComments } from "../services/getAllComment";
import { Link } from "react-router-dom";
import "./discussion.css"
function Discussion() {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    console.log("im here");
    getComments();
  }, []);

  const getComments = async () => {
    const { data } = await getAllComments();
    console.log(data);
    setComments(data);
  };

  const renderComments = () => {
    return (
      <div className="comments">
        {comments ? (
          comments.map((c) => (
            <Link to={`/full-comment/${c.id}`} key={c.id}>
              <Comment name={c.name} email={c.email} />
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  return (
    <div className="container">
      <section className="section comment-section">{renderComments()}</section>
    
    </div>
  );
}

export default Discussion;