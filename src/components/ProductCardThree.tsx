import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Product} from '../model/product';
import Icon from 'react-native-vector-icons/Entypo';

type productProp = {
  product: Product;
  navigateToDetail: Function;
};

const window = Dimensions.get('window');

function ProductCardThree({product, navigateToDetail}: productProp): React.JSX.Element {
  const handlePress = ()=>{
    navigateToDetail()
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.productItem}>
        <Image
          style={styles.productImage}
          resizeMode="cover"
          source={require('../assets/images/hongtra.png')}
        />
        <View style={styles.productView}>
          <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <View style={styles.theButton}>
              <TouchableOpacity style={styles.addButton}>
                <Icon name="plus" size={24} color="white"></Icon>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productImage: {
    width: 2 * window.width / 5,
    height: 160,
    borderRadius: 10,
  },
  addButton: {
    width: 40,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#56A568',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  productName: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  productPrice: {
    fontSize: 18,
    color: 'black',
  },
  productItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productView: {
    marginLeft: 10,
    flex: 1
  },
  theButton: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default ProductCardThree;
