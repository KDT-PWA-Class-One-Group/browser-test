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

buildInsa()
postTest()
chartViewer()