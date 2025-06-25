import { View, FlatList, ActivityIndicator } from "react-native";
import ProductPaper from "../components/product-paper";
import { ProductDTO } from "@/dto/product-dto";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/product"

interface Props {
  item: ProductDTO;
}

const Index = () => {
  const { data: product, isLoading: loading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });

  if(loading){
    return(
      <ActivityIndicator size={"large"}/>
    )
  }

  return (
    <View>
      <FlatList
        data={product}
        numColumns={2}
        contentContainerStyle={{
          gap: 1,
          padding: 18,
        }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: Props) => <ProductPaper data={item} />}
      />
    </View>
  );
};

export default Index;
