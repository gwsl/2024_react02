import React from 'react';

function Header({isDark}) {
  return (
    <div>
      <header
        className='header'
        style={{
          backgroundColor: isDark ? 'black' : 'lightgray',
          color: isDark ? 'white' : 'black'
        }}
      >
        <h1>Welcom 홍길동</h1>

      </header>
    </div>
  );
}

export default Header;