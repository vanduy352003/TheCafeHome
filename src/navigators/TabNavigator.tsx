import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ShopLocationScreen from "../screens/ShopLocationScreen";
import IconOcticons from "react-native-vector-icons/Octicons";
import IconFeather from "react-native-vector-icons/Feather";
import IconIon from "react-native-vector-icons/Ionicons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "@react-native-community/blur";

const Tab = createBottomTabNavigator();

function TabNavigator(): React.JSX.Element {
    return(
        <Tab.Navigator screenOptions={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle,
            }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused,color,size}) => (
                    <IconOcticons name="home" size={25} color={focused?'#56A568':'grey'}></IconOcticons>
                ),
            }}></Tab.Screen>
            <Tab.Screen name="Location" component={ShopLocationScreen} options={{
                tabBarIcon: ({focused,color,size}) => (
                    <IconIon name="storefront-outline" size={25} color={focused?'#56A568':'grey'}></IconIon>
                ),
            }}></Tab.Screen>
            {/* <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen> */}
        </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor: 'white',
        borderTopWidth: 0,
        borderTopColor: 'black',
    },
})

export default TabNavigator;