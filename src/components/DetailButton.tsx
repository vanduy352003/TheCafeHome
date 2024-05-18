import { Touchable } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Product } from "../model/product"


type detailProp = {
    product: Product;
    navigateToDetail: Function;
    children: React.ReactNode;
};

export default 
function DetailButton({children, product, navigateToDetail} : detailProp): React.JSX.Element {
    const handlePress = () => {
        console.log(product)
        navigateToDetail(product)
    }
    return (
        <TouchableOpacity onPress={handlePress}>
            {children}
        </TouchableOpacity>
    )
}