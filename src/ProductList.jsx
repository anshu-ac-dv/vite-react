export const ProductList = () => {
    const products = [{
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
    }]; // Example product data
    return (
        <div>
            <h1>Product List</h1>
            {
                products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                ))
            }
        </div>
    )
}