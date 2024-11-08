import useFetch from './hook/useFetch';

const App = () => {

  const handleClick = async () => {
    const loadedTestData = await useFetch('/')
    alert(loadedTestData)
  }
  
  return (
    <div className="App">
      <h1>리액트 구성 완료</h1>
      <button onClick={handleClick}>안녕 버튼</button>
    </div>
  )
}

export default App