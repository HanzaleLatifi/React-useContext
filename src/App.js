import React, { useState } from 'react';
import styles from './App.module.css'
import ProductList from './components/ProductList/ProductList';
import Navbar from './components/Navbar/Navbar';
import ProductProvider from './components/Provider/ProductProvider';
import FilterProducts from './components/FilterProducts/FilterProducts';
import Search from './components/Search/Search';

const App = () => {


    return (
        <div className={styles.container}>

            <ProductProvider>
                <Navbar />
                <FilterProducts />
                <ProductList />
            </ProductProvider>

        </div>

    );
}





export default App;