import { useState } from "react";

function ManualValidation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });

    validate(name, value);
  }

  function validate(name, value) {
    let message = "";

    if (name === "name" && value.trim() === "") {
      message = "Name is required";
    }

    if (
      name === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      message = "Enter valid email";
    }

    if (name === "password" && value.length < 6) {
      message = "Password must contain at least 6 characters";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: message
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      form.name &&
      form.email &&
      form.password.length >= 6 &&
      Object.values(errors).every((error) => !error)
    ) {
      alert("Form submitted successfully");
    } else {
      alert("Please fix the errors");
    }
  }

  return (
    <div className="card p-4">
      <h2>Manual Live Form Validation</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          className="form-control mb-1"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <small className="text-danger">
          {errors.name}
        </small>

        <input
          name="email"
          className="form-control mt-3 mb-1"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <small className="text-danger">
          {errors.email}
        </small>

        <input
          name="password"
          type="password"
          className="form-control mt-3 mb-1"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <small className="text-danger">
          {errors.password}
        </small>

        <button className="btn btn-success mt-3">
          Submit
        </button>

      </form>
    </div>
  );
}

export default ManualValidation;