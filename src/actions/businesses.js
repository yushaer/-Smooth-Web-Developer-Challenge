import { loading, fetchBusinesses, fetchBusinessesFailure } from "../constants/actionTypes";
import * as api from "../api";

const getBusinesses = () => async (dispatch) => {

    try {
        dispatch({ type: loading, payload: true });
        const { data } = await api.fetchBusinesses();

        dispatch({ type: fetchBusinesses, payload: data });
        dispatch({ type: loading, payload: false });
    } catch (error) {
        dispatch({ type: fetchBusinesses, payload: [] });
    }
}
export default getBusinesses;