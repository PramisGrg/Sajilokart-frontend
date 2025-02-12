import { TloginSchema } from "@/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useLoginMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (values: TloginSchema) => {
      const response = await axiosInstance.post("/auth/login", values);
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message);
      router.replace("/");
    },
    onError: (error) => {
      console.log("Error is running");
      toast.error(error.message);
    },
  });
};
