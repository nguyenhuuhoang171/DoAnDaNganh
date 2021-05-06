import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Screens} from '../screen'
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon_Fontisto from 'react-native-vector-icons/Fontisto'

const {
    Login,
    Register,
    Home,
    History,
    Config,
    Profile
}=Screens;
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Auth=()=>
    <Stack.Navigator
        initialRouteName={"Login"}>
        <Stack.Screen
            name={"Login"}
            component={Login}
        />
         <Stack.Screen
            name={"Register"}
            component={Register}
        />
    </Stack.Navigator>
const BottomTab=()=>
    <Tab.Navigator>
        <Tab.Screen
            name={"Home"}
            component={Home}
            options={{
                tabBarLabel:"Home",
                tabBarIcon:({focused})=>
                    <Icon_FontAwesome
                        name="home"
                        focused={focused}
                        size={25}
                        color={focused?"#008000":"#636363"}
                    />
            }}
        />
        <Tab.Screen
            name={"History"}
            component={History}
            options={{
                tabBarLabel:"History",
                tabBarIcon:({focused})=>
                    <Icon_FontAwesome
                        name="history"
                        focused={focused}
                        size={25}
                        color={focused?"#008000":"#636363"}
                    />
            }}
        />
        <Tab.Screen
            name={"Config"}
            component={Config}
            options={{
                tabBarLabel:"Config",
                tabBarIcon:({focused})=>
                    <Icon_Fontisto
                        name="player-settings"
                        focused={focused}
                        size={25}
                        color={focused?"#008000":"#636363"}
                    />
            }}
        />
        <Tab.Screen
            name={"Profile"}
            component={Profile}
            options={{
                tabBarLabel:"Profile",
                tabBarIcon:({focused})=>
                    <MaterialCommunityIcons
                        name="account"
                        focused={focused}
                        size={25}
                        color={focused?"#008000":"#636363"}
                    />
            }}
        />
    </Tab.Navigator>
const AppNavigator=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator
             initialRouteName={"BottomTabs"}
             >  
                <Stack.Screen
                    name={"Auth"}
                    children={Auth}
                    options={{
                        headerShown:false
                    }}
                />
                 <Stack.Screen
                    name={"BottomTabs"}
                    children={BottomTab}
                    options={{
                        headerShown:false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;