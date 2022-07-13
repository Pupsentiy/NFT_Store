import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/main/Main'

function App() {
  return (
    <BrowserRouter >
      <Header/>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
