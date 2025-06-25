import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../api/product";

const Details = () => {
  const { id } = useLocalSearchParams();

  const { data: product, isLoading: loading, error } = useQuery({
    queryKey: ['products', id],
    queryFn: () => getProduct(id)
  });


  return (
    <View>
      <Stack.Screen name="details/[id]" options={{ title: product?.title }} />
      <Image source={{ uri: product?.images[0] }} style={styles.image} />
      <Text>{product?.title}</Text>
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
