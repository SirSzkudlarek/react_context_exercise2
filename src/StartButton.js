import React, { useContext } from 'react';

import { AppContext } from './AppContext';

import './style/StartButton.css';

const StartButton = () => {
  const { hasBegin } = useContext(AppContext);
  const { toggleHasBeginState } = useContext(AppContext);

  const startButton = (
    <button className="start-button" onClick={toggleHasBeginState}>
      Begin Creation..
    </button>
  );

  const condition = !hasBegin;

  return condition ? startButton : null;
};

export default StartButton;
