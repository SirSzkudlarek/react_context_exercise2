import AppProvider from './AppContext';
import Question from './Question';
import StartButton from './StartButton';
import Header from './Header';
import Character from './Character';
import ResetButton from './ResetButton';

import './App.css';

const App = () => (
  <div>
    <AppProvider>
      <div className="page-wrapper">
        <Header />
        <div className="content-wrapper">
          <StartButton />
          <Question />
          <Character />
        </div>

        <ResetButton />
      </div>
    </AppProvider>
  </div>
);

export default App;
