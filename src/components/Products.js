import React, { useContext } from 'react';
import { ProductContext } from "../contexts/ProductContext"
// Components
import Product from './Product';

const Products = () => {
	const products = useContext(ProductContext)
	console.log(products)
	return (
		<div className="products-container">
			{products.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={products.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
