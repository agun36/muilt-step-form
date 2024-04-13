
import { Navigation } from "../navigation";
import "./styles.scss";
import { PlanProvider } from "../../context/planContext";
import React from "react";


export const FormLayout = ({ children }) => {

  return (
    <PlanProvider >
      <section className="layout-wrapper">
        <Navigation />
        <div className="content-wrapper">{children}</div>
      </section>
    </PlanProvider>
  );
};
