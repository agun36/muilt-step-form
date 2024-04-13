import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
}


const validate = (values: { name: string; email: string; phone: string }): Errors => {
  const errors: Errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/^\+?[0-9]+$/.test(values.phone)) {
    errors.phone = 'Invalid phone number';
  }


  return errors;
};


export const Step1Page = () => {
  const navigate = useNavigate();



  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
    },
    validate,
    onSubmit: () => {
      // alert(JSON.stringify(values, null, 2));
      navigate('/step-2');
    },
  });



  return (
    <>

      <div className="content">
        <div className="card card-content border-0 py-5 px-3">
          <div className="card-body">
            <div className="mb-6">
              <h1 className="text-marine-blue">Personal info</h1>
              <p className="text-cool-gray ">
                Please provide name, email address and phone number
              </p>
            </div>
            <div className="form-name row d-grid ">
              <div className="d-flex justify-content-between align-items-center">
                <label htmlFor="name" className="label-name text-marine-blue">
                  Name
                </label>
                {formik.touched.name && formik.errors.name ? (
                  <span className="text-danger">
                    {formik.errors.name}
                  </span>
                ) : formik.touched.name && !formik.errors.name ? (
                  <span className="text-success">
                    Looks good!
                  </span>
                ) : null}
              </div>
              <input
                type="text"
                id="name"
                name="name"
                aria-describedby="inputGroupPrepend1 validationServerUsernameFeedback"
                className={`mt-4 mb-3 form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : formik.touched.name && !formik.errors.name ? 'is-valid' : ''}`}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="form-name row d-grid ">
              <div className="d-flex justify-content-between align-items-center ">
                <label htmlFor="email" className=" text-marine-blue">
                  Email
                </label>
                {formik.touched.email && formik.errors.email ? (
                  <span className="text-danger">
                    {formik.errors.email}
                  </span>
                ) : formik.touched.email && !formik.errors.email ? (
                  <span className="text-success">
                    Looks good!
                  </span>
                ) : null}
              </div>
              <input
                type="text"
                id="email"
                name="email"
                aria-describedby="inputGroupPrepend1 validationServerUsernameFeedback"
                className={`mt-4 mb-4 form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : formik.touched.email && !formik.errors.email ? 'is-valid' : ''}`}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="form-name row d-grid ">
              <div className="d-flex justify-content-between align-items-center">
                <label htmlFor="name" className=" text-marine-blue ">
                  Phone Number
                </label>
                {formik.touched.phone && formik.errors.phone ? (
                  <span className="text-danger ">
                    {formik.errors.phone}
                  </span>
                ) : formik.touched.phone && !formik.errors.phone ? (
                  <span className="text-success ">
                    Looks good!
                  </span>
                ) : null}
              </div>
              <input
                type="text"
                id="phone"
                name="phone"
                aria-describedby="inputGroupPrepend1 validationServerUsernameFeedback"
                className={`mt-4 form-control ${formik.touched.phone && formik.errors.phone ? 'is-invalid' : formik.touched.phone && !formik.errors.phone ? 'is-valid' : ''}`}
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-auto text-end p-5  d-flex justify-content-end">
        <button
          className="btn btn-marine-blue btn-lg"
          type="button"
          onClick={() => {
            if (formik.isValid && formik.dirty) {
              formik.handleSubmit();
            }
          }}
        >
          Next Step
        </button>

      </div>
    </>
  );
};
