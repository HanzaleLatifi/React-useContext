import { useProductsAction } from '../Provider/ProductProvider';
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'X', label: 'X' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },

];
const FilterProducts = () => {
    const dispatch = useProductsAction();

    const [val, setVal] = useState('') //maybe lazem shod ;/



    const changeHandler = (selectedOption) => {
        setVal(selectedOption);
        dispatch({ type: 'filter', event: selectedOption })

    }


    return (
        <div>

            <Select
                value={val}
                onChange={changeHandler}
                options={options}
            />

        </div >
    );
}

export default FilterProducts;