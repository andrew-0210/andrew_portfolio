import Container from './Container';

const AboutMe = () => {
  return (
    <Container>
      <section
        className='flex flex-col gap-[1.5rem] lg:gap-[3rem] py-[5rem]'
        id='about-me'
      >
        <h4>About Me</h4>
        <h2>
          Selective by nature, driven by quality - I design{' '}
          <span>digital experiences</span> that make a{' '}
          <span>lasting impact</span>✨
        </h2>
      </section>
    </Container>
  );
};

export default AboutMe;
