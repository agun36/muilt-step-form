import React from "react";
import { useNavigate } from "react-router";
import { PlanContext } from "../assets/context/PlanContext.1";
import { plans } from "../assets/plans";
// import { plans } from "../assets/plans";

export const Step2Page = () => {
  const navigate = useNavigate();
  const { toggleChecked, isChecked, selected, selectPlan } = React.useContext(PlanContext);

  const submitForm = (e) => {
    e.preventDefault();
    navigate("/step-3");
  };
  const getBack = (e) => {
    e.preventDefault();
    navigate("/step-1");
  }

  return (
    <>
      <div className="content">
        <div className="card card-content border-0  py-5 px-3" >
          <div className={`card-body d-flex flex-column `}>
            <h1 className="text-marine-blue">Select your plan</h1>
            <p className="text-cool-gray">You have the option of monthly or yearly billing.</p>
            <div className="card-container d-flex flex-column flex-md-column flex-lg-row  gap-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`card w-100 ${selected.plan.name === plan.name ? "bg-magnolia" : ""}`}
                  onClick={() => selectPlan(plan)}
                >
                  <div className="card-body d-flex ms-2 flex-md-column  align-items-center gap-3">
                    <img src={plan.image} alt={plan.name} />
                    <h2>{plan.name}</h2>
                    <p className="text-cool-gray">
                      {isChecked ? plan.price.yearly : plan.price.monthly}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-center bg-magnolia p-5 mx-3 mt-5">
            <label className={`form-check-label me-3 ${!isChecked ? "text-marine-blue" : "text-cool-gray"}`} htmlFor="flexSwitchCheckChecked">Monthly</label>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={isChecked} onChange={toggleChecked} />
              <label className={`form-check-label ms-2" htmlFor="flexSwitchCheckChecked ${isChecked ? "text-marine-blue" : "text-cool-gray"}`}>Yearly</label>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-white mt-auto text-end p-5 p-md-6 d-flex justify-content-between ">
        <button className="btn text-cool-gray fs-4 fw-bold" type="button"
        onClick={getBack}
        >
          Go Back
        </button>
        <button
          className="btn btn-marine-blue btn-lg"
          type="submit"
          onClick={submitForm}
        >
          Next Step
        </button>
      </div>
    </>
  );
};
