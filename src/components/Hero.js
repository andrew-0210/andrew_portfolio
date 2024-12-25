import React from 'react';
import Container from './Container';

const Hero = () => {
  return (
    <Container>
      <section className='flex items-center justify-center h-screen'>
        <div className='flex flex-col gap-[1.5rem] lg:max-w-[654px]'>
          <h1>
            Designing interfaces that feel <span>natural</span> and{' '}
            <span>connect</span> with the <span>users</span>.
          </h1>
          <p className='text-center'>
            Hey👋🏻 I am Andrew, a User Experience & Product Designer who creates
            delightful user experiences that not only look amazing but also
            function flawlessly.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
