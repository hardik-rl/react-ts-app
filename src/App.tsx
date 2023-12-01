import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Users from "./module/users/components/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./module/dashboard/Dashboard";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
