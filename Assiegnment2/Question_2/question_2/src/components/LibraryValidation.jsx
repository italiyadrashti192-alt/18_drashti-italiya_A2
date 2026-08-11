import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function LibraryValidation() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required")
  });

  return (
    <div className="card p-4">
      <h2>Formik + Yup Validation</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: ""
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert("Form submitted successfully");
          console.log(values);
        }}
      >
        <Form>

          <Field
            name="name"
            placeholder="Name"
            className="form-control mb-1"
          />

          <ErrorMessage
            name="name"
            component="div"
            className="text-danger"
          />

          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="form-control mt-3 mb-1"
          />

          <ErrorMessage
            name="email"
            component="div"
            className="text-danger"
          />

          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="form-control mt-3 mb-1"
          />

          <ErrorMessage
            name="password"
            component="div"
            className="text-danger"
          />

          <button className="btn btn-primary mt-3">
            Submit
          </button>

        </Form>
      </Formik>
    </div>
  );
}

export default LibraryValidation;