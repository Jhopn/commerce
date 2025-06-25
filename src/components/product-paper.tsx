import { ProductDTO } from "@/dto/product-dto";
import { useRouter } from "expo-router";
import { Pressable, Text, Image, StyleSheet } from "react-native";

interface Props{
  data: ProductDTO
}

export default function ProductPaper({data}: Props){
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/details/[id]",
      params: {id: data.id}
    })
  }

  return ( 
    <Pressable onPress={handlePress} style={styles.container}>
      <Image source={{ uri: data.images[0]}} style={{width: 150, height: 280, objectFit: "scale-down"}}/>
      <Text>{data.title}</Text>
      <Text>{data.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
    </Pressable>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 4
  }
});
