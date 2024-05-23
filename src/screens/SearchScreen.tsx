import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import ProductCardThree from '../components/ProductCardThree';
import { Product, productList } from '../model/product';
import { FlatList } from 'react-native-gesture-handler';



function SearchScreen({navigation, route}: any): React.JSX.Element {
  const {products} = route.params
  const [searchText, setSearchText] = useState('');
  const handlePressCancel = () => {
    navigation.goBack();
  };
  const handlePressCard = (product : Product) => {
    navigation.push('Detail', {...product})
  }
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          <IconFeather style={styles.searchIcon} name="search"></IconFeather>
          <TextInput
            style={styles.input}
            placeholder="Tìm kiếm"
            autoFocus={true}
            value={searchText}
            onChangeText={text => setSearchText(text)}></TextInput>
        </View>
        <TouchableOpacity onPress={handlePressCancel}>
          <Text style={styles.cancelText}>Hủy</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listProduct}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products.filter(product => product.productName.toLowerCase().includes(searchText.toLowerCase()))}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
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
  },
  cancelText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#56a568',
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  listProduct: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});

export default SearchScreen;
