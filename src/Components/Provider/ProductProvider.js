import React, { useState, useContext } from 'react';

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();



const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([
        { title: 'React', price: '99 $', id: 1, count: 2 },
        { title: 'Node', price: '85 $', id: 2, count: 3 },
        { title: 'javascript', price: '77 $', id: 3, count: 5 }

    ]);

    return (
        <ProductContext.Provider value={products}>
            <ProductContextDispatcher.Provider value={setProducts}>
                {children}
            </ProductContextDispatcher.Provider>
        </ProductContext.Provider>
    );
}


export default ProductProvider;

export const useProducts = () => useContext(ProductContext);
export const useProductsAction = () => {
    const setProducts = useContext(ProductContextDispatcher);
    const products = useContext(ProductContext);

    const deleteHandler = (id) => {
        const filtering = products.filter((p) => p.id !== id)
        setProducts(filtering);
    }
    const incHandler = (id) => {
        const index = products.findIndex((p) => p.id === id);
        const product = { ...products[index] };
        product.count++;
        const productsUpdated = [...products];
        productsUpdated[index] = product;
        setProducts(productsUpdated);

    }
    const decHandler = (id) => {
        const index = products.findIndex(item => item.id === id);
        const Newproduct = { ...products[index] };

        if (Newproduct.count > 1) {
            Newproduct.count--;
            const productsUpdated = [...products];
            productsUpdated[index] = Newproduct;
            setProducts(productsUpdated);


        } else {
            // filter not mutate state
            const filterProducts = products.filter(item => item.id !== id);
            setProducts(filterProducts)

        }
    };

    const changeHandler = (e, id) => {
        const index = products.findIndex(item => item.id === id);
        const Newproduct = { ...products[index] };
        Newproduct.title = e.target.value;

        const productsUpdated = [...products];
        productsUpdated[index] = Newproduct;
        setProducts(productsUpdated);

    }
    return { changeHandler, decHandler, incHandler, deleteHandler };
}