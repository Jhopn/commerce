import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons"
const queryClient = new QueryClient()

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          animation: "flip",
          title: "Produtos",
        }}
        />
      <Stack.Screen
        name="details/[id]"
        options={{
          animation: "flip",
        }}
        />
      <TouchableOpacity>
        <Feather name="bar-chart" size={22}/>
      </TouchableOpacity>
    </Stack>
  </QueryClientProvider>
  );
};

export default RootLayout;
