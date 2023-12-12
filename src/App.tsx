import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Login from "./module/auth/login/Login";
import withAuthentication from "./shared/hoc/withAuthentication";
import withoutAuthentication from "./shared/hoc/withoutAuthentication";
import NotFound from "./shared/components/NotFound";
import MainLayout from "./MainLayout";

const UnAuthenticatedApp = () => {
  return <Outlet />;
};

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={withAuthentication(MainLayout)} />
          <Route element={withoutAuthentication(UnAuthenticatedApp)}>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
