import { useContext } from 'react';

import { AppContext } from './AppContext';

import './style/ResetButton.css';

const ResetButton = () => {
  const { sex } = useContext(AppContext);
  const { race } = useContext(AppContext);
  const { profession } = useContext(AppContext);
  const { toggleReset } = useContext(AppContext);

  const resetButton = (
    <button className="reset-button" onClick={toggleReset}>
      Reset
    </button>
  );
  const condition = sex !== null && race !== null && profession !== null;
  return condition ? resetButton : null;
};

export default ResetButton;
