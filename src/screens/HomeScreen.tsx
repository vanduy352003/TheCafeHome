/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ProductCardOne } from '../components/ProductCardOne';
import CategorySection from '../components/CategorySection';


const productList = [
  {'name': 'Trà sữa', 'price': 10, 'id':'1'},
  {'name': 'Trà sữa đào', 'price': 20, 'id':'2'},
  {'name': 'Trà sữa matcha', 'price': 30, 'id':'3'},
  {'name': 'Trà sữa cam', 'price': 40, 'id':'4'},
  {'name': 'Cà phê trà', 'price': 50, 'id':'5'},
  {'name': 'Cà phê sửa', 'price': 60, 'id':'6'},

]


function HomeScreen(): React.JSX.Element {

  return (
    <View style={styles.container}>
        <ScrollView>
          <CategorySection></CategorySection>
          <Text style={styles.header}>
            Sản phẩm ưu đãi
          </Text>
          <View style={styles.productList}>
            {
              [...productList].map((item, index) =>
                <ProductCardOne key={index} product={productList[index]}></ProductCardOne>
              )
            }
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white'
  },
  viewItem: {

  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  header: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    marginTop: 18,
    marginBottom: 16
  }
});

export default HomeScreen;
