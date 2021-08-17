import React, { useState } from 'react';
import { useProductsAction } from '../Provider/ProductProvider';
import styles from './Search.module.css'
const Search = () => {
    const [val, setVal] = useState("");
    const dispatch = useProductsAction();

    const searchHandler = (e) => {
        setVal(e.target.value);
        dispatch({ type: 'search', event: e });

    }

    return (
        <div>
            <input className={styles.input} onChange={searchHandler} placeholder="serach here ..." value={val}></input>

        </div>
    );
}

export default Search;