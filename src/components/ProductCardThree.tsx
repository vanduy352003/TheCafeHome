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
};

const window = Dimensions.get('window');

function ProductCardThree({product}: productProp): React.JSX.Element {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Image
          style={styles.productImage}
          resizeMode="cover"
          source={require('../assets/images/hongtra.png')}
        />
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.cardViewItem}>
          <Text style={styles.productPrice}>{product.price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Icon name="plus" size={24} color="white"></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  productImage: {
    width: window.width / 2 - 15,
    height: 200,
    borderRadius: 10,
  },
  cardViewItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton: {
    width: 40,
    height: 35,
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

export default ProductCardThree;
