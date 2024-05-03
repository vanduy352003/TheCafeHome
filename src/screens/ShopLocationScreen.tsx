import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import HeaderBar from "../components/HeaderBar";
import IconFeather  from "react-native-vector-icons/Feather";
import LocationCard from "../components/LocationCard";
import { useState } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const categoryList = [
  {name: 'Trà sữa', price: 10, id: '1'},
  {name: 'Trà sữa đào', price: 20, id: '2'},
  {name: 'Trà sữa matcha', price: 30, id: '3'},
  {name: 'Trà sữa cam', price: 40, id: '4'},
  {name: 'Cà phê trà', price: 50, id: '5'},
  {name: 'Cà phê sửa', price: 60, id: '6'},
  {name: 'Trà sữa', price: 10, id: '1'},
  {name: 'Trà sữa đào', price: 20, id: '2'},
  {name: 'Trà sữa matcha', price: 30, id: '3'},
  {name: 'Trà sữa cam', price: 40, id: '4'},
  {name: 'Cà phê trà', price: 50, id: '5'},
  {name: 'Cà phê sửa', price: 60, id: '6'},
];

function ShopLocationScreen(): React.JSX.Element {
    const [searchText, setSearchText] = useState('');
    const bottomTabHight = useBottomTabBarHeight();

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
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[styles.listLocation, {marginBottom: bottomTabHight}]}>
                            <Text style={styles.header}>Danh sách cửa hàng</Text>

                {
                    (categoryList).map((item, index) => 
                        <LocationCard key={index}></LocationCard>
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
      },
      header: {
        fontSize: 20,
        color: 'black',
        fontWeight: '500',
        marginBottom: 16,
      }
})

export default ShopLocationScreen;