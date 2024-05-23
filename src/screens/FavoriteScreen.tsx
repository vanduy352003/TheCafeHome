import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import ProductCardThree from "../components/ProductCardThree";
import { Product, productList } from "../model/product";
import { useFavoriteStore } from "../store/store";
import { FlatList } from "react-native-gesture-handler";

function FavoriteScreen({navigation, route}:any): React.JSX.Element {
  const {favorites} = useFavoriteStore();
  const {products} = route.params
  const handlePressBack = () => {
        navigation.goBack();
    }
    const handlePressCard = (product : Product) => {
        navigation.push('Detail', {...product})
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePressBack}>
                    <Icon style={styles.icon} name="left"></Icon>
                </TouchableOpacity>
                <Text style={styles.headerText}>Sản phẩm Yêu Thích</Text>
            </View>
            <View style={styles.listProduct}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products.filter(product => favorites.includes(product.productId))}
          renderItem={itemData => {
            return(
              <ProductCardThree
                product={{"productId": itemData.item.productId, "productName":itemData.item.productName, "imageUrl":itemData.item.imageUrl, "description":itemData.item.description, "category":itemData.item.category, "productVariant":itemData.item.productVariant, "toppings": itemData.item.toppings}}
                navigateToDetail={handlePressCard}></ProductCardThree>
            )
          }}
          keyExtractor={(item, index) => item.productId}
        ></FlatList>
      </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      header: {
        flexDirection: 'row',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingHorizontal: 20,
        alignItems: 'center',
        // justifyContent: 'center'
      },
      listProduct: {
        paddingHorizontal: 20,
        marginVertical: 20,
      },
      icon: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        alignSelf: 'flex-start',
      },
      headerText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        textAlign: 'center',
        flex: 1
      }
})

export default FavoriteScreen;