import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios";
import { TRegisterResponse } from "@/app/types/auth.types";

export const useGetUserQuery = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosInstance.get<TRegisterResponse>("/user");
      return response.data;
    },
  });
};
