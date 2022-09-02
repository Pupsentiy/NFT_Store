import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Auth from "./components/auth/Auth";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import routesConfig from "./routes/routesConfig";

function App() {
  return (
    <BrowserRouter  >
     <Header/>
     <Auth/>
     <Routes>
      {routesConfig.map((route, index) => (
        <Route 
        key={index}
        path={route.path}
        element={route.element}
        />
      ))}
     </Routes>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
