export type Price = {
    monthly: string;
    yearly: string;
  };
  export type Addons = {
    id: number;
    title: string;
    description: string;
    price: Price;
  };
  
  export type Addon = {
    id: number;
    title: string;
    price: Price;
    description: string;
  };
  
  
  
  export type Plan = {
    id: number;
    name: string;
    price: Price;
    image: string;
  };
  
  export type AvailablePlan ={
    name: string;
  };
  
  
  export type Selected = {
    plan: Plan;
    plans: Plan[];
    addons: Addons[];
    availablePlan: AvailablePlan[];
    addon: Addon;
    total: number;
  };