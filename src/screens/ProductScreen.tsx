import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderBar from "../components/HeaderBar";
import ProductHorizontalSection from "../components/ProductHorizontalSection";
import CategorySection from "../components/CategorySection";
import ProductCardOne from "../components/ProductCardOne";
import ProductCardThree from "../components/ProductCardThree";

const productList = [
    {name: 'Trà sữa', price: 10, id: '1'},
    {name: 'Trà sữa đào', price: 20, id: '2'},
    {name: 'Trà sữa matcha', price: 30, id: '3'},
    {name: 'Trà sữa cam', price: 40, id: '4'},
    {name: 'Cà phê trà', price: 50, id: '5'},
    {name: 'Cà phê sửa', price: 60, id: '6'},
  ];

function ProductScreen({navigation}:any): React.JSX.Element {
  const tabBarHeight = useBottomTabBarHeight();

  const handlePressCard = () => {
    navigation.push('Detail')
  }

  const handlePressSearch = () => {
    navigation.push('Search')
  }

  const handlePressFavorite = () => {
    navigation.push('Favorite')
  }

  return (
    <View style={{paddingBottom:tabBarHeight}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderBar title="Product"></HeaderBar>
        <View style={styles.container}>
          <CategorySection navigateToFavorite={handlePressFavorite} navigateToSearch={handlePressSearch}></CategorySection>
          <Text style={styles.header}>Sản phẩm ưu đãi</Text>
          <View>
            {[...productList].map((item, index) => (
              <ProductCardThree
                key={index}
                product={productList[index]}
                navigateToDetail={handlePressCard}></ProductCardThree>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    marginTop: 18,
    marginBottom: 16,
  },
  introduceText: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
  },
  backgroundGreen: {
    backgroundColor: '#56a568',
    paddingBottom: 30,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    elevation: 10,
  }
});

export default ProductScreen;