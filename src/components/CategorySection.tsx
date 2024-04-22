import {
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

function CategorySection(): React.JSX.Element {
  return (
    <View style={styles.categorySection}>
      <View style={styles.viewItem}>
        <TouchableOpacity style={styles.searchBar}>
          <IconFeather style={styles.searchIcon} name="search"></IconFeather>
          <Text style={styles.searchText}>Tim kiem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <IconMaterialIcons
            style={styles.favoriteIcon}
            name="favorite-border"></IconMaterialIcons>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}>
        <FlatList
          data={categoryList}
          numColumns={Math.ceil(categoryList.length / 2)}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}
          renderItem={itemData => {
            return (
              <TouchableOpacity style={[styles.categoryItem, itemData.index>0?itemData.index!=Math.ceil(categoryList.length / 2)?{marginLeft:30}:{}:{}]}>
                <Image
                  style={styles.categoryImage}
                  source={require('../assets/images/hongtra.png')}
                />
                <Text style={styles.categoryName}>{itemData.item.name}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}></FlatList>
      </ScrollView>
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
    alignItems: 'center'
  },
  favoriteIcon: {
    color: 'white',
    fontSize: 18
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 20,
  },
  searchText: {
    fontSize: 18,
    fontWeight: '400'
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
});

export default CategorySection;
