import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
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
            tabBarBackground: ()=>{
                return <BlurView overlayColor='' blurAmount={15} style={styles.blurViewStyle} />;
            }
            }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused,color,size}) => (
                    <IconOcticons name="home" size={25} color={focused?'blue':'white'}></IconOcticons>
                ),
            }}></Tab.Screen>
            <Tab.Screen name="Product" component={ProductScreen} options={{
                tabBarIcon: ({focused,color,size}) => (
                    <IconFeather name="coffee" size={25} color={focused?'blue':'white'}></IconFeather>
                ),
            }}></Tab.Screen>
            <Tab.Screen name="Location" component={ShopLocationScreen} options={{
                tabBarIcon: ({focused,color,size}) => (
                    <IconIon name="storefront-outline" size={25} color={focused?'blue':'white'}></IconIon>
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
        backgroundColor: 'black',
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent'
    },
    blurViewStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
})

export default TabNavigator;