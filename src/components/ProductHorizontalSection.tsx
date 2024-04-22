import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const productList = [
  {name: 'Trà sữa', price: 10, id: '1'},
  {name: 'Trà sữa đào', price: 20, id: '2'},
  {name: 'Trà sữa matcha', price: 30, id: '3'},
  {name: 'Trà sữa cam', price: 40, id: '4'},
  {name: 'Cà phê trà', price: 50, id: '5'},
  {name: 'Cà phê sửa', price: 60, id: '6'},
];

const window = Dimensions.get('window');

function ProductHorizontalSection(): React.JSX.Element {
  return (
    <ScrollView
      horizontal={true}
      directionalLockEnabled={true}
      alwaysBounceVertical={false}
      showsHorizontalScrollIndicator={false}>
      <FlatList
        data={productList}
        numColumns={productList.length}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}
        renderItem={itemData => {
          return (
            <TouchableWithoutFeedback>
              <View style={styles.productItem}>
                <Image
                  style={styles.productImage}
                  resizeMode="cover"
                  source={require('../assets/images/hongtra.png')}
                />
                <Text style={styles.productName}>{itemData.item.name}</Text>
                <Text style={styles.productPrice}>{itemData.item.price}</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.buttonText}>Lấy</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
        keyExtractor={(item, index) => index.toString()}></FlatList>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  productImage: {
    width: window.width / 2 - 15,
    height: 160,
    borderRadius: 10,
  },
  addButton: {
    width: '100%',
    height: 45,
    borderRadius: 10,
    backgroundColor: '#56A568',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  productPrice: {
    fontSize: 18,
    color: 'black',
    marginVertical: 5
  },
  productItem: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
});

export default ProductHorizontalSection;
