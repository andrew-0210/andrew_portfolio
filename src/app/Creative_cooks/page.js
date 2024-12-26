import Container from '@/components/Container';
import Image from 'next/image';
import React from 'react';

const target = [
  'Young professionals or students living away from home, who may struggle to find healthy and affordable food options.',
  'Beginners who are just starting to learn cooking and find the process daunting.',
  'Busy working women and homemakers who want to save time on prep like chopping and cutting ingredients.',
];

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
      <section className='py-[3rem]'>
        <div className='relative w-screen h-[20rem] lg:h-[90vh] lg:w-screen'>
          <Image
            src='/Cover@850h.png'
            alt='Creative_cooks'
            fill={true}
            className='object-contain'
          />
        </div>
      </section>
      <Container>
        <section className='max-w-[50.938rem] mx-auto flex flex-col gap-[5rem]'>
          <section>
            <p id='project-data' className='text-[1.125rem] lg:text-[1.25rem]'>
              Picture this: you&apos;ve had a long day, your fridge looks
              uninspiring, and the thought of cooking feels like a chore.
              That&apos;s where “Creative Cooks” steps in. More than just a
              recipe box delivery app, it&apos;s a gateway to fast, convenient,
              and joy-filled cooking. By delivering curated recipe boxes packed
              with pre-measured ingredients and simple instructions, Creative
              Cooks transforms mealtime into a fun and effortless
              experience—helping users rediscover the magic of home cooking.
            </p>
          </section>
          <section>
            <h2 className='font-semibold text-[#EB5939] pb-[1.5rem]'>
              Problem Statement
            </h2>
            <p id='project-data' className='text-[1.125rem] lg:text-[1.25rem]'>
              Cooking is a life skill everyone needs, especially working
              professionals living away from their families. However, for many,
              cooking feels overwhelming—it&apos;s not just about knowing a
              recipe but also about hunting for the right ingredients, which
              takes time and effort. Sure, YouTube offers countless recipes, and
              delivery apps can get groceries to your doorstep, but putting it
              all together can still be a hassle. There&apos;s a clear
              opportunity to make the entire cooking experience easier, more
              fun, and more accessible for anyone eager to try their hand at
              cooking.
            </p>
          </section>
          <section>
            <h2 className='font-semibold text-[#EB5939] pb-[1.5rem]'>Intent</h2>
            <p id='project-data' className='text-[1.125rem] lg:text-[1.25rem]'>
              The app lets users easily find recipe boxes tailored to their
              needs, complete with all the ingredients they require. No more
              last-minute grocery runs or missing items—just hassle-free cooking
              and delicious results every time.
            </p>
          </section>
          <section>
            <h2 className='font-semibold text-[#EB5939] pb-[1.5rem] '>
              Target Audience
            </h2>
            <p id='project-data' className='text-[1.125rem] lg:text-[1.25rem]'>
              The app is designed for anyone aged 17 to 60 who wants to make
              cooking simple and enjoyable. This includes:
            </p>
            <ul>
              {target.map((tar, index) => {
                return (
                  <li
                    className='text-[1.125rem] lg:text-[1.25rem] leading-[1.5] font-medium list-disc'
                    key={index}
                  >
                    {tar}
                  </li>
                );
              })}
            </ul>
          </section>
          <section>
            <h2 className='font-semibold text-[#FFF] text-center'>
              Whether it&apos;s for convenience, better health, or learning a
              new skill, this app is perfect for anyone looking to simplify
              their time in the kitchen.
            </h2>
          </section>
        </section>
      </Container>
      <section className='py-[3rem]'>
        <div className='relative w-screen h-[20rem] lg:h-[90vh] lg:w-screen'>
          <Image
            src='/Cover@850h.png'
            alt='Creative_cooks'
            fill={true}
            className='object-contain'
          />
        </div>
      </section>
    </main>
  );
};

export default CreativeCooks;
