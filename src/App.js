import React from 'react';
import styles from './App.module.css'
import ProductList from './components/ProductList/ProductList';
import Navbar from './components/Navbar/Navbar';

class App extends React.Component {
    state = {
        products: [
            { title: 'React', price: '99 $', id: 1, count: 2 },
            { title: 'Node', price: '85 $', id: 2, count: 3 },
            { title: 'javascript', price: '77 $', id: 3, count: 5 }

        ],

    }
    deleteHandler = (id) => {
        const filtering = this.state.products.filter((p) => p.id !== id)
        // console.log(filtering);
        this.setState({ products: filtering })


    }
    incHandler = (id) => {
        const index = this.state.products.findIndex((i) => i.id === id);
        //clone product
        const product = { ...this.state.products[index] };
        product.count++;
        //cloneproducts
        const products = [...this.state.products];
        products[index] = product;
        this.setState({ products });
        // const items = [...this.state.products];
        // const find = items.find((p) => p.id === id);
        // find.count++; //muted state;
        // this.setState({ product: items });

    }
    decHandler = (id) => {
        const products = [...this.state.products];
        const find = products.find(p => p.id === id);
        if (find.count > 1) {
            find.count--;
            this.setState({ products })
        } else {
            const filter = products.filter(p => p.id !== id);
            this.setState({ products: filter });
        }


    }
    changeHandler = (e, id) => {
        const products = [...this.state.products];
        const find = products.find((p) => p.id === id);
        find.title = e.target.value;
        this.setState({ products })


    }

    render() {
        return (
            <div className={styles.container}>
                <h1>Shopping  </h1>
                <ProductList products={this.state.products}
                    onDelete={this.deleteHandler}
                    onInc={this.incHandler}
                    onDec={this.decHandler}
                    onChange={this.changeHandler}
                />
                <Navbar totalItems={this.state.products} />
            </div>
        );
    }
}


export default App;