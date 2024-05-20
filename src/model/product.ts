
export class Product {
    productName: string;
    productPrice : number;
    id : string;
    size : any;
    topping : any;
    constructor() {
        this.productName = "Trà sữa";
        this.productPrice = 65000;
        this.id = "default";
    }
}

const defaultTopping = [
    ["No topping", 0],
    ["Topping 1", 5000],
    ["Topping 2", 10000],
    ["Topping 3", 15000],
]


export const productList : Product[] = [
    {productName: 'Trà sữa', productPrice: 10, id: '1', size : [['Nhỏ', 63000], ['Vừa', 65000], ['Lớn', 69000]], topping : defaultTopping},
    {productName: 'Trà sữa đào', productPrice: 20, id : '2', size : [['Nhỏ', 63000], ['Vừa', 65000], ['Lớn', 69000]], topping : defaultTopping},
    {productName: 'Trà sữa matcha', productPrice: 30, id : '3', size : [['Nhỏ', 63000], ['Vừa', 65000], ['Lớn', 69000]], topping : defaultTopping},
    {productName: 'Trà sữa cam', productPrice: 40, id : '4', size : [['Nhỏ', 63000], ['Vừa', 65000], ['Lớn', 69000]], topping : defaultTopping},
    {productName: 'Cà phê trà', productPrice: 50, id : '5', size : [['Nhỏ', 63000], ['Vừa', 65000], ['Lớn', 69000]], topping : defaultTopping},
    {productName: 'Cà phê sửa', productPrice: 60, id: '6', size : [['Nhỏ', 63000], ['Vừa', 65000], ['Lớn', 69000]], topping : defaultTopping},
];
  