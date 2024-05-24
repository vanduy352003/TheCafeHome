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
import DetailButton from './DetailButton';
import { Product } from '../model/product';

const window = Dimensions.get('window');

type productProp = {
  products : Product[];
  navigateToDetail: Function;
};

function ProductHorizontalSection({products, navigateToDetail}:productProp): React.JSX.Element {
  return (
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={products}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}
        renderItem={itemData => {
          return (
            <DetailButton product={itemData.item} navigateToDetail = {navigateToDetail}>
              <View style={styles.productItem}>
                <Image
                  style={styles.productImage}
                  resizeMode="cover"
                  source={itemData.item.imageUrl?{uri:itemData.item.imageUrl}:require('../assets/images/hongtra.png')}
                />
                <Text style={styles.productName}>{itemData.item.productName}</Text>
                <Text style={styles.productPrice}>{itemData.item.productPrice}</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.buttonText}>Lấy</Text>
                </TouchableOpacity>
              </View>
            </DetailButton>
          );
        }}
        keyExtractor={(item, index) => index.toString()}></FlatList>
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
    marginVertical: 5,
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
