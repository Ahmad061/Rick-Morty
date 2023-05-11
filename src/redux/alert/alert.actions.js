import { alertConstants } from './index'

export const alertActions = {
  success,
  info,
  warning,
  error,
  clear
}

function success (message) {
  return { type: alertConstants.SUCCESS, message }
}

function error (message) {
  return { type: alertConstants.ERROR, message }
}

function info (message) {
  return { type: alertConstants.INFO, message }
}

function warning (message) {
  return { type: alertConstants.WARNING, message }
}

function clear () {
  return { type: alertConstants.CLEAR }
}
