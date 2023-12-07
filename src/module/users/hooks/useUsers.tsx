import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api";

const useUsers = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    ["get-user"],
    getAllUsers
  );

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

export default useUsers;
