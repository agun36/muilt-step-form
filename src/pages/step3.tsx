import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { addons } from '../assets/plans';
import { PlanContext } from '../context/planContext';


export const Step3Page = () => {
  const navigate = useNavigate();
  const { selected, handleCheckboxChange } = useContext(PlanContext);

  // const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const submitForm = (e) => {
    e.preventDefault();
    if (!handleCheckboxChange || !selected.plan || selected.addons.length === 0) {
      alert("Please select a plan");
      return;
    }

    navigate("/step-4");
  };

  const getBack = (e) => {
    e.preventDefault();
    navigate("/step-2");
  }
  return (
    <>

      <div className="content">
        <div className="card card-content border-0  py-5 px-3">
          <div className='mb-5 mb-md-6'>
            <h1 className='text-marine-blue'>
              Pick add-ons
            </h1>
            <p className='text-cool-gray'>
              Add-ons help enhance your gaming experience.
            </p>
          </div>

          <div className="addon d-flex flex-column gap-3">
            {addons.map((addon) => {
  return (
    <div
      className={`card border-1 add-on py-5 px-3 ${selected.addons.some(selectedAddon => selectedAddon.id === addon.id) ? "bg-magnolia" : ""}`}
      key={addon.id}
    >
      <div className="form-check d-flex align-items-center">
       <input
  className="form-check-input mt-3"
  type="checkbox"
  id={addon.title}
  checked={selected.addons.some(selectedAddon => selectedAddon.id === addon.id)}
  onChange={(e) => handleCheckboxChange(e, addon)}
/>

        <div className="ms-3 d-flex flex-column">
          <label className="form-check-label text-marine-blue" htmlFor={addon.title}>
            {addon.title}
          </label>
          <small className='text-cool-gray'>{addon.description}</small>
        </div>
      </div>
    </div>
  )
})}

          </div>
        </div>
        
      </div >
      <div className="bg-white mt-auto text-end p-5 p-md-6 d-flex justify-content-between">
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
  )
}
