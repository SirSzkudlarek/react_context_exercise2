import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [hasBegin, setHasBegin] = useState(false);
  const [sex, setSex] = useState(null);
  const [race, setRace] = useState(null);
  const [profession, setProfession] = useState(null);

  const toggleHasBeginState = () => setHasBegin((prevValue) => !prevValue);

  const toggleAnswer = (e) => {
    const question = e.target.attributes.question.nodeValue;
    const answer = e.target.attributes.answer.nodeValue;
    if (question === 'Sex') {
      setSex(answer);
    } else if (question === 'Race') {
      setRace(answer);
    } else if (question === 'Profession') {
      setProfession(answer);
    }
  };

  const toggleReset = () => {
    setSex(null);
    setRace(null);
    setProfession(null);
    setHasBegin(false);
  };

  return (
    <AppContext.Provider
      value={{
        hasBegin,
        sex,
        race,
        profession,
        toggleHasBeginState,
        toggleAnswer,
        toggleReset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
