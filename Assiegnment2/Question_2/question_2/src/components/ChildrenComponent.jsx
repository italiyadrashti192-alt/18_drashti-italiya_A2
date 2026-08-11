function Card({ children }) {
  return (
    <div className="card shadow p-4">
      {children}
    </div>
  );
}

function ChildrenComponent() {
  return (
    <Card>
      <h2>Children / Containment</h2>
      <p>
        This content is passed from the parent using children.
      </p>
      <button className="btn btn-primary">
        Click Me
      </button>
    </Card>
  );
}

export default ChildrenComponent;