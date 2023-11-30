import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Users from "./module/users/components/Users";
import { BrowserRouter } from "react-router-dom";

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Users />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
