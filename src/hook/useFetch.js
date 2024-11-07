/**
 * @param {string} path
 * @param {method} string
 * @param {any} body
 * @param {string} token
 * 
 * @description
 * 경로를 입력합니다.
 */

const useFetch = async (path, method='GET', body='', token='') => {
  const baseServerUrl = 'http://127.0.0.1:8080'
  let req = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      'Authorization' : `Bearer ${token}`
    },
    body : JSON.stringify(body)
  }
  if(method === 'GET') req = { method }
  const res = await fetch(baseServerUrl+path, req)
  return res.json()
}

export default useFetch