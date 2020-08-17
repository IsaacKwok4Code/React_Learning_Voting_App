import React , { Component }from 'react';
import Product from '../product/Product';
import products from '../data/data';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };

        this.handleProductUpVote = this.handleProductUpVote.bind(this)
    }

    componentDidMount() {
        this.setState({ products: products });
    }

    handleProductUpVote = (productId) => {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + 1,
                });
            } else {
                return product;
            }
        });
        this.setState({
            products: nextProducts,
        });
    }

    render(){
        const sortedProducts = products.sort((a, b) => (
            b.votes - a.votes
        ));

        const productComponents = sortedProducts.map( (product) => (
            <Product
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpVote}
            />
        ));
        return(
            <div className="ui unstackable items">
                {productComponents}
            </div>
        );
    }
}

export default ProductList;