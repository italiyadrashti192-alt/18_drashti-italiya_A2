import { useState } from "react";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="card p-4">
      <h2>Conditional Rendering</h2>

      {isLoggedIn ? (
        <h4 className="text-success">Welcome User!</h4>
      ) : (
        <h4 className="text-danger">Please Login</h4>
      )}

      <button
        className="btn btn-primary"
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default ConditionalRendering;