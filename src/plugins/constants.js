import Vue from "vue"

export const RESPONSE_API = {
  SUCCESS: 'success',
  ERROR: 'error',
}

export const VALID_LENGTH = {
  MAX: 255,
  MIN: 8,
  EMAIL: 50,
  PASSWORD: 6,
  NAME: 100,
}

Vue.prototype.$constants = {
  VALID_LENGTH,
  RESPONSE_API
}