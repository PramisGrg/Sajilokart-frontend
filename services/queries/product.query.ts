import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios";
import { TProductResponse } from "@/types/product.types";

export const useGetProductQuery = () => {
  return useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await axiosInstance.get<TProductResponse>("/product");
      return response.data;
    },
  });
};
