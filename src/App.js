import React, { useState } from 'react';
import styles from './App.module.css'
import ProductList from './components/ProductList/ProductList';
import Navbar from './components/Navbar/Navbar';
import ProductProvider from './components/Provider/ProductProvider';

const App = () => {


    return (
        <div className={styles.container}>
            <h1>Shopping  </h1>
            <ProductProvider>
                <ProductList />
                <Navbar />
            </ProductProvider>

        </div>

    );
}





export default App;