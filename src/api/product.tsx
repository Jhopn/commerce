import { ProductDTO } from "@/dto/product-dto";

export async function getProducts(): Promise<ProductDTO[]>{
  const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/products`);
  const data = await response.json()
  return data.products;
}
export async function getProduct(id: string): Promise<ProductDTO>{
  const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/products/${id}`);
  const data = await response.json()
  return data;
}