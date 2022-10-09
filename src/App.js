import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux" // -> 디스페치를 가져와 사용하기위해 임폿해준다
import {addWord} from "./redux/modules/todos"
import styled from "styled-components"  

const App = () => {

  //onChange에서 인풋박스에 입력되는 값을 받기 위해  useState 훅을 이용!
  const [word, setWord] = useState("")
  // 인풋박스의 값을 받기 위해 이벤트 함수를 만들어준다
  const wordsChangeInInput = (event) => {
    setWord(event.target.value)
  }

  // 스토어에 보내기 위해 dispatch를 선언해준다
  const dispatch = useDispatch()

  // 온서브밋 핸들러를 만들어준다
  const submitTitle = (e) => {
    e.preventDefault()
    
    if (word === "") return

    // 새로운 값을 구독..?
    dispatch(addWord(word))
    // ❓❓❓ console.log(word) ---> initialState값이나옴
  }

  // 리듀서와 잘 연결되었는지 확인!(연결) useSelector
  // state가 무엇인지 궁금하다면!! => 뒤에 {console.log(state) return state}해서 확인해보기!
  const gloablWordsInput = useSelector((state) => state.wordAdder.word)
  // console.log(gloablWordsInput)
// ❓❓❓console.log(gloablWordsInput) ===> 인풋값을 찍을때마다 initialState가 찍힘;;❓

  return(
    <div>
    <span>TodoList 제목 만들어주기</span>
    {/* // 이벤트 함수를 위하여 onSubmit를 만들어준다 */}
    <form onSubmit={submitTitle}>
    {/* // 인풋 값을 이벤트 함수로 받아오기 위해 onChange를 만들어준다 */}
    <input
    type="text"
    onChange={wordsChangeInInput}
    />
    <button>추가하기</button>
    </form>
    {gloablWordsInput.map((words) => {
      return (
        <div>
          {words}
        </div>
      )
    })}

    </div>
  )
}

export default App