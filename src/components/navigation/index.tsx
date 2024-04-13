import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

export const Navigation = () => {
  return (
    <nav className="navigation-wrapper">
      <NavLink
        to="/step-1"
        className={({ isActive, isPending }) =>
          isPending ? "nav-link" : isActive ? "nav-link  active" : "nav-link"
        }
      >
        <span className="number">1</span>
        <div className="detail">
          <p className="text-cool-gray mb-0">Step1</p>
          <p className="description mb-0">Your Info</p>
        </div>
      </NavLink>
      <NavLink
        to="/step-2"
        className={({ isActive, isPending }) =>
          isPending ? "nav-link" : isActive ? "nav-link  active" : "nav-link"
        }
      >
        <span className="number">2</span>
        <div className="detail">
          <p className="text-cool-gray mb-0">Step2</p>
          <p className="description mb-0">Select Plan</p>
        </div>
      </NavLink>
      <NavLink
        to="/step-3"
        className={({ isActive, isPending }) =>
          isPending ? "nav-link" : isActive ? "nav-link  active" : "nav-link"
        }
      >
        <span className="number">3</span>
        <div className="detail">
          <p className="text-cool-gray mb-0">Step3</p>
          <p className="description mb-0">Add-ons</p>
        </div>
      </NavLink>
      <NavLink
        to="/step-4"
        className={({ isActive, isPending }) =>
          isPending ? "nav-link" : isActive ? "nav-link  active" : "nav-link"
        }
      >
        <span className="number">4</span>
        <div className="detail">
          <p className="text-cool-gray mb-0">Step4</p>
          <p className="description mb-0">Summary</p>
        </div>
      </NavLink>
    </nav>
  );
};
