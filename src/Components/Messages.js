import React from "react";

function Messages(){
    return(
      <div>
        <h1>Messages</h1>
        <form>
        <div>
          <input type="text" name="send to" placeholder="Send to"/>
          </div>
          <div>
          <input type="text" name="text" placeholder="Text"/>
          </div>
          <div>
          <input type="submit" value="Send"/>
          </div>
        </form>
      </div>
    )
  }

  export default Messages;