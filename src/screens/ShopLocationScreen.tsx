import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import HeaderBar from "../components/HeaderBar";
import IconFeather  from "react-native-vector-icons/Feather";
import LocationCard from "../components/LocationCard";
import { useCallback, useEffect, useState } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useFocusEffect } from "@react-navigation/native";
import { useDeliveryStore } from "../store/store";

const locationList = [
  {name: 'DHSPKT1', address: "So 1 VVN", id: 1},
  {name: 'DHSPKT2', address: "So 2 VVN", id: 2},
  {name: 'DHSPKT3', address: "So 3 VVN", id: 3},
  {name: 'DHSPKT4', address: "So 4 VVN", id: 4},
  {name: 'DHSPKT5', address: "So 5 VVN", id: 5},
  {name: 'DHSPKT6', address: "So 6 VVN", id: 6},
];

function ShopLocationScreen({navigation, route}: any): React.JSX.Element {
    let {isQuickPick} = route?.params ?? {}
    const [searchText, setSearchText] = useState('');
    const bottomTabHight = useBottomTabBarHeight();
    const {takeAwayAddress, setTakeAwayAddress} = useDeliveryStore();

    const handleNavigate = () => {
      navigation.push("LocationDetail")
    }
    const handleQuickPick = (name, address, id) => {
      setTakeAwayAddress({name, address, id})
      navigation.navigate("Cart")
    }
    return(
        <View>
            <HeaderBar title="Cửa hàng"></HeaderBar>
            <View style={styles.searchSection}>
                <View style={styles.searchBar}>
                <IconFeather style={styles.searchIcon} name="search"></IconFeather>
                <TextInput style={styles.input} placeholder="Tìm kiếm" value={searchText} onChangeText={(text)=>setSearchText(text)}></TextInput>
                </View>
                <TouchableOpacity>
                    <Text>Bản đồ</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.header}>Danh sách cửa hàng</Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[styles.listLocation, {marginBottom: bottomTabHight}]}>
                {
                    (locationList).map((item, index) => 
                        <LocationCard isQuickPick={isQuickPick} name={item.name} address={item.address} id={item.id} navigationToDetail={isQuickPick?handleQuickPick:handleNavigate} key={index}></LocationCard>
                    )
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        marginRight: 10,
        flex: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      searchIcon: {
        fontSize: 18,
        marginHorizontal: 10,
        color: 'black',
      },
      searchSection: {
        flexDirection: 'row',
        height: 80,
        paddingTop: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        backgroundColor: 'white'
      },
      input: {
        flex: 1,
        fontSize: 18,
      },
      listLocation: {
        paddingHorizontal: 10,
        marginVertical: 20,
        paddingBottom: 100,
      },
      header: {
        fontSize: 20,
        color: 'black',
        fontWeight: '500',
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 10
      }
})

export default ShopLocationScreen;