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

const productList = [
  {name: 'Trà sữa', price: 10, id: '1'},
  {name: 'Trà sữa đào', price: 20, id: '2'},
  {name: 'Trà sữa matcha', price: 30, id: '3'},
  {name: 'Trà sữa cam', price: 40, id: '4'},
  {name: 'Cà phê trà', price: 50, id: '5'},
  {name: 'Cà phê sửa', price: 60, id: '6'},
];

function SearchScreen({navigation}: any): React.JSX.Element {
  const [searchText, setSearchText] = useState('');
  const handlePressCancel = () => {
    navigation.goBack();
  };
  const handlePressCard = () => {
    navigation.push('Detail');
  };
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.listProduct}>
        {[...productList].map((item, index) => (
          <ProductCardThree
            key={index}
            product={productList[index]}
            navigateToDetail={handlePressCard}></ProductCardThree>
        ))}
      </ScrollView>
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