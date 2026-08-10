function ListComponent() {
  const fruits = ["mango", "Banana", "litchi", "papaya"];

  return (
    <div className="card p-4">
      <h2>List Rendering</h2>

      <ul className="list-group">
        {fruits.map((fruit, index) => (
          <li className="list-group-item" key={index}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListComponent;