"use client";
import { TloginSchema } from "@/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { TLoginResponse } from "@/app/types/auth.types";

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
