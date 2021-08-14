import React, { Component } from 'react';
import Product from '../Product/Product';
import { useProducts, useProductsAction } from '../Provider/ProductProvider';

const ProductList = () => {
    const products = useProducts();
    const { decHandler, deleteHandler, incHandler, changeHandler } = useProductsAction();


    return (
        <>
            {!products.length && <p>empty</p>}

            {products.map(product => {
                return <Product key={product.id} name={product.title} price={product.price} count={product.count}
                    onDelete={() => deleteHandler(product.id)}
                    onInc={() => incHandler(product.id)}
                    onChange={(e) => changeHandler(e, product.id)}
                    onDec={() => decHandler(product.id)}
                />
            })}

        </>
    );
}

export default ProductList;

