import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // -> 디스페치를 가져와 사용하기위해 임폿해준다
import { addWord } from "./redux/modules/todos";
import styled from "styled-components";

const StTitle = styled.div`
  margin: 30px auto 20px 30px;
  font-size: 30px;
  font-weight: bold;
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;

  margin: 10px 10px 20px 30px;
  button {
    background-color: black;
    border-radius: 10px;
    color: white;
    margin: 10px;
    font-size: 20px;
    &:hover {
      background-color: white;
      color: black;
    }
  }
  input {
    width: 300px;
    height: 40px;
    /* 인풋박스랑 버튼을 맞춰주고 싶어요ㅠㅠ */
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  /* ❓박스가 옆으로 몇개 밑으로 몇개 요렇게... */

  margin: 10px auto auto 30px;
  width: 300px;
  height: 100px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  span {
    word-break: break-all;
    font-size: 20px;
  }
`;

const App = () => {
  //onChange에서 인풋박스에 입력되는 값을 받기 위해  useState 훅을 이용!
  const [word, setWord] = useState("");
  // 인풋박스의 값을 받기 위해 이벤트 함수를 만들어준다
  const wordsChangeInInput = (event) => {
    setWord(event.target.value);
  };

  // 스토어에 보내기 위해 dispatch를 선언해준다
  const dispatch = useDispatch();

  // 온서브밋 핸들러를 만들어준다
  const submitTitle = (e) => {
    e.preventDefault();

    if (word === "") return;

    // 새로운 값을 구독..?
    dispatch(addWord(word));
    setWord("");
    // console.log(word) ---> 인풋으로 받은 값이 나온다
  };

  // 리듀서와 잘 연결되었는지 확인!(연결) useSelector
  // state가 무엇인지 궁금하다면!! => 뒤에 {console.log(state) return state}해서 확인해보기!
  // 히니민 깂을 받아와서 initialState에서 word: 부분을 지워줬으니까
  // 유즈 설렉터로 가져오는 부분도 리듀서를 바로 가져오면 ok!
  const gloablWordsInput = useSelector((state) => state.wordAdder);
  // (() => {})  ---> 함수모양! 지금 useSelector 안에서는 return값이 하나 임으로 이를 생략 괄호도 함께 생략
  // console.log(gloablWordsInput);
  // ---> 인풋값을 입력할때마다 이전 값들의 배열이 다 나옴
  // -> 값이 변할때마다 리렌더링 됨으로 인풋박스에 넣을때마다 리렌더링되느라그럼!

  return (
    <div>
      <StTitle>TodoList 제목 만들어주기</StTitle>

      {/* // 이벤트 함수를 위하여 onSubmit를 만들어준다 */}
      <Form onSubmit={submitTitle}>
        {/* // 인풋 값을 이벤트 함수로 받아오기 위해 onChange를 만들어준다 */}
        <input type="text" value={word} onChange={wordsChangeInInput} />

        <button>추가하기</button>
      </Form>
      {gloablWordsInput.map((words) => {
        return (
          <Box>
            <div
              // ===> 키 값을 꼭써주어야한다!
              //고유의 값 -> 보통 아이디 값으로 많이 넣어준다 지금 id가 없어서 index값을 넣어줘서
              //고유값을 만들어서 key로 넣어주었다.
              key={words}
            >
              <span>{words}</span>
            </div>
          </Box>
        );
      })}
    </div>
  );
};

export default App;
