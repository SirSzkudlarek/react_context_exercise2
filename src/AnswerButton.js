import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import './style/AnswerButton.css';

const AnswerButton = (props) => {
  const { toggleAnswer } = useContext(AppContext);
  const { text, question, answer } = props;

  return (
    <button
      className="answer-button"
      onClick={toggleAnswer}
      question={question}
      answer={answer}
    >
      {text}
    </button>
  );
};

export default AnswerButton;
