import React, {  Suspense} from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Step1Page } from "./pages/step1";
import { Step2Page } from "./pages/step2";
import { Step3Page } from "./pages/step3";
import { Step4Page } from "./pages/step4";
import { FormLayout } from "./components/formLayout";
import { Step5Page } from "./pages/step5";



function App() {
  
  return (

      <BrowserRouter>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center vh-100">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route element={<FormLayout>{<Outlet />}</FormLayout>}>
            <Route path="/step-1" element={<Step1Page />} />
            <Route path="/step-2" element={<Step2Page />} />    
            <Route path="/step-3" element={<Step3Page />} />
            <Route path="/step-4" element={<Step4Page />} />
            <Route path="/step-5" element={<Step5Page />} />
          </Route>

          <Route path="*" element={<Navigate to="/step-1" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
