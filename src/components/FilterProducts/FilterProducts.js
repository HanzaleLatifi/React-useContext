import { useProductsAction } from '../Provider/ProductProvider';
import React, { useState } from 'react';
import Select from 'react-select';
import styles from './Filter.module.css'
import Search from '../Search/Search';

const options = [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'X', label: 'X' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },

];
const sortOptions = [
    { value: 'highest', label: 'highest' },
    { value: 'lowest', label: 'lowest' },
]
const FilterProducts = () => {
    const dispatch = useProductsAction();

    const [filter, setFilter] = useState('') //maybe lazem shod ;/
    const [sort, setSort] = useState('');



    const changeHandler = (selectedOption) => {
        setFilter(selectedOption);
        dispatch({ type: 'filter', selected: selectedOption })
        dispatch({ type: 'sort', selected: sort })



    }
    const sortHandler = (selectedOption) => {
        setSort(selectedOption);
        dispatch({ type: 'sort', selected: selectedOption })

    }


    return (
        <div  >
            <Search filter={filter} />
            <div className={styles.filter}>
                <div>
                    <p>order by size :</p>
                    <Select
                        value={filter}
                        onChange={changeHandler}
                        options={options}
                        className={styles.select}
                    />
                </div>
                <div>
                    <p>order by price :</p>
                    <Select
                        value={sort}
                        onChange={sortHandler}
                        options={sortOptions}
                        className={styles.select}
                    />
                </div>
            </div>



        </div >
    );
}

export default FilterProducts;