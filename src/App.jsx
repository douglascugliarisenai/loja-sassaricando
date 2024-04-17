import { Outlet } from "react-router-dom";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import "./App.css";

/* eslint-disable */
function App() {
 return (
  <>
   <Header />
   <Outlet />
   <Footer />
  </>
 );
}

export default App;
