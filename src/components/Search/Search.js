import React, { useState } from 'react';
import { useProductsAction } from '../Provider/ProductProvider';
import styles from './Search.module.css'
const Search = ({ filter }) => {
    const [val, setVal] = useState("");
    const dispatch = useProductsAction();

    const searchHandler = (e) => {
        setVal(e.target.value);
        dispatch({ type: 'filter', selected: filter });
        dispatch({ type: 'search', event: e });


    }

    return (
        <div>
            <input className={styles.input} onChange={searchHandler} placeholder="serach here ..." value={val}></input>

        </div>
    );
}

export default Search;