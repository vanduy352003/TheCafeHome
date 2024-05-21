import React, {forwardRef, useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, Alert} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {useDeliveryStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

type Ref = BottomSheet;
const window = Dimensions.get('window');

const LocationBottomSheet = forwardRef<Ref>((props, ref) => {
  const tabBarHeight = useBottomTabBarHeight();
  const {onClose} = props;
  const snapPoints = useMemo(() => [tabBarHeight + 200], []);
  const handlePressClose = () => {
    if (onClose) onClose();
  };
  
  return (
    <BottomSheet
      index={-1}
      ref={ref}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onClose={onClose}
      style={styles.bottomSheetContainer}
      handleIndicatorStyle={{backgroundColor: 'white'}}>
      <View style={[styles.flexDirectionRow, styles.headerSection]}>
        <Text style={styles.bottomSheetHeader}>OoLong Tứ Quý Vãi</Text>
        <TouchableOpacity onPress={handlePressClose}>
          <IconIonicons
            style={[styles.icon, styles.rightAligned]}
            name="close"></IconIonicons>
        </TouchableOpacity>
      </View>
      <View>
        
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  bottomSheetContainer: {
    elevation: 10,
  },
  bottomSheetHeader: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    flex: 1,
    textAlign: 'center',
  },
  flexDirectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#56a568',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
    color:"black",
    marginRight : 10
  },
  headerSection: {
    // justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  rightAligned: {
    marginLeft: 'auto',
  },
});

export default LocationBottomSheet;
