import "./App.css";
import { Outlet } from "react-router-dom";
import { NavItems } from "./components/NavItems";
export const App = () => {
  return (
    <>
      <NavItems />
      <Outlet />
    </>
  );
};
