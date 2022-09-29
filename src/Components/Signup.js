import React from "react";

function Signup() {
    return (
      <div>
        <h1>Signup</h1>
        <form>
          <div>
            <input type="text" name="new username" placeholder="New username" />
          </div>
          <div>
            <input type="text" name="email address" placeholder="Email address" />
          </div>
          <div>
            <input type="password" name="new password" placeholder="New password" />
          </div>
          <div>
            <input type="password" name="confirm password" placeholder="Confirm password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  export default Signup;