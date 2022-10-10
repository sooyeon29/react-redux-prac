//액션 이름 만들어주기
//추가하기 버튼을 눌렀을때 변화되어야 하는 액션 이름 붙여주기
const ADD_BUTTON = "ADD_BUTTON";

//액션 만들어주기-리듀서에게 보낼 명령만들기 (export)
//  사용자가 입력한값 payload ---> 나는 입력한 값을 wordget이라고 이름지어줬다
export const addWord = (wordget) => {
  //    console.log(wordget)  ---> 인풋값이 입력한값 ok
  return {
    type: ADD_BUTTON,
    wordget,
  };
};

//초기값 지정 initialState
// 지금 초기값은 온서브밋 핸들러를 통해 렌더링 되는 값들중 초기값으로 설정해두는것
const initialState = ["일요일에 다시해보기"];
// 하나만 있는 경우에는 word: 이부분을 생략할 수 있다

//리듀서 만들기
//리듀서에 있는 action은 우리가 App.js에서 dispatch로 보낸 액션객체이다
// ---> 나는 위에서 디스패치로 보낸것을 worget이라고 해줬다
const wordAdder = (state = initialState, action) => {
  // console.log(wordAdder)
  // console.log(state)  ---> 요기서 state는 initialState값을 보여줌
  // console.log(action)  ---> 새로 입력한값 {type: 'ADD_BUTTON, wrodget: 'ㄴㄴㄴ'}
  switch (action.type) {
    case ADD_BUTTON:
      return [...state, action.wordget];
    //  위의 initialState 부분의 내용에 { word: [] } 이렇게 되어있던것을 그냥 []으로 변경했기 때문에
    // {...state,[...state.word, action.word]} 부분도 바꿔준 것이다
    // 뒤 두개를 보면! 모양이 똑같다!! 초가 값과 같은 모양으로 만들어서 바꿔야지
    // 없어지는 값이 생기는 등의 오류가 생기지 않는다

    default:
      return state;
  }
};

// export default 리듀서명
export default wordAdder;
