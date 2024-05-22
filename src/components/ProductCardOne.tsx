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
import DetailButton from './DetailButton';
import { formatMoney } from '../utils/format';

const window = Dimensions.get('window');

type productProp = {
  product: Product;
  navigateToDetail: Function;
};

function ProductCardOne({product, navigateToDetail}: productProp): React.JSX.Element {
  return (
    <DetailButton navigateToDetail={navigateToDetail} product={product}>
      <View style={styles.productItem}>
        <Image
          style={styles.productImage}
          resizeMode="cover"
          source={product.imageUrl?{uri:product.imageUrl}:require('../assets/images/hongtra.png')}
        />
        <Text style={styles.productName}>{product.productName}</Text>
        <View style={styles.cardViewItem}>
          <Text style={styles.productPrice}>{formatMoney(product.productVariant[0]?product.productVariant[0].price:0)}đ</Text>
          <TouchableOpacity style={styles.addButton}>
            <Icon name="plus" size={24} color="white"></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </DetailButton>
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
  productItem: {
    marginBottom: 10,
  },
});

export default ProductCardOne;
