
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

const window = Dimensions.get('window');

type productProp = {
  product: Product;
};

function ProductCardTwo({product}: productProp): React.JSX.Element {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Image
          style={styles.productImage}
          resizeMode="cover"
          source={require('../assets/images/hongtra.png')}
        />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text>Lấy</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
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
    height: 50,
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
  },
});

export default ProductCardTwo;
