import React , { Component }from 'react';
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.handleUpVote = this.handleUpVote.bind(this);
    }

    handleUpVote = () => {
        this.props.onVote(this.props.id);
    }

    render(){
        return(
            <div className="item">
                <div className='image'>
                    <img src={this.props.productImageUrl} alt="product_img" />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleUpVote} href="/"><i className='large caret up icon'>{this.props.votes}</i></a>
                    </div>
                    <div className='description'>
                        <a href={this.props.url}>{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img className='ui avatar image' alt="ui_avatar_image" src={this.props.submitterAvatarUrl} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;