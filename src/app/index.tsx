import Products from "@/data/products.json";
import { View, FlatList } from "react-native";
import ProductPaper from "./components/product-paper";
import { ProductDTO } from "@/dto/product-dto";

interface Props {
  item: ProductDTO;
}

const Index = () => {
  return (
    <View>
      <FlatList
        data={Products}
        numColumns={2}
        contentContainerStyle={{
          gap: 1,
          padding: 18
        }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: Props) => <ProductPaper data={item} />}
      />
    </View>
  );
};

export default Index;
