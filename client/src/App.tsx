import React from "react";
import { BrowserRouter } from "react-router-dom";
import InternalRoutes from "./routes/Routes";

const App = () => {
  return (
    <BrowserRouter >
      <InternalRoutes />
    </BrowserRouter>
  );
};

export default App;
