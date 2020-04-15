import { SHOW_ALERT, START_LOADER, STOP_LOADER, HIDE_ALERT } from "./../../shared/actionType";

export const showAlert = () => {
  return {
    type: SHOW_ALERT
  }
}

export const hideAlert = () => {
    return {
      type: HIDE_ALERT
    }
}

export const startLoader = () => {
    return {
      type: START_LOADER
    }
}

export const stopLoader = () => {
    return {
      type: STOP_LOADER
    }
  }