import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';

import CategoryCard from './CategoryCard';
import { useEffect, useState } from 'react';
import { getAllCategory } from '../api/categoryApi';
import { getAllProduct } from '../api/productApi';

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

type categoryProp = {
  navigateToSearch: Function;
  navigateToFavorite: Function;
}

function CategorySection({navigateToFavorite, navigateToSearch}: categoryProp): React.JSX.Element {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState()
  const [isLoading, setIsLoading] = useState(false);

  const handlePressSearch = (productList) => {
    navigateToSearch(productList)
  }

  const handlePressFavorite = () => {
    navigateToFavorite()
  }

  useEffect(() => {
    setIsLoading(true);
    getAllCategory().then(data => {
      setIsLoading(false);
      setCategories(data);
    });
    setIsLoading(true);
    getAllProduct().then(data => {
      setIsLoading(false);
      setProducts(data);
    });
  }, []);

  const getProductByCategory = (categoryId) => {
    return products.filter(
      product => product.category.categoryId === categoryId
    )
  }

  return (
    <View style={styles.categorySection}>
      <View style={styles.viewItem}>
        <TouchableOpacity style={styles.searchBar} onPress={()=>handlePressSearch(products)}>
          <IconFeather style={styles.searchIcon} name="search"></IconFeather>
          <Text style={styles.searchText}>Tìm kiếm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePressFavorite}>
          <IconMaterialIcons
            style={styles.favoriteIcon}
            name="favorite-border"></IconMaterialIcons>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}
        showsHorizontalScrollIndicator={false}
        >
        <FlatList
          data={categories}
          numColumns={Math.ceil(categoryList.length / 2)}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}
          renderItem={itemData => {
            return (
              <TouchableOpacity
                onPress={()=>handlePressSearch(getProductByCategory(itemData.item.categoryId))}
                style={[
                  styles.categoryItem,
                  itemData.index > 0
                    ? itemData.index != Math.ceil(categoryList.length / 2)
                      ? {marginLeft: 30}
                      : {}
                    : {},
                ]}>
                <Image
                  style={styles.categoryImage}
                  source={itemData.item.imageUrl?{uri:itemData.item.imageUrl}:require('../assets/images/hongtra.png')}
                />
                <Text style={styles.categoryName}>{itemData.item.categoryName}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => item.categoryId}></FlatList>
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
  categorySection: {
    width: '100%',
    height: 310,
    paddingHorizontal: 5,
    alignItems: 'center',
    flexWrap: 'wrap',
    elevation: 1,
    shadowColor: '#56A568',
  },
  viewItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 5,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    flex: 1,
    marginRight: 10,
    padding: 6,
    borderRadius: 6,
    alignItems: 'center',
  },
  favoriteIcon: {
    color: 'white',
    fontSize: 18,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 20,
  },
  searchText: {
    fontSize: 18,
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#56A568',
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryItem: {
    width: 80,
    alignItems: 'center',
    margin: 2,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '400',
  },
  scrollIndicator: {
    width: 10
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

export default CategorySection;
