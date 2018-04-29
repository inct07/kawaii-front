import * as types from '../ActionTypes/ActionTypes';
import axios from 'axios';
import * as config from '../config/api';
function fetchImages() {
    return {
        type: types.FETCH_IMAGES
    };
}

function receiveImages(images) {
    return {
        type: types.RECEIVE_IMAGES,
        images: images
    };
}

export function getImages() {
    return dispatch => {
        dispatch(fetchImages());
        return axios
            .get(config.API_ENDPOINT)
            .then(data => dispatch(receiveImages(data.data)));
    };
}

export function getImagesIfNeeded() {
    return (dispatch, getState) => {
        if (getState().images.isFetching) {
            return Promise.resolve(0);
        } else {
            return dispatch(getImages());
        }
    };
}
