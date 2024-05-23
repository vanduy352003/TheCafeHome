import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ProductCardOne from '../components/ProductCardOne';
import CategorySection from '../components/CategorySection';
import ProductHorizontalSection from '../components/ProductHorizontalSection';
import HeaderBar from '../components/HeaderBar';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {getAllProduct} from '../api/productApi';
import {getAllCategory} from '../api/categoryApi';
import { FlatList } from 'react-native-gesture-handler';

function HomeScreen({navigation}: any): React.JSX.Element {
  const tabBarHeight = useBottomTabBarHeight();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const handlePressCard = (product: Product) => {
    navigation.push('Detail', {...product});
  };

  const handlePressSearch = (productList) => {
    navigation.push('Search', {products:productList});
  };

  const handlePressFavorite = () => {
    navigation.push('Favorite', {products});
  };

  const handlePressCheckout = () => {
    navigation.push('Checkout');
  };
  useEffect(() => {
    setIsLoading(true);
    getAllProduct().then(data => {
      setIsLoading(false);
      setProducts(data);
    });
    setIsLoading(true);
    getAllCategory().then(data => {
      setIsLoading(false);
      setCategories(data);
    });
  }, []);
  return (
    <View style={{paddingBottom: tabBarHeight}}>
      <HeaderBar navigation={navigation} title="Home"></HeaderBar>
      <ScrollView
        style={{marginBottom: 60}}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.container, styles.backgroundGreen]}>
          <Text style={styles.introduceText}>
            Cùng uống thả ga với{'\n'}The Cafe Home bạn nhé
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.header}>Mua ngay kẻo hết</Text>
          <ProductHorizontalSection
            products={products}
            navigateToDetail={handlePressCard}></ProductHorizontalSection>
          <Text style={styles.header}>Danh mục sản phẩm</Text>
          <CategorySection
            navigateToFavorite={handlePressFavorite}
            navigateToSearch={handlePressSearch}></CategorySection>
            <ScrollView horizontal={true}
              scrollEnabled={false}>
              <FlatList
                data={categories}
                renderItem={itemData => {
                  return (
                    <View>
                      <Text style={styles.header}>{itemData.item.categoryName}</Text>
                      <FlatList
                        data={products.filter(
                          product => product.category.categoryId === itemData.item.categoryId
                        )}
                        numColumns={2}
                        renderItem={itemData => {
                          const productStyle = itemData.index % 2 == 1?styles.productRightColumn : {};
                          return(
                            <View style={productStyle}>
                                <ProductCardOne
                                  product={{"productId": itemData.item.productId, "productName":itemData.item.productName, "imageUrl":itemData.item.imageUrl, "description":itemData.item.description, "category":itemData.item.category, "productVariant":itemData.item.productVariant, "toppings": itemData.item.toppings}}
                                  navigateToDetail={handlePressCard}></ProductCardOne>
                            </View>
                          )
                        }}
                        keyExtractor={(item, index) => item.productId}></FlatList>
                    </View>
                  );
                }}
                keyExtractor={(item, index) => item.categoryId}>
              </FlatList>
            </ScrollView>
        </View>
      </ScrollView>
      {isLoading && (
        <View style={[styles.loadingIndicator]}>
          <ActivityIndicator size="large" />
        </View>
      )}
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
  },
  loadingIndicator: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
  },
  productRightColumn: {
    marginLeft: 10
  }
});

export default HomeScreen;
