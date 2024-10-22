// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index"  />
//     </Stack>
//   );
// }












import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false
          // headerStyle: {
          //   backgroundColor: '#c3c3c3'
          // }
        }} // Close this properly here
      />
    </Stack>
  );
}
