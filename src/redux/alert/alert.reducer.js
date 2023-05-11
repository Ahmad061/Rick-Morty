import { alertConstants } from './index';

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      console.log(action);
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertConstants.WARNING:
      return {
        type: 'alert-warning',
        message: action.message
      };
    case alertConstants.INFO:
      return {
        type: 'alert-info',
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
}
