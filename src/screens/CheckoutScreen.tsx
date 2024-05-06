import React from "react";
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

const window = Dimensions.get('window');

function CheckoutScreen({navigation}:any): React.JSX.Element {
    
    return(
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <TouchableOpacity>
                    <Text style={styles.deleteText}>Xóa</Text>
                </TouchableOpacity>
                <Text style={styles.headerSectionText}>Xác nhận đơn hàng</Text>
                <TouchableOpacity>
                    <IconEntypo style={styles.closeIcon} name='cross'></IconEntypo>
                </TouchableOpacity>
            </View>
            {/* Thông tin giao hàng */}
            <View style={styles.viewItem}>
                <View style={styles.viewHeaderSection}>
                    <Text style={styles.headerText}>Giao hàng tận nơi</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Thay đổi</Text>
                    </TouchableOpacity>
                </View>
                {/* Đặt giao */}
                <View>
                    <View style={styles.addressSection}>
                        <View>
                            <Text style={[styles.textBold, styles.mb10]}>65 D.Cao Thắng</Text>
                            <Text style={styles.addressText} numberOfLines={1}>65 D.Cao Thắng, Phường 3, Quận 3, Thành phố Hồ Chí Minh, Việt Nam</Text>
                        </View>
                        <TouchableOpacity style={styles.addressButton}>
                            <IconEntypo style={styles.addressIcon} name="chevron-right"></IconEntypo>
                        </TouchableOpacity>
                    </View>
                    <TextInput style={styles.noteText} placeholder="Thêm hướng dẫn giao hàng"></TextInput>
                    <View style={styles.flexDirectionRow}>
                        <View style={styles.doubleColumn}>
                            <Text style={[styles.mb10, {color: 'black'}]}>Duy Tran</Text>
                            <Text >0123456789</Text>
                        </View>
                        <View style={styles.seperator}></View>
                        <View style={styles.doubleColumn}>
                            <Text style={[styles.mb10, {color: 'black'}]}>15-30 phút</Text>
                            <Text>Càng sớm càng tốt</Text>
                        </View>
                    </View>
                </View>

                {/* Đến lấy */}
            </View>
            {/* Thông tin giao hàng */}

            <View style={styles.viewItem}>
                <View style={styles.viewHeaderSection}>
                    <Text style={styles.headerText}>Sản phẩm đã chọn</Text>
                    <TouchableOpacity style={[styles.button, styles.flexDirectionRow]}>
                        <IconEntypo style={styles.buttonText} name='plus'></IconEntypo>
                        <Text style={styles.buttonText}>Thêm</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewItemSection}>
                    <View style={styles.productItem}>
                        <IconFontAwesome style={styles.productItemIcon} name='pencil'></IconFontAwesome>
                        <View>
                            <Text style={styles.textBold}>1x Smoothie Phúc Bồn Tử Granola</Text>
                            <Text>Nhỏ</Text>
                        </View>
                    </View>
                    <Text style={styles.moneyText}>65.000đ</Text>
                </View>
                
            </View>
            <View style={styles.viewItem}>
                <Text style={styles.headerText}>Tổng cộng</Text>
                <View>
                    <Text>Thành tiền</Text>
                    <Text>65.000đ</Text>
                </View>
                <View>
                    <Text>Phí giao hàng</Text>
                    <Text>100.000đ</Text>
                </View>
            </View>
            <View style={styles.bottomSection}>
                <View>
                    <View>
                        <Text>Giao hàng</Text>
                        <IconEntypo name="dot-single"></IconEntypo>
                        <Text>1 sản phẩm</Text>
                    </View>
                    <Text>83.000đ</Text>
                </View>
                <TouchableOpacity>
                    <Text>ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
    },
    headerSection: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 10
    },
    headerSectionText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
    },
    deleteText: {
        color: 'grey',
        fontSize: 16,
        fontWeight: '500'
    },
    closeIcon: {
        color: 'black',
        fontSize: 30,
        fontWeight: '800'
    },
    headerText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 30
    },
    button: {
        backgroundColor: '#56a568',
        height: 40,
        width: 100,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    },
    viewHeaderSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewItem: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        marginTop: 20,
        paddingVertical: 10,
    },
    addressSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addressText: {
        width: 3*window.width/4
    },
    addressIcon: {
        fontSize: 16,
        color: 'black'
    },
    addressButton: {
        width: window.width/4 - 20,
        height : 30,
        alignItems:'flex-end',
        justifyContent: 'center'
    },
    textBold: {
        color: 'black',
        fontWeight: '600',
        fontSize: 16
    },
    mb10: {
        marginBottom: 5,
    },
    noteText: {
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: 'grey',
        marginVertical: 15,
        borderTopWidth: 0.1,
        marginHorizontal: 10
    },
    flexDirectionRow: {
        flexDirection: 'row',
        marginBottom: 10
    },
    doubleColumn: {
        width: window.width/2 - 40,
        borderStyle: 'dashed',
        borderBottomWidth: 1,
        borderColor: 'grey',
        height: 55
    },
    seperator: {
        borderWidth: 0.2,
        marginHorizontal: 15,
        borderColor: 'grey'
    },
    productItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    productItemIcon: {
        color: '#56a568',
        marginRight: 20
    },
    moneyText: {
        fontWeight: '500',
        color: 'black',
    },
    viewItemSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 5
    },
    bottomSection: {
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default CheckoutScreen;