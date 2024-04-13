
import { Navigation } from "../navigation";
import "./styles.scss";
import { PlanProvider } from "../../context/planContext";
import React from "react";

export const FormLayout = ({ children }) => {

  return (
    <PlanProvider >
      <section className="layout-wrapper">
      <Navigation />
      <form className="content-wrapper">{children}</form>
    </section>
    </PlanProvider>
  );
};
