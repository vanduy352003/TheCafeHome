import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import HeaderBar from "../components/HeaderBar";

const window = Dimensions.get('window');

function CheckoutScreen({navigation}:any): React.JSX.Element {
    
    const handlePressThem = () => {
        navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <HeaderBar title="Check out"></HeaderBar>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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
                                <Text style={[styles.textBold, styles.mb5]}>65 D.Cao Thắng</Text>
                                <Text style={styles.addressText} numberOfLines={1}>65 D.Cao Thắng, Phường 3, Quận 3, Thành phố Hồ Chí Minh, Việt Nam</Text>
                            </View>
                            <TouchableOpacity style={styles.addressButton}>
                                <IconEntypo style={styles.addressIcon} name="chevron-right"></IconEntypo>
                            </TouchableOpacity>
                        </View>
                        <TextInput style={styles.noteText} placeholder="Thêm hướng dẫn giao hàng"></TextInput>
                        <View style={styles.flexDirectionRow}>
                            <View style={styles.doubleColumn}>
                                <Text style={[styles.mb5, {color: 'black'}]}>Duy Tran</Text>
                                <Text >0123456789</Text>
                            </View>
                            <View style={styles.seperator}></View>
                            <View style={styles.doubleColumn}>
                                <Text style={[styles.mb5, {color: 'black'}]}>15-30 phút</Text>
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
                        <TouchableOpacity style={[styles.button, styles.flexDirectionRow]} onPress={handlePressThem}>
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
                                <Text>Chan trau</Text>
                                <Text>Thach dua</Text>
                            </View>
                        </View>
                        <Text style={styles.moneyText}>65.000đ</Text>
                    </View>
                    <View style={styles.viewItemSection}>
                        <View style={styles.productItem}>
                            <IconFontAwesome style={styles.productItemIcon} name='pencil'></IconFontAwesome>
                            <View>
                                <Text style={styles.textBold}>1x Smoothie Phúc Bồn Tử Granola</Text>
                                <Text>Nhỏ</Text>
                                <Text>Chan trau</Text>
                                <Text>Thach dua</Text>
                            </View>
                        </View>
                        <Text style={styles.moneyText}>65.000đ</Text>
                    </View>
                    <View style={styles.viewItemSection}>
                        <View style={styles.productItem}>
                            <IconFontAwesome style={styles.productItemIcon} name='pencil'></IconFontAwesome>
                            <View>
                                <Text style={styles.textBold}>1x Smoothie Phúc Bồn Tử Granola</Text>
                                <Text>Nhỏ</Text>
                                <Text>Chan trau</Text>
                                <Text>Thach dua</Text>
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
            </ScrollView>
            <View style={styles.bottomSection}>
                <View>
                    <View style={[styles.flexDirectionRow]}>
                        <Text style={[styles.whiteText, styles.bigText]}>Giao hàng</Text>
                        <IconEntypo style={[styles.whiteText, styles.bigText]} name="dot-single"></IconEntypo>
                        <Text style={[styles.whiteText, styles.bigText]}>1 sản phẩm</Text>
                    </View>
                    <Text style={[styles.headerText, styles.whiteText, styles.bigText]}>83.000đ</Text>
                </View>
                <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.orderButtonText}>ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
    mb5: {
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
        justifyContent: 'center',
        alignItems: 'center'
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#56a568',
        height: '20%',
        paddingTop: 20,
        paddingHorizontal: 10
    },
    scrollView: {
        height: '80%',
    },
    orderButton: {
        backgroundColor: 'white',
        height: 40,
        width: 100,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    orderButtonText: {
        color: '#56a568',
        fontSize: 16,
        fontWeight: '500'
    },
    whiteText: {
        color: 'white'
    },
    bigText: {
        fontSize: 20
    }
})

export default CheckoutScreen;