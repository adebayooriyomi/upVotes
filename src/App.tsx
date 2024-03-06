
import './App.css'
import { UpVoteProvider } from './context/UpVoteContext';
import { UpVoteManager } from './components/UpVoteManager'

function App() {
  return (
    <UpVoteProvider>
      <UpVoteManager />
    </UpVoteProvider>
  )
}

export default App




