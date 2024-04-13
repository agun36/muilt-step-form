/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useCallback, useEffect, useState } from "react";
import {  addons, plans } from "../assets/plans";
import { Selected, Addon } from "../utils/schemas";


export const PlanContext = createContext<any>(undefined);
export const PlanProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selected, setSelected] = useState<Selected>({
  plan: plans[0], // Initialize with the first plan
  plans: [],
  addons: [], // Initialize with an empty array
  availablePlan:[{
    name: 'arcade'
  },
  {
    name: 'advanced'
  },
  {
    name: 'pro'
  }],
  addon:addons[0], // Add this line
  total: Number(plans[0].price.monthly.slice(1)), // Initialize with the price of the first plan
});



// Inside PlanProvider component
const calculateTotal = useCallback(() => {
  let total = 0;
  if (selected.plan) {
    total += isChecked ? parseFloat(selected.plan.price.yearly.replace(/[^0-9.-]+/g,"")) : parseFloat(selected.plan.price.monthly.replace(/[^0-9.-]+/g,""));
  }
  selected.addons.forEach(addon => {
    total += isChecked ? parseFloat(addon.price.yearly.replace(/[^0-9.-]+/g,"")) : parseFloat(addon.price.monthly.replace(/[^0-9.-]+/g,""));
  });
  return total;
}, [isChecked, selected.plan, selected.addons]);

useEffect(() => {
  const total = calculateTotal();
  setSelected(prevState => ({
    ...prevState,
    total: total,
  }));
}, [calculateTotal]);


const toggleChecked = () => {
  setIsChecked(prevState => !prevState);
};

  const updateSelectedPlan = (plan): void => {
    setSelected(prevState => ({
      ...prevState,
      plan: plan,
    }));
  };

  const updateSelectedAddon = (addon) => {
    setSelected(prevState => {
      // Check if the addon is already selected
      const isAlreadySelected = prevState.addons.some(selectedAddon => selectedAddon.price === addon.price);
  
      if (isAlreadySelected) {
        // If the addon is already selected, remove it from the array
        return { ...prevState, addons: prevState.addons.filter(selectedAddon => selectedAddon.price !== addon.price) };
      } else {
        // If the addon is not selected, add it to the array
        return { ...prevState, addons: [...prevState.addons, addon] };
      }
    });
    setSelected(prevState => ({
      ...prevState,
    }));
  };
  const selectPlan = (plan) => {
  const monthlyPrice = parseFloat(plan.price.monthly.replace(/[^0-9.-]+/g,""));
// let yearlyPrice = parseFloat(plan.price.yearly.replace(/[^0-9.-]+/g,""));
  if (plan && plan.price) {
    setSelected(prevState => ({
      ...prevState,
      plan: plan,

      total: monthlyPrice, // Convert the price string to a number and then back to a string
    }));
  } else {
    console.error('Plan or plan price is undefined');
  }
}
const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, addon: Addon) => {
  if (e.target.checked) {
    setSelected(prevState => {
      if (!prevState.addons.some(selectedAddon => selectedAddon.id === addon.id)) {
        return {
          ...prevState,
          addons: [...prevState.addons, addon]
        };
      } else {
        return prevState;
      }
    });
  } else {
    setSelected(prevState => ({
      ...prevState,
      addons: prevState.addons.filter(selectedAddon => selectedAddon.id !== addon.id)
    }));
  }
};
const changePlan = (newPlanName) => {
  const newPlan = plans.find(plan => plan.name === newPlanName);
  if (newPlan) {
    setSelected(prevState => ({
      ...prevState,
      plan: newPlan,
    }));
  }
};


  return (
    <PlanContext.Provider value={{changePlan, toggleChecked, isChecked, handleCheckboxChange, selectPlan, selected, updateSelectedPlan, updateSelectedAddon }}>
      {children}
    </PlanContext.Provider>
  );
};