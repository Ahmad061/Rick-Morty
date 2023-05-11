/* eslint-disable no-return-assign */
import { generalConstants } from "./general.constants";

export function general(state = {}, action) {
  switch (action.type) {
    // getData
    case generalConstants.GET_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case generalConstants.GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        totalPages: action.data?.data?.characters?.info?.pages,
        graphData: action.data?.data,
      };
    case generalConstants.GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

       default:
      return state;
  }
}
