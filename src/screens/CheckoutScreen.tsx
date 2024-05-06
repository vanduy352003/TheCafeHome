import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
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
                    <View>
                        <View>

                        </View>
                        <TouchableOpacity>
                            <IconEntypo name="chevron-right"></IconEntypo>
                        </TouchableOpacity>
                    </View>
                    <TextInput placeholder="Thêm hướng dẫn giao hàng"></TextInput>
                    <View>
                        <View>
                            <Text>Duy Tran</Text>
                            <Text>0123456789</Text>
                        </View>
                        <View>
                            <Text>15-30 phút</Text>
                            <Text>Càng sớm càng tốt</Text>
                        </View>
                    </View>
                </View>

                {/* Đến lấy */}
            </View>
            {/* Thông tin giao hàng */}

            <View>
                <View>
                    <Text style={styles.headerText}>Sản phẩm đã chọn</Text>
                    <TouchableOpacity>
                        <IconEntypo name='plus'></IconEntypo>
                        <Text>Thêm</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <IconFontAwesome name='pencil'></IconFontAwesome>
                    <View>
                        <Text>1x Smoothie Phúc Bồn Tử Granola</Text>
                        <Text>Nhỏ</Text>
                    </View>
                    <Text>65.000đ</Text>
                </View>
            </View>
            <View>
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
            <View>
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
        fontWeight: '500'
    },
    button: {
        backgroundColor: 'lightgreen',
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
        paddingHorizontal: 10
    }

})

export default CheckoutScreen;