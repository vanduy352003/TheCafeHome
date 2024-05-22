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
  const {onClose, handleQuickPick, handlePressToUserAddress} = props;
  const {deliveryType, setDeliveryType, takeAwayAddress, deliveryAddress} = useDeliveryStore();
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
        <Text style={styles.bottomSheetHeader}>Chọn phương thức đặt hàng</Text>
        <TouchableOpacity onPress={handlePressClose}>
          <IconIonicons
            style={[styles.icon, styles.rightAligned]}
            name="close"></IconIonicons>
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={[
            styles.flexDirectionRow,
            deliveryType == 'Delivery' ? styles.pickedDelivery : '',
          ]}>
          <IconMaterialIcons
            style={styles.icon}
            name="delivery-dining"></IconMaterialIcons>
          <View>
            <Text style={styles.text}>Giao hàng</Text>
            <Text numberOfLines={1} style={styles.textWidth}>
              Các sản phẩm sẽ được giao đến địa chỉ của bạn
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setDeliveryType('Delivery');
              handlePressClose();
              Object.keys(deliveryAddress).length == 0?handlePressToUserAddress():""
            }}>
            <Text>Sửa</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.flexDirectionRow,
            deliveryType == 'SelfTake' ? styles.pickedDelivery : '',
          ]}>
          <IconMaterialIcons
            style={styles.icon}
            name="front-hand"></IconMaterialIcons>
          <View>
            <Text style={styles.text}>Mang đi</Text>
            <Text numberOfLines={1} style={styles.textWidth}>
              Các sản phẩm sẽ được bạn lấy tại địa chỉ này
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setDeliveryType('SelfTake');
              handlePressClose();
              Object.keys(takeAwayAddress).length == 0?handleQuickPick():""
            }}>
            <Text>Sửa</Text>
          </TouchableOpacity>
        </View>
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
  pickedDelivery: {
    backgroundColor: '#d4f7e3',
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
  text : {
    color : "black"
  },
  textWidth: {
    width: (2 * window.width) / 3,
    color : "black"
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
