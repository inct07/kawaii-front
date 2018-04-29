import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImagesIfNeeded } from '../actions/actions';
import Item from './Item';

class MainList extends Component {
    componentDidMount() {
        this.props.dispatch(getImagesIfNeeded());
    }
    render() {
        if (this.props.images.isFetching) {
            return <img src="./loading.gif" alt="loading" />;
        }
        console.log('mainList');
        console.log(this.props);
        return (
            <div>
                {this.props.images.images.map((data, index) => {
                    return <Item {...data} />;
                })}
            </div>
        );
    }
}

// export default MainList;
export default connect(state => state)(MainList);
