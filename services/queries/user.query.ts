import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosFormInstance, axiosInstance } from "../axios";
import { TRegisterResponse } from "@/types/auth.types";
import { toast } from "sonner";
import { TUpdateProfileSchema } from "@/schemas/profile.schema";

export const useGetUserQuery = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosInstance.get<TRegisterResponse>("/user");
      return response.data;
    },
  });
};

export const useUpdateUserQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: TUpdateProfileSchema) => {
      const response = await axiosFormInstance.post("/user/update", values);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
