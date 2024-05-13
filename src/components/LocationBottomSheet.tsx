import React, { forwardRef, useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconMaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';

type Ref = BottomSheet;

const LocationBottomSheet = forwardRef<Ref>((props, ref) => {
  const {onClose} = props
    const snapPoints = useMemo(()=>['25%'],[])    
  const handlePressClose = () => {
     if (onClose)
        onClose()
  }
  return (
        <BottomSheet
            index={-1}
            ref={ref}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onClose={onClose}
            style={styles.bottomSheetContainer}
            handleIndicatorStyle={{backgroundColor:'white'}}
        >
            <View style={styles.flexDirectionRow}>
                <Text style={styles.bottomSheetHeader}>Chọn phương thức đặt hàng</Text>
                <TouchableOpacity onPress={handlePressClose}>
                    <IconIonicons name="close"></IconIonicons>
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.flexDirectionRow}>
                    <IconMaterialIcons name="delivery-dining"></IconMaterialIcons>
                    <View>
                        <Text>Giao hàng</Text>
                        <Text>Các sản phẩm sẽ được giao đến địa chỉ của bạn</Text>
                    </View>
                    <TouchableOpacity>
                        <Text>Sửa</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.flexDirectionRow}>
                    <IconMaterialIcons name="front-hand"></IconMaterialIcons>
                    <View>
                        <Text>Giao hàng</Text>
                        <Text>Các sản phẩm sẽ được giao đến địa chỉ của bạn</Text>
                    </View>
                    <TouchableOpacity>
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
    paddingHorizontal: 20   
  },
  bottomSheetHeader: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black'
  },
  flexDirectionRow: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default LocationBottomSheet;