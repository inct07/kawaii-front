import { combineReducers } from 'redux';
import * as types from '../ActionTypes/ActionTypes';

function images(data = { isFetching: false, images: [] }, action) {
    console.log('image reducer');
    console.log(action);
    switch (action.type) {
    case types.FETCH_IMAGES:
        return Object.assign({}, { isFetching: true });
    case types.RECEIVE_IMAGES:
        console.log(action.images);
        return Object.assign(
            {},
            { isFetching: false, images: action.images }
        );
    default:
        return data;
    }
}
export default combineReducers({
    images
});
