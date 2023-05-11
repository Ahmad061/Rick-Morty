import { generalConstants, generalService } from ".";
import { alertActions } from "../alert";

export const generalActions = {
  getData,
};

function getData(query) {
  return (dispatch) => {
    dispatch(request());
    generalService.getData(query).then(
      (res) => {
        dispatch(success(res));
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log(error);
        dispatch(alertActions.error(error?.message ? error.message : "Error"));
      }
    );
  };

  function request() {
    return { type: generalConstants.GET_DATA_REQUEST };
  }
  function success(data) {
    return {
      type: generalConstants.GET_DATA_SUCCESS,
      data,
    };
  }
  function failure(error) {
    return {
      type: generalConstants.GET_DATA_FAILURE,
      error,
    };
  }
}
