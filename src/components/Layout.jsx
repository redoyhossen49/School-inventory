import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
