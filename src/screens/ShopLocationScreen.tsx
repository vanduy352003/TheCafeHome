import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import HeaderBar from "../components/HeaderBar";
import IconFeather  from "react-native-vector-icons/Feather";
import LocationCard from "../components/LocationCard";
import { useCallback, useEffect, useState } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useFocusEffect } from "@react-navigation/native";
import { useDeliveryStore } from "../store/store";
import { FlatList } from "react-native-gesture-handler";
import { getAllLocation } from "../api/locationApi";

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
    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
      setIsLoading(true)
      getAllLocation().then(data=>{
        setIsLoading(false)
        setLocations(data)
      })
    },[])
    
    const handleNavigate = (id, name, address, imageUrl) => {
      navigation.push("LocationDetail", {id: id, locationName:name, locationAddress:address, imageUrl:imageUrl})
    }
    const handleQuickPick = (name, address, id) => {
      setTakeAwayAddress({name, address, id})
      navigation.navigate("Cart")
    }
    return(
        <View>
            <HeaderBar navigation={navigation} title="Cửa hàng"></HeaderBar>
            <View style={styles.searchSection}>
                <View style={styles.searchBar}>
                <IconFeather style={styles.searchIcon} name="search"></IconFeather>
                <TextInput style={styles.input} placeholder="Tìm kiếm" value={searchText} onChangeText={(text)=>setSearchText(text)}></TextInput>
                </View>
            </View>
            <Text style={styles.header}>Danh sách cửa hàng</Text>
            {locations.length > 0 &&
              <View style={[styles.listLocation, {marginBottom: bottomTabHight}]}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={locations.filter(location=>location.locationAddress.toLowerCase().includes(searchText.toLowerCase()))}
                  renderItem={itemData => {
                    return(
                      <LocationCard isQuickPick={isQuickPick} imageUrl={itemData.item.imageUrl} name={itemData.item.locationName} address={itemData.item.locationAddress} id={itemData.item.locationId} navigationToDetail={isQuickPick?handleQuickPick:handleNavigate}></LocationCard>
                    )
                  }}
                  keyExtractor={(item, index) => item.locationId.toString()}
                ></FlatList>
              </View>
            }
            {isLoading && (
              <View style={[styles.loadingIndicator]}>
                <ActivityIndicator size="large" />
              </View>
            )}
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
      },
      loadingIndicator: {
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
      },
})

export default ShopLocationScreen;