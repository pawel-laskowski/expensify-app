import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ( { description, amount, id, createdAt}) => (
  <div>
    <Link to={`edit/${id}`}>
      <h2>Description: {description}</h2>
    </Link>
    <p>amount: {amount}</p>  
  </div>
)

export default ExpenseListItem