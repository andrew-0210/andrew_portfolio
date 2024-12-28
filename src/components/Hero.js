import React from 'react';
import Container from './Container';
import AnimationSpline from './AnimationSpline';

const Hero = () => {
  return (
    <Container>
      <section className='flex items-center justify-center h-screen  relative'>
        <div className='absolute w-screen'>
          <AnimationSpline />
        </div>
        <div className='flex flex-col gap-[1.5rem] lg:max-w-[654px] items-center z-10'>
          <h1>
            Designing interfaces that feel <span>natural</span> and{' '}
            <span>connect</span> with the <span>users</span>.
          </h1>
          <p className='text-center'>
            Hey👋🏻 I am Andrew, a User Experience & Product Designer who creates
            delightful user experiences that not only look amazing but also
            function flawlessly.
          </p>
          <div>
            <div className='rounded-full bg-[#33793B] py-[0.5rem] px-[1.5rem] text-[#fff] text-center inline-flex items-center justify-center gap-2 '>
              <div className='relative'>
                <div className='w-3 h-3 bg-[#6FE485] rounded-full animate-ping absolute' />
                <div className='w-3 h-3 bg-[#6FE485] rounded-full' />
              </div>
              <p>
                Currently working at{' '}
                <span className='font-bold text-[#fff]'>Adaptify Digital</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
