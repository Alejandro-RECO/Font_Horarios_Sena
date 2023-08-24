export const dataBase = async () => {
    try {
        const response = await fetch('http://localhost:5000/products');
        const json = await response.json();
        const products = json.products;

        console.log('datos ',json)

        return products.map(product => ({
            id: product.name,
            price: product.price,
            quantity: product.quantity
        }));
    } catch (e) {
        throw new Error('Error fetching data');
    }
}
