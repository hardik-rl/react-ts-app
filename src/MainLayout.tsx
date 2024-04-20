import React from "react";
import { Route, Routes } from "react-router-dom";

import Users from "./module/users/components/Users";
import ProductsTable from "./module/products/components/ProductsTable";
import Header from "./module/dashboard/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<ProductsTable />} />
      </Routes>
    </>
  );
};

export default MainLayout;
