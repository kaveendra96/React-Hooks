import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux'
import TodoInput from './component/TodoInput'
import TodoList from './component/TodoList'

function App() {
  return (
    <Provider store={ store }>
        <div className="App">
            <TodoInput/>
            <TodoList/>
        </div>
    </Provider>
  );
}

export default App;
