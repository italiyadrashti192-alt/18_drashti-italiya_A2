import { useRef } from "react";

function UseRefComponent() {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div className="card p-4">
      <h2>useRef Example</h2>

      <input
        ref={inputRef}
        type="text"
        className="form-control mb-3"
        placeholder="Enter something"
      />

      <button
        className="btn btn-primary"
        onClick={focusInput}
      >
        Focus Input
      </button>
    </div>
  );
}

export default UseRefComponent;