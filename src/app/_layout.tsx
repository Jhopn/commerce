import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          animation: "fade",
          title: "Produtos",
        }}
      />
      <Stack.Screen
        name="details/[id]"
        options={{
          animation: "fade",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
