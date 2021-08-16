import { useProductsAction } from '../Provider/ProductProvider';
import React from 'react';
const FilterProducts = () => {
    const dispatch = useProductsAction();


    return (
        <div>
            <select onChange={(e) => dispatch({ type: 'filter', event: e })}>

                <option value="">All</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
        </div>
    );
}

export default FilterProducts;