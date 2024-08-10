import Search from '@renderer/components/Search'
import Result from './components/Result'
import { CoderProvider } from './context/CodeContext';

function App(): JSX.Element {

  return (
    <CoderProvider>
      <Search />
      <Result />
    </CoderProvider>
  );
}

export default App
