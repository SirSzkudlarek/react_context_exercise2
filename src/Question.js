import React, { useContext } from 'react';

import AnswerButton from './AnswerButton';

import { AppContext } from './AppContext';

import './style/Question.css';

const Question = () => {
  const { sex } = useContext(AppContext);
  const { race } = useContext(AppContext);
  const { profession } = useContext(AppContext);
  const { hasBegin } = useContext(AppContext);

  const sexQuestion = (
    <div className="question-wrapper">
      <h3>What sex are you?</h3>
      <div className="button-wrapper">
        <AnswerButton text="Male" question="Sex" answer="male" />
        <AnswerButton text="Female" question="Sex" answer="female" />
      </div>
    </div>
  );

  const raceQuestion = (
    <div className="question-wrapper">
      <h3>What race are you?</h3>
      <div className="button-wrapper">
        <AnswerButton text="Elf" question="Race" answer="elf" />
        <AnswerButton text="Human" question="Race" answer="human" />
        <AnswerButton text="Dwarf" question="Race" answer="dwarf" />
      </div>
    </div>
  );

  const professionQuestion = (
    <div className="question-wrapper">
      <h3>What profession are you?</h3>
      <div className="button-wrapper">
        <AnswerButton text="Ranger" question="Profession" answer="ranger" />
        <AnswerButton text="Mage" question="Profession" answer="mage" />
        <AnswerButton text="Fighter" question="Profession" answer="fighter" />
      </div>
    </div>
  );

  return (
    <div>
      {hasBegin && sex == null ? sexQuestion : null}
      {sex !== null && race == null ? raceQuestion : null}
      {race !== null && profession == null ? professionQuestion : null}
    </div>
  );
};

export default Question;
