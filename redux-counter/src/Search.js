import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Search = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const signedIn = useSelector((state) => state.isLogged);

  return (
    <div>
      <input type="text" />

      <h1>Hey {counter}</h1>
      <button onClick={() => dispatch({ type: 'SIGN_IN' })}>Sign In</button>
      {signedIn && <h2>Logged!</h2>}
    </div>
  );
};

export default Search;
