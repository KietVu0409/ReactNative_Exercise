import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import MasterPortrait from './components/MasterPortrait';
import DetailPortrait from './components/DetailPortrait';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MasterPortrait">
        <Stack.Screen name='MasterPortrait' component={MasterPortrait} options={{ headerShown: false }}/>
        <Stack.Screen name="DetailPortrait" component={DetailPortrait} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
