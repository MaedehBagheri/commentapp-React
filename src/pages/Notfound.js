import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function NotFound() {
  return (
    <>
      <p>
        404
        <br />
        the page not found
      </p>
      <Link to="/">back to homepage</Link>
    </>
  );
}

export default NotFound;