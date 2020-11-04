import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodoContainer from './containers/TodosContainer';

function App() {
  return (
    <>
    <CounterContainer />
    <hr />
    <TodoContainer />
    </>
  );
}

export default App;
