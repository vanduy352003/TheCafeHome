
import React from 'react';

import {
    Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useBearStore } from '../hooks/useCart';

type CategoryProp = {
    name: string
}

function CategoryCard(name:string): React.JSX.Element {
  return (
    <TouchableOpacity style={styles.categoryItem}>
        <Image style={styles.categoryImage} source={require('../assets/images/hongtra.png')}/>
        <Text style={styles.categoryName}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryItem: {
    width: 80,
    height: 80,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '400'
  }
});

export default CategoryCard;
