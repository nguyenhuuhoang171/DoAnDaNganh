import React,{Component} from 'react';
import {createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screens} from '../screen';
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_Fontisto from 'react-native-vector-icons/Fontisto';
import { cos } from 'react-native-reanimated';

const {
    Login,
    Register,
    Home,
    History,
    DetailHistory,
    Config,
    Profile
}=Screens;

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
// const ConfigStack = createStackNavigator();
const HisStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Auth =()=>
    <AuthStack.Navigator initialRouteName='Login'>
        <AuthStack.Screen
            name={"Login"}
            component={Login}
            options={{
                // headerShown: false
            }}
        />
        <AuthStack.Screen
        name={"Register"}
        component={Register}
        options={{
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            // headerMode: "float",
            // headerShown: false
        }}
    />
    </AuthStack.Navigator>

const HistoryNav=()=>
    <HisStack.Navigator>
        <HisStack.Screen
            name={"History"}
            component={History}
        />
         <HisStack.Screen
            name={"DetailHistory"}
            component={DetailHistory}
            
        />
    </HisStack.Navigator>

const BottomTab =()=>
    <Tab.Navigator>
        <Tab.Screen
            name={"Home"}
            component={Home}
            options={{
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
                    headerMode: "float",
                    tabBarLabel: "Home",
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
            name={"HistoryNav"}
            children={HistoryNav}
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
            <RootStack.Navigator>
                <RootStack.Screen
                    name={"Auth"}
                    component={Auth}
                    options={{
                        // headerShown:false,
                        // headerMode: "screen",
                    }}
                />
                <RootStack.Screen
                    name={"BottomTabs"}
                    children={BottomTab}
                    options={{
                        // headerShown:false,
                            gestureDirection: "horizontal",
                            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
                            // headerMode: "float",
                            // headerShown: false
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;