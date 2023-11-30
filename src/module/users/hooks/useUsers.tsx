import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../Api";

const useUsers = () => {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: () => getAllUsers(),
  });
};

export default useUsers;
