export const ProductList = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 10.99,
            description: 'This is product 1',
        }, {
            id: 2,
            name: 'Product 2',
            price: 20.99,
            description: 'This is product 2',
        }, {
            id: 3,
            name: 'Product 3',
            price: 30.99,
            description: 'This is product 3',
        }, {
            id: 4,
            name: 'Product 4',
            price: 40.99,
            description: 'This is product 4',
        }
    ]; // Example product data

    const ProductElements = products.map((product) => (
        <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    ))

    return (
        <div>
            <h2>Product List</h2>
            {ProductElements}
        </div>
    )
}