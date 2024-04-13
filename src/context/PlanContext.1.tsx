import React from "react";
import { Addon, Plan } from "../utils/schemas";



export const PlanContext = React.createContext({
    selected:{
        plan: {name: '', price: {
            monthly: '', yearly: ''
        }, image: '',},
        plans: [
            {id: 1, name: '', price: {
                monthly: '', yearly: ''
            
            }},
            {id: 2, name: '', price: {
                monthly: '', yearly: ''
            }},
            {id: 3, name: '', price: {
                monthly: '', yearly: ''
            }},
        ],
        addons: [
            {id: 1, title: '', price: {
                monthly: '', yearly: ''
            
            }, description: ''},
            {id: 2, title: '', price: {
                monthly: '', yearly: ''
            
            }, description: ''},
            {id: 3, title: '', price: {
                monthly: '', yearly: ''
            }, description: ''},
        ],
        addon:{
            title: '',
            price: {
                monthly: '',
                yearly: ''
            },
            description: ''},
        availablePlan: [{name: 'arcade'}, {name: 'advanced'}, {name: 'pro'}],
        total: 0
    },
    handleCheckboxChange: ( e: React.ChangeEvent<HTMLInputElement>, addon: Addon) => {addon},
    updateSelectedPlan: (plan: Plan) => {plan},
    updateSelectedAddon: (addon: Addon) => {addon},
    selectPlan: (plan: Plan) => {
        console.log(plan);
    },
    toggleChecked: () => {},
    changePlan: (newPlanName: string) => {newPlanName},
    isChecked:false

});
