import React, { Component } from 'react';
import Product from '../Product/Product';
import { useProducts, useProductsAction } from '../Provider/ProductProvider';

const ProductList = () => {
    const products = useProducts();
    const dispatch = useProductsAction();


    return (
        <>
            {!products.length && <p>empty</p>}

            {products.map(product => {
                return <Product key={product.id} name={product.title} price={product.price} count={product.count}
                    onDelete={() => dispatch({ type: 'delete', id: product.id })}
                    onInc={() => dispatch({ type: 'increment', id: product.id })}
                    onChange={(e) => dispatch({ type: 'change', id: product.id, event: e })}
                    onDec={() => dispatch({ type: 'decrement', id: product.id })}
                />
            })}

        </>
    );
}

export default ProductList;

