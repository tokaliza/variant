import React from "react";

function MouseOver() {

    function changeBackgroundOver(e) {
        e.target.style.background = "aqua";
    }

    function changeBackgroundOut(e) {
        e.target.style.background = "green";
    }

    return (
      <div>
          <button onMouseOver={changeBackgroundOver} onMouseOut={changeBackgroundOut}> Hover now!</button>
      </div>
    );
}
export default MouseOver;