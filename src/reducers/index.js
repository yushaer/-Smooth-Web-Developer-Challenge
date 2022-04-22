import { fetchBusinesses, loading } from "../constants/actionTypes";

/**
 * 
 *  main reducer to handle all the actions and state changes for businesses
 */
export const reducer = (state = { isLoading: true, businesses: [] }, action) => {
    switch (action.type) {
        case fetchBusinesses:

            return {
                ...state,
                isLoading: true,
                businesses: action.payload
            };
        case loading:
            return {
                ...state,
                isLoading: action.payload
            };

        default:
            return state;
    }
}
