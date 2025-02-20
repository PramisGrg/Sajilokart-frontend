"use client";
import { TloginSchema, TRegisterSchema } from "@/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { TLoginResponse, TRegisterResponse } from "@/app/types/auth.types";

export const useLoginMutation = () => {
  const router = useRouter();

  return useMutation<TLoginResponse, Error, TloginSchema>({
    mutationFn: async (values: TloginSchema) => {
      const response = await axiosInstance.post("/auth/login", values);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      Cookies.set("token", data?.data.token);
      router.replace("/");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useRegisterMutation = () => {
  const router = useRouter();

  return useMutation<TRegisterResponse, Error, TRegisterSchema>({
    mutationFn: async (values: TRegisterSchema) => {
      const response = await axiosInstance.post("/auth/register", values);
      return response.data;
    },

    onSuccess: (data) => {
      console.log(data, "This is response data");
      toast.success(data.message);
      router.replace("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
