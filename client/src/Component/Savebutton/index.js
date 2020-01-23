import React from "react";

function Savebutton(props) {
    return (
        <span className="save-btn" {...props} role="button" tabIndex="0">
            <i class="icofont-heart"></i>
        </span>
    );
}

export default Savebutton;