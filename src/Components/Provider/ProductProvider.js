import React, { useContext, useReducer } from 'react';

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();

const initialState = [
    { title: 'React', price: '99 $', id: 1, count: 2 },
    { title: 'Node', price: '85 $', id: 2, count: 3 },
    { title: 'javascript', price: '77 $', id: 3, count: 5 }

];

const reducer = (state, action) => {
    switch (action.type) {
        case "delete": {
            const filtering = state.filter((p) => p.id !== action.id)
            return filtering;
        }
        case "increment": {
            const index = state.findIndex((p) => p.id === action.id);
            const product = { ...state[index] };
            product.count++;
            const productsUpdated = [...state];
            productsUpdated[index] = product;
            return productsUpdated;

        }
        case "decrement": {
            const index = state.findIndex(item => item.id === action.id);
            const Newproduct = { ...state[index] };

            if (Newproduct.count > 1) {
                Newproduct.count--;
                const productsUpdated = [...state];
                productsUpdated[index] = Newproduct;
                return productsUpdated;


            } else {
                // filter not mutate state
                const filterProducts = state.filter(item => item.id !== action.id);
                return filterProducts;

            }

        }
        case "change": {
            const index = state.findIndex(item => item.id === action.id);
            const Newproduct = { ...state[index] };
            Newproduct.title = action.event.target.value;

            const productsUpdated = [...state];
            productsUpdated[index] = Newproduct;
            return productsUpdated;

        }
        default: return state;



    }
}



const ProductProvider = ({ children }) => {

    const [products, dispatch] = useReducer(reducer, initialState);


    return (
        <ProductContext.Provider value={products}>
            <ProductContextDispatcher.Provider value={dispatch}>
                {children}
            </ProductContextDispatcher.Provider>
        </ProductContext.Provider>
    );
}


export default ProductProvider;

export const useProducts = () => useContext(ProductContext);
export const useProductsAction = () => useContext(ProductContextDispatcher);



