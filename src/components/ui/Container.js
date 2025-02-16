import React from 'react';

const Container = ({ children }) => {
  return (
    <div className='px-[1.25rem] lg:px-0 lg:max-w-[1420px] lg:mx-auto w-screen'>
      {children}
    </div>
  );
};

export default Container;
