import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import ProductCardOne from '../components/ProductCardOne';
import CategorySection from '../components/CategorySection';
import ProductHorizontalSection from '../components/ProductHorizontalSection';
import HeaderBar from '../components/HeaderBar';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const productList = [
  {name: 'Trà sữa', price: 10, id: '1'},
  {name: 'Trà sữa đào', price: 20, id: '2'},
  {name: 'Trà sữa matcha', price: 30, id: '3'},
  {name: 'Trà sữa cam', price: 40, id: '4'},
  {name: 'Cà phê trà', price: 50, id: '5'},
  {name: 'Cà phê sửa', price: 60, id: '6'},
];


function HomeScreen({navigation}: any): React.JSX.Element {
  const tabBarHeight = useBottomTabBarHeight();

  const handlePressCard = () => {
    navigation.push('Detail')
  }

  const handlePressSearch = () => {
    navigation.push('Search')
  }

  const handlePressFavorite = () => {
    navigation.push('Favorite')
  }

  const handlePressCheckout = () => {
    navigation.push('Checkout')
  }

  return (
    <View style={{paddingBottom:tabBarHeight}}>
      <HeaderBar title="Home"></HeaderBar>
      <ScrollView style={{marginBottom:60}} showsVerticalScrollIndicator={false}>
        <View style={[styles.container, styles.backgroundGreen]}>
          <Text style={styles.introduceText}>Cùng uống thả ga với{'\n'}The Cafe Home bạn nhé</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.header}>Mua ngay kẻo hết</Text>
          <ProductHorizontalSection navigateToDetail={handlePressCard}></ProductHorizontalSection>
          <Text style={styles.header}>Danh mục sản phẩm</Text>
          <CategorySection navigateToFavorite={handlePressFavorite} navigateToSearch={handlePressSearch}></CategorySection>
          <Text style={styles.header}>Sản phẩm ưu đãi</Text>
          <View style={styles.productList}>
            {[...productList].map((item, index) => (
              <ProductCardOne
                key={index}
                product={productList[index]}
                navigateToDetail={handlePressCard}></ProductCardOne>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    marginTop: 18,
    marginBottom: 16,
  },
  introduceText: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
  },
  backgroundGreen: {
    backgroundColor: '#56a568',
    paddingBottom: 30,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    elevation: 10,
  }
});

export default HomeScreen;
