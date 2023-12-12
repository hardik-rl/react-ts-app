import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./module/dashboard/Dashboard";
import Users from "./module/users/components/Users";
import ProductsTable from "./module/products/components/ProductsTable";

const MainLayout = () => {
  // const { user, isFetching } = useUser();

  // const userRouteAccesible = user?.role === "user";

  // const adminRouteAccesible = user?.role === "admin";

  // if (isFetching) {
  //   return (
  //     <div className="text-2xl flex items-center h-screen justify-center">
  //       <Loader size="lg" />
  //     </div>
  //   );
  // }

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<ProductsTable />} />
      </Routes>
      {/* <Header />
      <main className="lg:pl-72 md:py-[35px] py-[22px] px-4 sm:px-6 lg:px-[30px]">
        <Routes>
          {userRouteAccesible ? (
            <Route path="" element={<Outlet />}>
              <Route index element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="products/add" element={<ProductsAddEdit />} />
              <Route
                path="products/edit/:productId"
                element={<ProductsAddEdit />}
              />
              <Route path="images" element={<Images />} />
              <Route path="*" element={<NotFound />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          ) : (
            <Route index element={<NotFound />} />
          )}
          {adminRouteAccesible ? (
            <Route path={"admin/*"} element={<Outlet />}>
              <Route index element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="products" element={<Products />} />
              <Route path="products/add" element={<ProductsAddEdit />} />
              <Route
                path="products/edit/:productId"
                element={<ProductsAddEdit />}
              />
              <Route path="images" element={<Images />} />
              <Route path="category-images" element={<Images />} />
              <Route path="*" element={<NotFound />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          ) : (
            <Route index element={<NotFound />} />
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Sidebar /> */}
    </>
  );
};

export default MainLayout;
