import GlobalStyle from './globalStyle';
import AppContainer from './components/AppContainer';
import Logo from './components/Logo';
import TodoForm from './features/todos/TodoForm';
import TodoList from './features/todos/TodoList';
import StatusFilter from './components/StatusFilter';
import { useSelector } from 'react-redux';
import { StatusFilters } from './features/filter/filterSlice';

function App() {
  const { status } = useSelector((state) => state.filter);
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Logo />
        <StatusFilter />
        {status !== StatusFilters.Completed && <TodoForm />}
        <TodoList />
      </AppContainer>
    </>
  );
}
export default App;
