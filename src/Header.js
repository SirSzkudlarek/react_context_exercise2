import { useContext } from 'react';

import { AppContext } from './AppContext';

const Header = () => {
  const { sex } = useContext(AppContext);
  const { race } = useContext(AppContext);
  const { profession } = useContext(AppContext);

  const header =
    sex !== null && race !== null && profession !== null ? (
      <h1>Its your character!</h1>
    ) : (
      <h1>Create your character!</h1>
    );

  return header;
};

export default Header;
