import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    //get products
    const productsData = await fetch('https://ema-johns.vercel.app/products');
    const { products } = await productsData.json();

    //get cart
    const savedCart = getStoredCart();
    const previousCart = [];
    // console.log(products);

    for (const id in savedCart) {
        const addedProduct = products.find(product => product._id === id)
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity
            previousCart.push(addedProduct)

        }

    }
    return { products, initialCart: previousCart };
}