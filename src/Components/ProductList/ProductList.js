import React, { Component } from 'react';
import Product from '../Product/Product';

class ProductList extends Component {

    render() {
        return (
            <>
                {!this.props.products.length && <p>empty</p>}

                {this.props.products.map(product => {
                    return <Product key={product.id} name={product.title} price={product.price} count={product.count}
                        onDelete={() => this.props.onDelete(product.id)}
                        onInc={() => this.props.onInc(product.id)}
                        onChange={(e) => this.props.onChange(e, product.id)}
                        onDec={() => this.props.onDec(product.id)}
                    />
                })}

            </>
        );
    }
}

export default ProductList;