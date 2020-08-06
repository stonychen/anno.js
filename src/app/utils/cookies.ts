import Cookies from 'js-cookie'

const tokenKey = 'het_token'
export const getToken = () => {
  return Cookies.get(tokenKey)
}

export const setToken = (val: string) => {
  Cookies.set(tokenKey, val, { expires: 365 })
}

export const removeToken = () => {
  Cookies.remove(tokenKey)
}
