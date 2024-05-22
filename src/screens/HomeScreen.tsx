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
import {Product, productList} from '../model/product';
import {getAllProduct} from '../api/productApi';
import {getAllCategory} from '../api/categoryApi';

function HomeScreen({navigation}: any): React.JSX.Element {
  const tabBarHeight = useBottomTabBarHeight();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handlePressCard = (product: Product) => {
    navigation.push('Detail', {...product});
  };

  const handlePressSearch = () => {
    navigation.push('Search', {products:products});
  };

  const handlePressFavorite = () => {
    navigation.push('Favorite');
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
  }, []);
  return (
    <View style={{paddingBottom: tabBarHeight}}>
      <HeaderBar title="Home"></HeaderBar>
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
            products={productList}
            navigateToDetail={handlePressCard}></ProductHorizontalSection>
          <Text style={styles.header}>Danh mục sản phẩm</Text>
          <CategorySection
            navigateToFavorite={handlePressFavorite}
            navigateToSearch={handlePressSearch}></CategorySection>
          <Text style={styles.header}>Sản phẩm ưu đãi</Text>
          <View style={styles.productList}>
            {[...products].map((item, index) => (
              <ProductCardOne
                key={index}
                product={{"productId": item.productId, "productName":item.productName, "imageUrl":item.imageUrl, "description":item.description, "category":item.category, "productVariant":item.productVariant, "toppings": item.toppings}}
                navigateToDetail={handlePressCard}></ProductCardOne>
            ))}
          </View>
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
});

export default HomeScreen;
