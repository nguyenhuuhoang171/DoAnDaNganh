import React from 'react'
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack'
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
    DetailHistory,
    Config,
    Profile
}=Screens;
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Auth=()=>
    <Stack.Navigator 
        options={{
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerMode: "float",
            headerShown: false
        }}
        initialRouteName='Login' 
    >
        <Stack.Screen
            name={"Login"}
            component={Login}
            options={{
                headerShown: false
            }}
        />
         <Stack.Screen
            name={"Register"}
            component={Register}
        />
    </Stack.Navigator>

const HistoryNav=()=>
    <Stack.Navigator>
        <Stack.Screen
            name={"History"}
            component={History}
        />
         <Stack.Screen
            name={"DetailHistory"}
            component={DetailHistory}
            
        />
    </Stack.Navigator>
const BottomTab =()=>
    <Tab.Navigator>
        <Tab.Screen
            name={"Home"}
            component={Home}
            options={{
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
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
            <Stack.Navigator
                InitialRouteName={"Auth"}
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
                        headerShown:false,
                            gestureDirection: "horizontal",
                            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                            headerMode: "float",
                            headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;