// types
import { GET_USER_DETAILS_REQUEST, GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_FAILURE } from './types';

/**
 * Get userDetails request action creator
 *
 * @returns {GetUserDetailsActionSuccess}
 */
export const getUserDetailsRequest = () => {
	return {
		type: GET_USER_DETAILS_REQUEST,
		isLoading: true,
	};
};

/**
 * Get userDetails success action creator
 *
 * @returns {GetUserDetailsActionSuccess}
 */
export const getUserDetailsSuccess = (userDetails) => {
	return {
		type: GET_USER_DETAILS_SUCCESS,
		userDetails,
		isLoading: false,
	};
};

/**
 * Get userDetails failure action creator
 *
 * @returns {GetUserDetailsActionSuccess}
 */
export const getUserDetailsFailure = (error) => {
	return {
		type: GET_USER_DETAILS_FAILURE,
		error,
		isLoading: false,
	};
};

/**
 * Gets user details
 *
 * @param {string} personId
 *
 * @returns {Function}
 */
export const getUserDetails = () => (dispatch, getState, http) => {
	dispatch(getUserDetailsRequest());
	return http
		.get(`/users`, { cache: true })
		.then((response) => {
			return dispatch(getUserDetailsSuccess(response.data.data));
		})
		.catch((error) => {
			dispatch(getUserDetailsFailure(error));
		});
};


// Thunk -- ensure this is always at the end of the file
// initial state
const userInitialState = {
	userDetails: [],
	isLoading: false,
	error: {},
};

/**
 * Updates the user state in the application
 *
 * @param {Object} state
 * @param {AnyAction} action
 *
 * @returns {Object} state
 */
export const reducer = (state = userInitialState, action) => {
	switch (action.type) {
    case GET_USER_DETAILS_REQUEST: {
      return {
				...state,
				...action.isLoading,
			};
    }
		case GET_USER_DETAILS_SUCCESS: {
      return {
				...state,
        ...action.userDetails,
        ...action.isLoading
			};
    }
    case GET_USER_DETAILS_FAILURE: {
      return {
				...state,
        ...action.error,
        ...action.isLoading
			};
    }
		default:
			return state;
	}
};

export default reducer;
