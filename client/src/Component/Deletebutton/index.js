import React from "react";

function Deletebutton(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      <i class="icofont-minus"></i>
    </span>
  );
}

export default Deletebutton;