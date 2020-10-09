import React from 'react';
import styled,{css} from 'styled-components';

const Box = styled.div`
    /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다 */
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
`;
// Tagged템플릿 리터럴 
// `hello ${foo:bar} ${() => 'world!'}` 결과 : "hello [object object] () => 'world'"
// 템플릿에 객체나 함수를 넣으면 형태를 잃어버리게 되는데 객채는 [object object] 함수는 함수 내용이 그대로 문자열화 되어 나타난다.
// 다음과 같은 함수를 작성하고 나서 해당 함수 뒤에 템플릿 리터럴을 넣으면 템플릿 안에 넣은 값을 온전히 추출 할 수 있다.
// function tagged(...args){
//     console.log(args);
// }
// tagged`hello ${foo:bar} ${() => 'world!'`;
    
const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  /* & 문자를 사용하여 Sass 처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
  /* 다음 코드는 inverted 값이 true 일 때 특정 스타일을 부여해줍니다. */
  ${props =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

// 태그 타입을 styled 함수의 인자로 전달
const MyInput = styled('input')`
    background:gray;
`
// 아예 컴포넌트 형식의 값을 넣어 줌
// const StyledLink = styled(Link)`
//     color: blue;    
// `

const StyledComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyledComponent;