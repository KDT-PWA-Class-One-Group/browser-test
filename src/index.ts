import './style.css'
import useFetch from "./hook/useFetch" 
import chartViewer from './chart/chartViewer'

const root = document.getElementById('root') as HTMLElement // HTMLElement인지 확인

const buildInsa = async () : Promise<void> => {
  const loadedTestData = await useFetch('/')
  const div = document.createElement('div')
  div.innerText = loadedTestData
  root.append(div)
}

const postTest = async () : Promise<void> => {
  const sendTest = await useFetch('/test', 'POST', '안녕하세요 브라우저에서 보냈어요', 'hi')
  const { result } = sendTest
  const div = document.createElement('div')
  div.innerText = result
  root.append(div)
}

const movieList = async () : Promise<void> => {
  const res = await useFetch('/movie-list')
  // console.log(res)
}

const preferenceCheck = async () : Promise<void> => {
  const url = {
    path: '/preference',
    query: ['age=12', 'v=뭐야']
  }
  const res = await useFetch(`${url.path}?${url.query.join('&')}`)
  console.log(res)
}
preferenceCheck()

const getAge = async () : Promise<void> => {
  const url = {
    path: '/user-info'
  }
  const res = await useFetch(`${url.path}`)
  console.log(res)
}
getAge()

// buildInsa()
// postTest()
// movieList()
// chartViewer()