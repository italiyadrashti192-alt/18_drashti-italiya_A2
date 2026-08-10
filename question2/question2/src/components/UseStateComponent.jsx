import { useState } from "react";

function UseStateComponent() {
  const [name, setName] = useState("");

  return (
    <div className="card p-4">
      <h2>useState Example</h2>

      <input
        type="text"
        className="form-control"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h4 className="mt-3">
        Hello {name}
      </h4>
    </div>
  );
}

export default UseStateComponent;