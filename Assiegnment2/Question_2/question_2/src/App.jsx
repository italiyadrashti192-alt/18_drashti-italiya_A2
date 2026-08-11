import { Link, Routes, Route } from "react-router-dom";

import FunctionComponent from "./components/FunctionComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import ListComponent from "./components/ListComponent";
import NestedComponent from "./components/NestedComponent";
import ChildrenComponent from "./components/ChildrenComponent";
import Counter from "./components/Counter";
import UseStateComponent from "./components/UseStateComponent";
import UseRefComponent from "./components/UseRefComponent";
import DigitalClock from "./components/DigitalClock";
import ManualValidation from "./components/ManualValidation";
import LibraryValidation from "./components/LibraryValidation";
import Employees from "./components/Employees";
import Students from "./components/Students";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            React Assignment
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link className="nav-link" to="/function">
                  Function
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/conditional">
                  Conditional
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/list">
                  List
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/nested">
                  Nested
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/children">
                  Children
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/counter">
                  Counter
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/state">
                  useState
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/ref">
                  useRef
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/clock">
                  Clock
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/manual-validation">
                  Manual Form
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/library-validation">
                  Library Form
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/employees">
                  Employees
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/students">
                  Students
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/function" element={<FunctionComponent />} />
          <Route path="/conditional" element={<ConditionalRendering />} />
          <Route path="/list" element={<ListComponent />} />
          <Route path="/nested" element={<NestedComponent />} />
          <Route path="/children" element={<ChildrenComponent />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/state" element={<UseStateComponent />} />
          <Route path="/ref" element={<UseRefComponent />} />
          <Route path="/clock" element={<DigitalClock />} />
          <Route path="/manual-validation" element={<ManualValidation />} />
          <Route path="/library-validation" element={<LibraryValidation />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </div>
    </>
  );
}

function Home() {
  return (
    <div className="text-center">
      <h1>React Assignment</h1>
      <p>Select a component from the navigation menu.</p>
    </div>
  );
}

export default App;