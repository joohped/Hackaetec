import Home from './Telas/Home';
import Relaxamento from './Telas/Relaxamento';
import Meditacao from './Telas/Meditacao';
import Meditacao1 from './Telas/Meditacao1';
import Meditacao2 from './Telas/Meditacao2';
import Meditacao3 from './Telas/Meditacao3';
import Meditacao4 from './Telas/Meditacao4';
import Respiracao from './Telas/Respiracao';
import Login from './Telas/Login';
import Musica from './Telas/Musica';
import Config from './Telas/Config';
import Cadastro from './Telas/Cadastro';
import Contatos from './Telas/Contatos';
import { View, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Navegar(){
  return (
      
       <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
       }}>
        <Tab.Screen name={"Relaxamento"} component={Relaxamento} options={{
           headerShown: false,
           tabBarIcon: ({ focused }) => (
             <View style={{
               position: 'absolute',
               top: 15
             }}>
               <FontAwesome5
                 name="location-arrow"
                 size={20}
                 color={focused ? '#4a27b5' : 'gray'}
               ></FontAwesome5>
             </View>
           )
         }}></Tab.Screen>
         <Tab.Screen name={"Home"} component={Home} options={{
           headerShown: false,
           tabBarIcon: ({ focused }) => (
             <View style={{
               position: 'absolute',
               top: 15
             }}>
               <FontAwesome5
                 name="home"
                 size={20}
                 color={focused ? '#4a27b5' : 'gray'}
               ></FontAwesome5>
             </View>
           )
         }}></Tab.Screen>
         <Tab.Screen name={"Contatos"} component={Contatos} options={{
           headerShown: false,
           tabBarIcon: ({ focused }) => (
             <View style={{
               position: 'absolute',
               top: 15
             }}>
               <FontAwesome5
                 name="phone"
                 size={20}
                 color={focused ? '#4a27b5' : 'gray'}
               ></FontAwesome5>
             </View>
           )
         }}></Tab.Screen>
         <Tab.Screen name={"Config"} component={Config} options={{
           headerShown: false,
           tabBarIcon: ({ focused }) => (
             <View style={{
               position: 'absolute',
               top: 15
             }}>
               <FontAwesome5
                 name="cog"
                 size={20}
                 color={focused ? '#4a27b5' : 'gray'}
               ></FontAwesome5>
             </View>
           )
         }}></Tab.Screen>
       </Tab.Navigator>
    );
  }

export default function Rotas() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} options={headerShown= false}/>
    <Stack.Screen name="Navegar" component={Navegar}/>
    <Stack.Screen name="Respiracao" component={Respiracao} options={headerShown= false}/>
    <Stack.Screen name="Cadastro" component={Cadastro} options={headerShown= false}/>
    <Stack.Screen name="Meditacao" component={Meditacao} options={headerShown= false}/>
    <Stack.Screen name="Meditacao1" component={Meditacao1} options={headerShown= false}/>
    <Stack.Screen name="Meditacao2" component={Meditacao2} options={headerShown= false}/>
    <Stack.Screen name="Meditacao3" component={Meditacao3} options={headerShown= false}/>
    <Stack.Screen name="Meditacao4" component={Meditacao4} options={headerShown= false}/>
    <Stack.Screen name="Musica" component={Musica} options={headerShown= false}/>
  </Stack.Navigator>
  </NavigationContainer>
  );
}
