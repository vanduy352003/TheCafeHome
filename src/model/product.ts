interface Category {
    categoryId: number;
    categoryName: string;
    imageUrl: string;
  }
  
  interface Variant {
    variantId: number;
    variantName: string;
  }
  
  interface Topping {
    toppingId: number;
    price: number;
    toppingName: string;
  }
  
  class Product {
    productId: number;
    productName: string;
    imageUrl: string | null;
    description: string;
    category: Category;
    productVariant: { id: number; product: number; variant: Variant; price: number }[];
    toppings: Topping[];
  
    constructor(
      productId: number,
      productName: string,
      imageUrl: string | null,
      description: string,
      category: Category,
      productVariant: { id: number; product: number; variant: Variant; price: number }[],
      toppings: Topping[]
    ) {
      this.productId = productId;
      this.productName = productName;
      this.imageUrl = imageUrl;
      this.description = description;
      this.category = category;
      this.productVariant = productVariant;
      this.toppings = toppings;
    }
  }