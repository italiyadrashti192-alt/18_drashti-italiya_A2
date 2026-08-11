import { useState } from "react";
import students from "../data/students.json";

function Students() {
  const [search, setSearch] = useState("");
  const [semester, setSemester] = useState("");
  const [division, setDivision] = useState("");
  const [gender, setGender] = useState("");

  const filteredStudents = students.filter((student) => {
    return (
      student.firstname
        .toLowerCase()
        .includes(search.toLowerCase()) &&

      (semester === "" ||
        student.semester === semester) &&

      (division === "" ||
        student.div === division) &&

      (gender === "" ||
        student.gender === gender)
    );
  });

  return (
    <div>
      <h2>Student Search & Filtering</h2>

      <div className="row mb-4">

        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search firstname"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="">All Semesters</option>
            <option value="3">Semester 3</option>
            <option value="5">Semester 5</option>
            <option value="7">Semester 7</option>
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
          >
            <option value="">All Divisions</option>
            <option value="A">Division A</option>
            <option value="B">Division B</option>
            <option value="C">Division C</option>
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">All Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Semester</th>
            <th>Division</th>
            <th>Gender</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>{student.semester}</td>
              <td>{student.div}</td>
              <td>{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredStudents.length === 0 && (
        <div className="alert alert-warning">
          No students found.
        </div>
      )}
    </div>
  );
}

export default Students;