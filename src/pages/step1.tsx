import React, { useRef } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router";
import * as yup from "yup";




export const Step1Page = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formRef = useRef<any>();

  const initialValues = {
    email: "",
    name: "",
    phone: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().label("Name").required(),
    email: yup.string().label("Email").required(),
    phone: yup.string().matches(/^\d{10,11}$/, "Phone number is not valid").label('Phone').required(),
  });

  const submitForm = () => {
    navigate("/step-2")
  };




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
            <Formik
              innerRef={formRef}
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={submitForm}
              validateOnBlur={false}
            >
              {({ handleSubmit, errors, touched }) => {
                return (
                  <Form className="pt-4" onSubmit={handleSubmit}>
                    <div className="form-name row d-grid ">
                      <div className="d-flex justify-content-between align-items-center">
                        <label htmlFor="name" className="label-name text-marine-blue">
                          Name
                        </label>
                        <ErrorMessage name="name" component="div" className="text-danger" />
                        {
                          touched.name && !errors.name && <span className="text-success">Looks good!</span>
                        }
                      </div>
                      <Field
                        className={`mt-4 mb-4 form-control ${touched.name && errors.name ? 'is-invalid' : touched.name && !errors.name ? 'is-valid' : ''}`} type="text" name="name" />

                    </div>

                    <div className="form-name row d-grid ">
                      <div className="d-flex justify-content-between align-items-center">
                        <label htmlFor="email" className="label-name text-marine-blue">
                          Email
                        </label>
                        <ErrorMessage name="email" component="div" className="text-danger" />
                        {
                          touched.email && !errors.email && <span className="text-success">Looks good!</span>
                        }
                      </div>
                      <Field
                        className={`mt-4 mb-4 form-control ${touched.email && errors.email ? 'is-invalid' : touched.email && !errors.email ? 'is-valid' : ''}`} type="email" name="email" />

                    </div>
                    <div className="form-name row d-grid ">
                      <div className="d-flex justify-content-between align-items-center">
                        <label htmlFor="email" className="label-name text-marine-blue">
                          Phone
                        </label>
                        <ErrorMessage name="phone" component="div" className="text-danger" />
                        {
                          touched.phone && !errors.phone && <span className="text-success">Looks good!</span>
                        }
                      </div>
                      <Field
                        className={`mt-4 mb-4 form-control ${touched.phone && errors.phone ? 'is-invalid' : touched.phone && !errors.phone ? 'is-valid' : ''}`} type="tel" name="phone" />

                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
      <div className="bg-white mt-auto text-end p-5  d-flex justify-content-end">
        <button
          className="btn btn-marine-blue btn-lg"
          type="button"
          onClick={() => {
            formRef.current.submitForm();
          }}
        >
          Next Step
        </button>

      </div>
    </>
  );
};
