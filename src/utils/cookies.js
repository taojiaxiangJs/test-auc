import Cookies from 'js-cookie'

export const setCookies = (key, value) => Cookies.set(key,value)
export const getCookies = (key) => Cookies.get(key)
export const removeCookies = (key) => Cookies.remove(key)