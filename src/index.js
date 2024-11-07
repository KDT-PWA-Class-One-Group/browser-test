import './style.css'
import useFetch from "./hook/useFetch.js"
import chartViewer from './Chart/chartViewer.js'

const root = document.getElementById('root')

const buildInsa = async () => {
  const loadedTestData = await useFetch('/')
  const div = document.createElement('div')
  div.innerText = loadedTestData
  root.append(div)
}

const postTest = async () => {
  const sendTest = await useFetch('/test', 'POST', '안녕하세요 브라우저에서 보냈어요', 'hi')
  const { result } = sendTest
  const div = document.createElement('div')
  div.innerText = result
  root.append(div)
}

buildInsa()
postTest()
chartViewer()