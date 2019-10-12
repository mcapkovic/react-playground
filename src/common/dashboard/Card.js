import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link className="card" {...props}>
      {props.children}
    </Link>
  );
}

export default Card;
