import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack 
    screenOptions={{
      headerStyle : {
        backgroundColor: '#121212'
      },
      headerTintColor: '#fff',
      headerTitleStyle : {
        fontSize:20,
        fontWeight: 'bold'
      },
      contentStyle: {
        paddingHorizontal: 10,
        paddingTop:10,
        backgroundColor: '#121212'
      }
    }}
  >
    <Stack.Screen name='index' options={{ title: 'Home'}} />
    <Stack.Screen name='notes' options={{headerTitle: 'Notas'}} />
  </Stack>;
}

export default RootLayout