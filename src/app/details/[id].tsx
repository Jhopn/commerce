import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Product from "@/data/products.json";

const Details = () => {
  const { id } = useLocalSearchParams();
  const product = Product.find((product) => product.id.toString() === id);

  return (
    <View>
      <Stack.Screen name="details/[id]" options={{ title: product?.name }} />
      <Image source={{ uri: product?.image }} style={styles.image} />
      <Text>{product?.name}</Text>
      <Text>{product?.price}</Text>
      <Text>{product?.description}</Text>
      <TouchableOpacity>
        <Text>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 4,
  },
  image: {
    width: 350,
    height: 280,
    objectFit: "contain"
  },
});

export default Details;
