import Container from '@/components/Container';
import Image from 'next/image';
import React from 'react';

const CreativeCooks = () => {
  return (
    <main className='overflow-x-hidden'>
      <Container>
        <section className=' pt-[10rem] lg:h-[40vh] flex flex-col justify-center items-center uppercase '>
          <h1 className='text-[#eb5939]'>
            The Inside Scoop on Designing a Curated Recipe Delivery Experience
          </h1>
        </section>
        <section className='flex justify-between pt-[6rem] uppercase'>
          <div>
            <h5>Type of Work</h5>
            <h5 className='text-[#6C6C6C]'>Case Study</h5>
          </div>
          <div>
            <h5>Role</h5>
            <h5 className='text-[#6C6C6C]'>Designer</h5>
          </div>
          <div>
            <h5>Year</h5>
            <h5 className='text-[#6C6C6C]'>2021</h5>
          </div>
        </section>
      </Container>
      <section className='pt-[2rem]'>
        <div className='relative w-screen h-[20rem] lg:h-[90vh] lg:w-screen'>
          <Image
            src='/Cover.png'
            alt='Creative_cooks'
            fill={true}
            className='object-cover'
          />
        </div>
      </section>
    </main>
  );
};

export default CreativeCooks;
