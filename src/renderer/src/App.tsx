import Search from '@renderer/components/Search'
import Result from './components/Result'
import { CoderProvider } from './context/CodeContext';
import useRegisterShortcut from './hooks/useRegisterShortcut';

function App(): JSX.Element {
  const { register } = useRegisterShortcut();
  register('Search', 'CommandOrControl+Shift+/');
  return (
    <CoderProvider>
      <Search />
      <Result />
    </CoderProvider>
  );
}

export default App
