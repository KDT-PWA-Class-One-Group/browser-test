import { useState } from 'react';
import useFetch from './hook/useFetch';
import './style.css'

const App = () => {

  const [result, setResult] = useState<string | null>(null)

  const helloAction = async () => {
    const data = await useFetch('/')
    setResult(data)
  }
  
  const postTestAction = async () => {
    const data = await useFetch('/post-test', 'POST', '안녕하세요', 'imsi-token-data')
    console.log(data)
  }

  const getTop5 = async () => {
    const data = await useFetch('/user-info?option=top_5')
    const newResult = data.map((item : Record<string, number>, idx : number) => {
      let text = ''
      for(let genre in item){
        text = `${idx + 1}위 : ${genre}는 ${item[genre]}명이 선호합니다.`
      }
      return text
    })
    setResult(newResult)
  }

  const getAllList = async () => {
    const data = await useFetch('/user-info?option=all')
    const text : string = 
    `20대가 선호하는 전체 리스트로는
    ${data.join(', ')}
    등 이 있습니다.
    `
    setResult(text)
  }

  return (
    <div className="App">
      <h1>파이썬 데이터 결과 보기</h1>
      <button type='button' onClick={helloAction}>안녕 버튼</button>
      <button type='button' onClick={postTestAction}>테스트 버튼</button>
      <button type='button' onClick={getTop5}>20대 선호 장르 top5</button>
      <button type='button' onClick={getAllList}>20대 선호 장르 전체</button>
      <hr/>
      <div>
        {typeof result === 'string' && <p>{result}</p>}

        {Array.isArray(result) &&
         result.map((item : string) => {
           return <p key={item}>{item}</p>
         })}
      </div>
    </div>
  )
}

export default App





