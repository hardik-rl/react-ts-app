import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import Users from "./module/users/components/Users";
import ProductsTable from "./module/products/components/ProductsTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./module/dashboard/Dashboard";
import Login from "./module/auth/Login";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
        <Route path="login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<ProductsTable />} />
          
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
