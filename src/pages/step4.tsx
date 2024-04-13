import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { PlanContext } from '../assets/context/PlanContext.1';
import { plans } from '../assets/plans';



export const Step4Page = () => {
  const navigate = useNavigate();
  const { isChecked, selected, changePlan } = React.useContext(PlanContext);
  const [hasChanged, setHasChanged] = useState(false);


const submitForm = (e) => {
  e.preventDefault();
  // Check if a plan and addon have been selected
  if (!selected.plan || selected.addons.length === 0) {
    alert("Please select a plan and addon before proceeding.");
  } else {
    navigate("/step-5");
  }
};

  return (
    <form>
      <div className="content">
        <div className="card card-content border-0  py-5 px-3">
          <div className="content-title">
            <h1 className="text-marine-blue">Finishing up</h1>
            <p className="text-cool-gray">Double-check everything looks OK before confirming.</p>
          </div>
          <div className="card border-0 rounded-3 py-5 px-3 bg-magnolia">
            <div className='d-flex justify-content-between border-bottom pb-3'>
              
 {
  selected.availablePlan && (
    <div>
      <h2 className='text-marine-blue'>{selected.plan.name} {!isChecked ? "(Monthly)" : "(Yearly)"}</h2> 
      {/* Task use this link to edit the  selected.plan.name */} 
      <select
      title='change'
        className="form-select-link"
        value={hasChanged ? selected.plan.name : "change"}
        onChange={(e) => {
          if (e.target.value !== "change") {
            changePlan(e.target.value);
            setHasChanged(true);
          }
        }}
      >
        <option value="change">change</option>
        {plans.map((plan) => (
          <option key={plan.name} value={plan.name}>
            {plan.name}
          </option>
        ))}
      </select>
    </div>
  )
}

              {
                selected.plan.name && (
                  <span className="text-marine-blue fw-bold">{isChecked ? selected.plan.price.yearly : selected.plan.price.monthly}</span>
                )
              }

            </div>
            {selected.addons.map((addon) => {
              return (
                <div key={addon.id} className="d-flex justify-content-between">
                  <p>{addon.title}</p>
                  <span className="text-marine-blue fw-bold">
                    {isChecked ? addon.price.yearly : addon.price.monthly}
                  </span>
                </div>
              )
            })}

          </div>
          <div className="d-flex justify-content-between mt-5">
            <span className="text-cool-gray fw-bold"> {!isChecked ? "Total (per Month)" : "Total (per Year)"}</span>
            <span className="text-marine-blue fw-bold">${selected.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="bg-white mt-auto text-end p-5 p-md-6 d-flex justify-content-between">
        <button className="btn text-cool-gray fs-4 fw-bold" type="button">
          Go Back
        </button>
        <button
          className="btn btn-marine-blue btn-lg"
          type="button"
          onClick={submitForm}
        >
          Next Step
        </button>
      </div>
    </form>

  )
}
