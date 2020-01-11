import React from "react";

function ItemCard(props) {
    return (
      <span className="delete-btn" {...props} role="button" tabIndex="0">
        ✗
      </span>
    );
  }
  
  export default ItemCard;