import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { UserInfoContext } from '../../context/UserInfoContext';

function Header() {
  const {isDark} = useContext(ThemeContext)
  const user = useContext(UserInfoContext);
  return (
    <div>
      <header
        className='header'
        style={{
          backgroundColor: isDark ? 'black' : 'lightgray',
          color: isDark ? 'white' : 'black'
        }}
      >
        <h1>Welcom {user}</h1>

      </header>
    </div>
  );
}

export default Header;