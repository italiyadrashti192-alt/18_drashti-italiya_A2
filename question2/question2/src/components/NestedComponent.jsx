function Header() {
  return <h3>Student Management</h3>;
}

function StudentInfo() {
  return <p>Name: Foram | Course: MSc IT</p>;
}

function NestedComponent() {
  return (
    <div className="card p-4">
      <Header />
      <StudentInfo />
    </div>
  );
}

export default NestedComponent;