import React, { Component } from 'react';

class Item extends Component {
    render() {
        console.log('item');
        console.log(this.props);
        return (
            <div>
                <div class="name">{this.props.name}</div>
                <div class="img">
                    <img src={this.props.url} alt={this.props.name} />
                </div>
            </div>
        );
    }
}

export default Item;
